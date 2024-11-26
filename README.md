React Router Admin Dashboard

Overview

    This project is a React-based application that utilizes React Router for seamless navigation between pages. It incorporates role-based access control, ensuring that only administrators can access the dashboard. The dashboard dynamically fetches and displays data.

 Features

    - Role-Based Access Control: Access to the dashboard is restricted to admin users only.
    - Dynamic Data Fetching: The dashboard retrieves and presents data from the backend.
    - React Router Integration: Provides smooth navigation across different routes.

Routes Description

    1. `/` (Login):
        This route displays the login page where users can authenticate themselves.

    2. `/admin/dashboard` (Dashboard):
        This page is accessible only to users with admin roles. It fetches data from the backend and presents it in a user-friendly manner.

    3. `/restrict` (Restricted):
        This route redirects unauthorized users attempting to access protected areas.

 Technologies Used

    - React: For building the user interface.
    - React Router: For implementing client-side routing.
    - Role-Based Authorization: Custom logic to enforce admin-only access.
    - Data Fetching: The dashboard dynamically retrieves data using APIs.

 Installation

    1. Clone the repository:

        git clone <repository_url>

    2. Navigate to the project directory:

        cd <project_directory>

    3. Install dependencies:

        npm install

    4. Start the development server:

        npm start


 Usage

    1. Open the app in your browser:

        http://localhost:3000

    2. Log in as an admin user.