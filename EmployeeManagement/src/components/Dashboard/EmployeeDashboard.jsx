
import Header from "../others/header"
import TaskListNumbers from "../others/TaskListNumbers" // <-- Correct import statement
import   TasksList  from "../TaskList/TasksList"

const EmployeeDashboard = ({data}) => {
  console.log("data:", data);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header data={data} />
        <TaskListNumbers data={data} />
        <TasksList  data={data} />
    </div>
  )
}

export default EmployeeDashboard