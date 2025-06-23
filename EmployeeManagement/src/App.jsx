//import React, {useEffect} from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("")
  const [loggedInUser, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {

    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser) {
        console.log("User logged in ", JSON.parse(loggedInUser))
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data)
      }
    }
  }, []);


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));

    }
    else if (authData) {
      const employee = authData.employees.find(emp => emp.email === email && emp.password === password)
      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee",data:employee }));
      }
      setUser("employee")
      console.log("User Login Successful")
    }
    else {
      alert("Invalid credentials ")
    }
  }

  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "admin"
        ? <AdminDashboard data={loggedInUser} />
        : (user === "employee"
          ? <EmployeeDashboard data={loggedInUser} />
          : null)
      }

    </>
  );
};

export default App;
