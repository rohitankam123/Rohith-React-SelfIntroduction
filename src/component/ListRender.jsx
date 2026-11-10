
function ListRender() {

    // Array of user objects
    const users = [
      {
        id: 1,
        name: "Rohith",
        email: "rohith@gmail.com",
        age: 24,
        city: "Vijayawada",
        role: "Python Developer"
      },
      {
        id: 2,
        name: "Ram",
        email: "ram@gmail.com",
        age: 25,
        city: "Hyderabad",
        role: "Frontend Developer"
      },
      {
        id: 3,
        name: "Sai",
        email: "sai@gmail.com",
        age: 23,
        city: "Vizag",
        role: "UI Designer"
      },
      {
        id: 4,
        name: "Hari",
        email: "hari@gmail.com",
        age: 26,
        city: "Mumbai",
        role: "Software Tester"
      },
      {
        id: 5,
        name: "Teja",
        email: "teja@gmail.com",
        age: 22,
        city: "Chennai",
        role: "Full Stack Developer"
      }
    ];
  
    return (
      <section className="list-section">
        <h2>User Details</h2>
        <p className="section-description">
          List of registered users
        </p>
  
        <div className="user-container">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>City:</strong> {user.city}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default ListRender;
  