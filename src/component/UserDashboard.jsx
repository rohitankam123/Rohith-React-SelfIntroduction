
import { useEffect, useState } from "react";
import "./UserDashboard.css";

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load users. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((previousValue) => previousValue + 1);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">REACT JS • API INTEGRATION</p>
          <h1>User Directory</h1>
          <p className="subtitle">
            Explore user information fetched from JSONPlaceholder API.
          </p>
        </div>

        <button
          className="refresh-btn"
          onClick={handleRefresh}
          disabled={loading}
        >
          ↻ Refresh Users
        </button>
      </header>

      <section className="stats-section">
        <div className="stat-card">
          <span className="stat-icon">👥</span>
          <div>
            <p>Total Users</p>
            <h2>{users.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">🌐</span>
          <div>
            <p>Data Source</p>
            <h2>REST API</h2>
          </div>
        </div>
      </section>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading user information...</p>
        </div>
      )}

      {!loading && error && (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={handleRefresh}>Try Again</button>
        </div>
      )}

      {!loading && !error && (
        <section className="users-section">
          <div className="section-heading">
            <h2>All Users</h2>
            <span>{users.length} users found</span>
          </div>

          <div className="users-grid">
            {users.map((user) => (
              <article className="user-card" key={user.id}>
                <div className="card-top">
                  <div className="avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="user-id">ID: {user.id}</span>
                </div>

                <h3>{user.name}</h3>
                <p className="username">@{user.username}</p>

                <div className="user-info">
                  <div className="info-row">
                    <span className="info-label">Email</span>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </div>

                  <div className="info-row">
                    <span className="info-label">Phone</span>
                    <span>{user.phone}</span>
                  </div>

                  <div className="info-row">
                    <span className="info-label">Website</span>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.website}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <footer className="dashboard-footer">
        Built with React JS | useState | useEffect | Fetch API
      </footer>
    </div>
  );
}

export default UserDashboard;
