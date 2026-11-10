
import { useState } from "react";

// Login Component
function Login({ onLogin }) {
  return (
    <div className="login-card">
      <h2>Welcome Back!</h2>
      <p>Please login to continue.</p>

      <button onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

// Home Component
function Home({ onLogout }) {
  return (
    <div className="home-card">
      <h2>Welcome to Home!</h2>
      <p>You have successfully logged in.</p>

      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

// Main Conditional Rendering Component
function ConditionalRendering() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section className="auth-section">

      <h2>Login / Home</h2>

      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}

    </section>
  );
}

export default ConditionalRendering;
