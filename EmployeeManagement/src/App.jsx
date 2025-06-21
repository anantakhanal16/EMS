//import React, {useEffect} from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("")

  const authData = useContext(AuthContext)
  console.log(authData);

  console.log("Auth Data:", authData)
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {

      setUser("admin")
      console.log("Admin Login Successful");
    }
    else if (authData && authData.employees.find(emp => emp.email === email && emp.password === password)) {
      setUser("employee")
      console.log(user)

      console.log("User Login Successful")
    }
    else {
      alert("Invalid credentials ")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
