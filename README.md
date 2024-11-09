# Employee Management System

This is an Employee Management System built with **React** and **Vite**. It includes two roles: **Admin** and **Employee**. Admins can assign tasks to employees and view their profiles, while employees can view and accept new tasks. This application stores data in **localStorage**.

## Features

### Admin
- **Login**: Access through email and password authentication.
- **Assign Tasks**: Admins can assign tasks to employees.
- **View Employee Profile**: Admins can view details of employees.

### Employee
- **View New Tasks**: Employees can check newly assigned tasks.
- **Accept Task**: Employees can accept tasks assigned to them by the admin.

## Getting Started

### Prerequisites
- **Node.js** (v14 or newer)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adityadevraj699/Employee-Management-System.git
   cd EMS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

### Project Structure
The project structure follows the typical React + Vite format:

```
employee-management-system/
├── public/
├── src/
│   ├── components/   
│   ├── pages/        
│   ├── context/          
│   ├── utils/         
│   ├── App.jsx         
│   └── main.jsx       
├── .gitignore
├── index.html
├── package.json
└── README.md
```

### Setting Up Tailwind CSS with Vite

1. **Install Tailwind CSS**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure Tailwind in `tailwind.config.js`**:
   ```javascript
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Add Tailwind directives to `src/index.css`**:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Running the Project

To start the project locally, run:
```bash
npm run dev
```
or
```bash
yarn dev
```

### Usage

1. **Admin** can log in with predefined credentials, assign tasks to employees, and view employee profiles.
2. **Employees** can view tasks assigned by the Admin and accept them.

### Technology Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Data Storage**: localStorage


