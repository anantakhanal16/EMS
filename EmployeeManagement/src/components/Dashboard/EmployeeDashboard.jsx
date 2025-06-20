
import Header from "../others/header"
import TaskListNumbers from "../others/TaskListNumbers" // <-- Correct import statement
import   TasksList  from "../TaskList/TasksList"

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header />
        <TaskListNumbers />
        <TasksList />
    </div>
  )
}

export default EmployeeDashboard