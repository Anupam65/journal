# Journal Management System - Backend

## Overview
Spring Boot backend for the Journal Management System with MySQL database.

## Technologies
- **Spring Boot 3.4.0**
- **MySQL 8.0**
- **JPA/Hibernate**
- **Maven**

## Database Configuration
```properties
Database: project
Host: localhost:3306
Username: root
Password: password
```

## API Endpoints

### Authentication
- `POST /login` - User login
- `POST /user` - User registration

### Journals
- `POST /Journal/add` - Submit new journal (with PDF file)
- `GET /Journal/all` - Get all journals
- `GET /Journal/download/{id}` - Download journal PDF

### Reviews
- `POST /review` - Submit review
- `GET /reviews` - Get all reviews

## Running the Backend

### Prerequisites
- Java 17+
- Maven 3.9+
- MySQL 8.0+

### Start the Server
```bash
cd backend
mvn spring-boot:run
```

Server runs on: **http://localhost:8808**

## Features
- ✅ File upload (PDF stored as BLOB in database)
- ✅ CORS enabled for frontend
- ✅ Service layer architecture
- ✅ JPA repositories
- ✅ MySQL integration

## Project Structure
```
backend/
├── src/main/java/com/example/demo/
│   ├── config/          # CORS configuration
│   ├── controller/      # REST controllers
│   ├── model/          # JPA entities
│   ├── repository/     # JPA repositories
│   └── service/        # Business logic
└── src/main/resources/
    └── application.properties
```
