import UserCard from "./UserCard";
function App() {

  const users = [
      {
          name: "Rohith",
          city: "Vijayawada",
          age: 24,
          email: "rohith@gmail.com",
          phone: "9876543210"
      },
      {
          name: "Ram",
          city: "Hyderabad",
          age: 25,
          email: "ram@gmail.com",
          phone: "9876543211"
      },
      {
          name: "Sai",
          city: "Vizag",
          age: 23,
          email: "sai@gmail.com",
          phone: "9876543212"
      },
      {
          name: "Hari",
          city: "Mumbai",
          age: 26,
          email: "hari@gmail.com",
          phone: "9876543213"
      },
      {
          name: "Teja",
          city: "Chennai",
          age: 22,
          email: "teja@gmail.com",
          phone: "9876543214"
      }
  ];

  return (
      <div>
          <h1>User Details</h1>

          {users.map((user, index) => (
              <UserCard
                  key={index}
                  name={user.name}
                  city={user.city}
                  age={user.age}
                  email={user.email}
                  phone={user.phone}
              />
          ))}
      </div>
  );
}

export default App;