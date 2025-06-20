import React, {useEffect} from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import {getLocalStorage, setLocalStorage} from "./utils/localStorage.jsx";

const App = () => {
    useEffect(() => {

        getLocalStorage()
    },);
  return (
      <>
        {/* Uncomment only the component you want to show */}
        {/* <EmployeeDashboard /> */}
        <Login />
        {/* <AdminDashboard /> */}
      </>
  );
};

export default App;
