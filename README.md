# Content Calendar Application  

A **Spring Boot + Angular** application for managing text-based content efficiently with full **CRUD** (Create, Read, Update, Delete) operations. This project provides a structured way to organize and track content over time using a RESTful backend and a dynamic frontend.

---

## Features  

- **Create** new text content entries  
- **Read** and display existing text content  
- **Update** content details in an intuitive UI  
- **Delete** unnecessary content  
- **RESTful API** for seamless integration  
- **Modern UI** with Angular and Bootstrap  

---

## Tech Stack  

### Backend (Spring Boot)  
- **Java** – Main programming language  
- **Spring Boot** – Backend framework  
- **Spring MVC** – REST API handling  
- **Spring Data JPA** – Database operations  
- **MySQL** – Database  

### Frontend (Angular)  
- **Angular 19** – Modern UI framework  
- **TypeScript** – Frontend scripting
- **HTML** - Structure of the application
- **CSS** - Styling and Layout
- **Bootstrap** – Styling and responsive design  

### Tools  
- **Maven** – Dependency management  
- **Postman** – API testing  
- **IntelliJ IDEA** – Development environment  
- **VSCode** - Development Environment
---

## Implementation

### **Setup Backend (Spring Boot)**  

- Clone the repository:  
   ```sh
   git clone https://github.com/Nikitha-Anand/ContentCalendarApp.git
   cd content-calendar/backend
  
### **Configure MySQL database in application.properties**
- Database Connection Settings:
  ```sh
  spring.datasource.url=jdbc:mysql://localhost:3306/content_calendar?useSSL=true&createDatabaseIfNotExist=true
  spring.datasource.username=root
  spring.datasource.password=

### **API is available at : http://localhost:8080/api/content**

### **Setup Frontend (Angular)** 
- Navigate to the Frontend Directory:
  ```sh
  cd src/main/content-calendar-frontend

- Install Project Dependencies:
  ```sh
  npm install

- Start the frontend with:
  ```sh
  ng serve
  
### **This will launch the application at: http://localhost:4200/**
---

# **API Endpoints:**
- GET:	/api/content : Fetch all content
- POST:	/api/content : Add new content
- PUT:	/api/content/{id} : Update content by ID
- DELETE:	/api/content/{id} : Delete content by ID

 # **Future Improvements**
- Implement authentication & user roles
- Add content categorization
- Improve UI with advanced filtering
- Dockerize for easy deployment
