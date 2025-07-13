import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Listen for auth state changes (user login/logout)
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(setUser);
    return unsub;
  }, []);

  // Fetch expenses from Firestore for the logged-in user
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "users", user.uid, "expenses"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setExpenses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, [user]);

  // Add a new expense to Firestore
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!user) return;
    await addDoc(collection(db, "users", user.uid, "expenses"), {
      amount: parseFloat(amount),
      desc,
      createdAt: new Date()
    });
    setAmount("");
    setDesc("");
  };

  // Sign up a new user
  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in an existing user
  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Log out the user
  const handleLogout = () => signOut(auth);

  // If not logged in, show signup and login forms
  if (!user) {
    return (
      <div style={{ margin: 20 }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" /><br />
          <button type="submit">Sign Up</button>
        </form>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" /><br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  // If logged in, show the expense tracker UI
  return (
    <div style={{ margin: 20 }}>
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3>Add Expense</h3>
      <form onSubmit={handleAdd}>
        <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Amount" required />
        <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" required />
        <button type="submit">Add</button>
      </form>
      <h3>Expenses</h3>
      <ul>
        {expenses.map(exp => (
          <li key={exp.id}>{exp.desc}: ₹{exp.amount}</li>
        ))}
      </ul>
      <h3>Total Spent: ₹{expenses.reduce((sum, exp) => sum + exp.amount, 0)}</h3>
    </div>
  );
}

export default App;
