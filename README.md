# 📚 Journal Management System

A full-stack web application for managing academic journal submissions, reviews, and publications.

## 🌐 Live Demo
**Frontend**: [https://anupam65.github.io/journal/](https://anupam65.github.io/journal/)

## 🚀 Features

### Frontend (React + Vite)
- ✅ User Registration & Authentication
- ✅ Journal Submission with PDF Upload
- ✅ Browse All Journals
- ✅ Download Journal PDFs
- ✅ Submit & View Reviews
- ✅ Responsive Design
- ✅ Modern UI with Animations

### Backend (Spring Boot)
- ✅ RESTful API
- ✅ MySQL Database Integration
- ✅ File Upload (PDF stored as BLOB)
- ✅ CORS Configuration
- ✅ Service Layer Architecture
- ✅ JPA/Hibernate ORM

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI Framework
- **Vite** - Build Tool
- **React Router** - Navigation
- **Axios** - HTTP Client
- **Formik + Yup** - Form Validation
- **Lucide React** - Icons

### Backend
- **Spring Boot 3.4.0** - Framework
- **MySQL 8.0** - Database
- **Maven** - Build Tool
- **JPA/Hibernate** - ORM
- **Lombok** - Boilerplate Reduction

## 📁 Project Structure

```
journal/
├── src/                    # Frontend source files
│   ├── App.jsx            # Main dashboard
│   ├── login.jsx          # Login page
│   ├── registration.jsx   # User registration
│   ├── form.jsx           # Journal submission
│   ├── journals.jsx       # Browse journals
│   ├── reviews.jsx        # View reviews
│   └── route.jsx          # Routing configuration
├── backend/               # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/example/demo/
│   │       ├── config/    # CORS configuration
│   │       ├── controller/# REST controllers
│   │       ├── model/     # JPA entities
│   │       ├── repository/# Data repositories
│   │       └── service/   # Business logic
│   └── src/main/resources/
│       └── application.properties
├── .github/workflows/     # CI/CD configuration
└── public/                # Static assets
```

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** 18+ and npm
- **Java** 17+
- **Maven** 3.9+
- **MySQL** 8.0+

### Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Frontend runs on: **http://localhost:5173/journal/**

### Backend Setup

1. **Create MySQL Database**
```sql
CREATE DATABASE project;
```

2. **Configure Database** (backend/src/main/resources/application.properties)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/project
spring.datasource.username=root
spring.datasource.password=password
```

3. **Run Backend**
```bash
cd backend
mvn spring-boot:run
```

Backend runs on: **http://localhost:8808**

## 🌐 API Endpoints

### Authentication
- `POST /login` - User login
- `POST /user` - User registration

### Journals
- `POST /Journal/add` - Submit journal (multipart/form-data)
- `GET /Journal/all` - Get all journals
- `GET /Journal/download/{id}` - Download PDF

### Reviews
- `POST /review` - Submit review
- `GET /reviews` - Get all reviews

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for automatic deployment:

1. **Trigger**: Push to `main` branch
2. **Build**: Compile React app with Vite
3. **Deploy**: Automatically deploy to GitHub Pages

Workflow file: `.github/workflows/cicd.yml`

## 📊 Database Schema

### User Table
- id (Primary Key)
- name
- email (Unique)
- password
- phone
- affiliation
- role (Author/Reviewer)

### Journal Table
- id (Primary Key)
- title
- abstract
- author
- affiliation
- fileData (LONGBLOB)
- submittedAt (Timestamp)

### Review Table
- id (Primary Key)
- journal
- final (Verdict)
- originality (Rating 1-5)
- scientific (Rating 1-5)
- clarity (Rating 1-5)
- relevance (Rating 1-5)
- summary
- author (Feedback)
- editor (Confidential notes)

## 🚀 Deployment

### Frontend (GitHub Pages)
Automatically deployed via GitHub Actions to:
**https://anupam65.github.io/journal/**

### Backend
Deploy to any cloud platform:
- **Heroku**
- **AWS EC2**
- **Google Cloud**
- **Azure**

Update the frontend API endpoints in:
- `src/login.jsx`
- `src/registration.jsx`
- `src/form.jsx`
- `src/journals.jsx`
- `src/reviews.jsx`

## 👨‍💻 Development

### Run Locally
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
mvn spring-boot:run
```

### Build for Production
```bash
# Frontend
npm run build

# Backend
cd backend
mvn clean package
```

## 📝 License
This project is open source and available under the MIT License.

## 👤 Author
**Anupam**
- GitHub: [@Anupam65](https://github.com/Anupam65)
- Email: anupam9866@gmail.com

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

---

**Made with ❤️ using React, Spring Boot, and MySQL**
