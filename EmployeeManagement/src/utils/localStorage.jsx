const employees=[
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design login UI",
                "taskDescription": "Create the initial login screen for the app.",
                "taskDate": "2025-06-15",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix auth bug",
                "taskDescription": "Resolve the session expiration issue.",
                "taskDate": "2025-06-10",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Deploy test build",
                "taskDescription": "Push the QA build to staging.",
                "taskDate": "2025-06-01",
                "category": "Deployment",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Write API docs",
                "taskDescription": "Document the payment module API.",
                "taskDate": "2025-06-12",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Test payment gateway",
                "taskDescription": "Perform integration tests for Razorpay.",
                "taskDate": "2025-06-08",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Update dependencies",
                "taskDescription": "Update outdated NPM packages.",
                "taskDate": "2025-06-03",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Review code PR #102",
                "taskDescription": "Perform peer code review for task #102.",
                "taskDate": "2025-06-17",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Redesign dashboard",
                "taskDescription": "Modernize dashboard layout using Tailwind CSS.",
                "taskDate": "2025-06-14",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Optimize DB queries",
                "taskDescription": "Analyze and improve slow SQL queries.",
                "taskDate": "2025-06-09",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Prepare test cases",
                "taskDescription": "Write unit test cases for user module.",
                "taskDate": "2025-06-04",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Create DB schema",
                "taskDescription": "Define initial schema for user and task modules.",
                "taskDate": "2025-06-13",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Conduct usability test",
                "taskDescription": "Collect feedback from 3 users on new UI.",
                "taskDate": "2025-06-11",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Fix CI/CD pipeline",
                "taskDescription": "Resolve errors in GitHub Actions workflow.",
                "taskDate": "2025-06-05",
                "category": "Deployment",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Update README",
                "taskDescription": "Add setup instructions and contribution guide.",
                "taskDate": "2025-06-02",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Implement dark mode",
                "taskDescription": "Add dark mode toggle for main layout.",
                "taskDate": "2025-06-16",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Research analytics tools",
                "taskDescription": "Evaluate Google Analytics vs. Plausible.",
                "taskDate": "2025-06-07",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Fix bug in report export",
                "taskDescription": "CSV export throwing 500 error.",
                "taskDate": "2025-06-06",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];


const admin=[
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];
export  const setLocalStorage = () =>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
};
export const getLocalStorage=()=>{
const employees=JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))
console.log(employees,admin)
}
