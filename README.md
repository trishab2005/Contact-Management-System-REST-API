# 📖 Contact Management System

A sleek and modern full-stack application for managing contacts, built with **Spring Boot** and **React**. This system provides a seamless interface to perform all basic CRUD (Create, Read, Update, Delete) operations, combining a robust backend with an attractive, responsive front-end.

## ✨ Features

* **Create Contacts**: Easily add new contacts with their name, email, and phone number.
* **Read Contacts**: View a dynamic list of all saved contacts in a beautifully designed grid layout.
* **Update Contacts**: Edit existing contact details with a simple click on the `Edit` button.
* **Delete Contacts**: Remove unwanted contacts effortlessly.
* **Responsive UI**: The user interface adapts gracefully to different screen sizes, from desktops to mobile devices.
* **Attractive Design**: A modern, clean, and interactive design featuring subtle animations and a vibrant color palette.
* **Robust Backend**: A RESTful API built with Spring Boot, ensuring reliable and secure data management.
* **Persistent Storage**: Data is saved to a file-based H2 database, so your contacts are never lost between application restarts.

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

You need the following software installed:

* **Java Development Kit (JDK) 21** or later
* **Maven**
* **Node.js** and **npm**

### Backend Setup (Spring Boot)

1.  Navigate to the `Contact-Management-System` directory.
2.  Open the project in your favorite IDE (e.g., IntelliJ IDEA, VS Code).
3.  Run the main application file: `ContactManagementSystemApplication.java`.
    * The backend server will start on port `9999`.
    * The H2 database console can be accessed at `http://localhost:9999/h2db`.

### Frontend Setup (React)

1.  Navigate to the `contact-frontend` directory.
2.  Install the required Node.js packages:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm start
    ```
    * The front end will open automatically in your browser on port `3000`. It is configured to proxy API requests to the backend server.


## 📸 Screenshots

### FRONTEND 

![WhatsApp Image 2025-09-17 at 11 01 17](https://github.com/user-attachments/assets/e1e4be7a-8916-49f3-8427-5f58af9edfa8)

![WhatsApp Image 2025-09-17 at 11 01 18](https://github.com/user-attachments/assets/b6db062a-4364-4809-8cb4-e988a7d1f179)

![WhatsApp Image 2025-09-17 at 11 01 24](https://github.com/user-attachments/assets/ae608c82-ebf2-4398-98bb-8d3fb6805ecf)

### VALIDATION CHECK-

![WhatsApp Image 2025-09-17 at 11 02 56](https://github.com/user-attachments/assets/fd0b13b7-7304-4ed1-a46c-63b5df97b700)

### SWAGGER CHECKING-

![WhatsApp Image 2025-09-17 at 11 01 20](https://github.com/user-attachments/assets/503188fd-df2d-40ef-8e14-1c79d1d30aa0)

![WhatsApp Image 2025-09-17 at 11 01 21](https://github.com/user-attachments/assets/cf653ba8-96ac-4e49-b2ae-31bcb19c1eb7)

![WhatsApp Image 2025-09-17 at 11 01 22](https://github.com/user-attachments/assets/618a23fd-5e06-462d-aaa2-92d8744f6541)

![WhatsApp Image 2025-09-17 at 11 01 23 (1)](https://github.com/user-attachments/assets/92ba1c69-560a-4081-bfee-1c5e7d54ad84)

![WhatsApp Image 2025-09-17 at 11 01 23](https://github.com/user-attachments/assets/54593180-483d-45a6-b09a-16caed2acc5c)

![WhatsApp Image 2025-09-17 at 11 01 25](https://github.com/user-attachments/assets/2aed24b4-8e09-4275-94d2-fc86ad1c8227)

![WhatsApp Image 2025-09-17 at 11 01 26](https://github.com/user-attachments/assets/f61d3024-3236-4e35-9d8f-dbc8dbc280d4)

### H2 Database Console-

![WhatsApp Image 2025-09-17 at 11 01 24](https://github.com/user-attachments/assets/4d7c4437-a18f-48a7-9e64-f909bbafdf58)


## 🛠️ Built With

* **Backend**:
    * **Spring Boot**: The core framework for building the REST API.
    * **Spring Data JPA**: For database interaction and object-relational mapping.
    * **H2 Database**: A lightweight, file-based database for persistent storage.
    * **Lombok**: To reduce boilerplate code.

* **Frontend**:
    * **React**: A powerful JavaScript library for building the user interface.
    * **Axios**: For making API requests to the backend.
    * **CSS**: For custom styling, animations, and responsive design.

## ✍️ Author

* **Trisha Basak** - Initial work - https://github.com/trishab2005
