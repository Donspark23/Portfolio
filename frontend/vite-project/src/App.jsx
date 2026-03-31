import { Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function Admin() {
  return <h2>Admin Dashboard</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
