const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "adevraj934@gmail.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Homepage",
        "taskDescription": "Create a responsive homepage design for the new website.",
        "taskDate": "2024-10-21",
        "taskCategory": "design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI Fixes",
        "taskDescription": "Fix the UI issues in the navigation bar.",
        "taskDate": "2024-10-18",
        "taskCategory": "development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Feedback Integration",
        "taskDescription": "Incorporate feedback from the client on the dashboard design.",
        "taskDate": "2024-10-22",
        "taskCategory": "design"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Raj",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": 2,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Backend API Development",
        "taskDescription": "Develop the API for user authentication.",
        "taskDate": "2024-10-21",
        "taskCategory": "development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Setup",
        "taskDescription": "Set up MySQL database for the project.",
        "taskDate": "2024-10-20",
        "taskCategory": "development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Fix critical bugs in the production build.",
        "taskDate": "2024-10-19",
        "taskCategory": "development"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "User Onboarding Flow",
        "taskDescription": "Design and develop the user onboarding flow.",
        "taskDate": "2024-10-23",
        "taskCategory": "development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI Testing",
        "taskDescription": "Perform end-to-end UI testing for the admin panel.",
        "taskDate": "2024-10-18",
        "taskCategory": "QA"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Performance Optimization",
        "taskDescription": "Improve the performance of the client-side app.",
        "taskDate": "2024-10-21",
        "taskCategory": "development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI Updates",
        "taskDescription": "Update the UI for better accessibility.",
        "taskDate": "2024-10-19",
        "taskCategory": "design"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Kavya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Patches",
        "taskDescription": "Apply the latest security patches to the server.",
        "taskDate": "2024-10-21",
        "taskCategory": "maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Audit Logs",
        "taskDescription": "Review and analyze server audit logs.",
        "taskDate": "2024-10-20",
        "taskCategory": "maintenance"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  }
];
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage =() =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))


    return {employees,admin}
  }
  