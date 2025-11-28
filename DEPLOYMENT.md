# 🚀 Deployment Guide

## GitHub Pages Deployment (Frontend)

### Automatic Deployment
The frontend is automatically deployed to GitHub Pages via GitHub Actions whenever you push to the `main` branch.

**Live URL**: https://anupam65.github.io/journal/

### Manual Deployment
```bash
npm run deploy
```

### GitHub Actions Workflow
The workflow (`.github/workflows/cicd.yml`) automatically:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Runs tests (if available)
5. Builds the project
6. Deploys to GitHub Pages

### Verify Deployment
1. Go to: https://github.com/Anupam65/journal/actions
2. Check the latest workflow run
3. Once completed, visit: https://anupam65.github.io/journal/

## Backend Deployment Options

### Option 1: Local Development
```bash
cd backend
mvn spring-boot:run
```
Server runs on: http://localhost:8808

### Option 2: Heroku Deployment

1. **Install Heroku CLI**
```bash
heroku login
```

2. **Create Heroku App**
```bash
cd backend
heroku create journal-backend-app
```

3. **Add MySQL Database**
```bash
heroku addons:create cleardb:ignite
```

4. **Get Database URL**
```bash
heroku config:get CLEARDB_DATABASE_URL
```

5. **Update application.properties**
```properties
spring.datasource.url=${CLEARDB_DATABASE_URL}
```

6. **Deploy**
```bash
git subtree push --prefix backend heroku main
```

### Option 3: AWS EC2 Deployment

1. **Launch EC2 Instance** (Ubuntu 22.04)

2. **Install Java & MySQL**
```bash
sudo apt update
sudo apt install openjdk-17-jdk mysql-server maven
```

3. **Configure MySQL**
```bash
sudo mysql
CREATE DATABASE project;
CREATE USER 'springuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON project.* TO 'springuser'@'localhost';
FLUSH PRIVILEGES;
```

4. **Upload Backend**
```bash
scp -r backend/ ubuntu@your-ec2-ip:~/
```

5. **Run Application**
```bash
cd backend
mvn clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

6. **Setup as Service** (systemd)
```bash
sudo nano /etc/systemd/system/journal-backend.service
```

```ini
[Unit]
Description=Journal Backend
After=syslog.target

[Service]
User=ubuntu
ExecStart=/usr/bin/java -jar /home/ubuntu/backend/target/demo-0.0.1-SNAPSHOT.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable journal-backend
sudo systemctl start journal-backend
```

### Option 4: Docker Deployment

1. **Create Dockerfile** (backend/Dockerfile)
```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8808
ENTRYPOINT ["java", "-jar", "app.jar"]
```

2. **Build & Run**
```bash
cd backend
mvn clean package
docker build -t journal-backend .
docker run -p 8808:8808 journal-backend
```

3. **Docker Compose** (docker-compose.yml)
```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: project
    ports:
      - "3306:3306"
  
  backend:
    build: ./backend
    ports:
      - "8808:8808"
    depends_on:
      - mysql
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/project
```

## Update Frontend API Endpoints

After deploying the backend, update these files with your backend URL:

### Files to Update:
- `src/login.jsx` (line 21)
- `src/registration.jsx` (line 17)
- `src/form.jsx` (line 23)
- `src/journals.jsx` (lines 12, 33)
- `src/reviews.jsx` (line 32)

### Example:
```javascript
// Change from:
axios.post("http://localhost:8808/login", {...})

// To:
axios.post("https://your-backend-url.com/login", {...})
```

Then commit and push:
```bash
git add .
git commit -m "Update API endpoints for production"
git push origin main
```

## Environment Variables

### Backend (.env or application.properties)
```properties
spring.datasource.url=jdbc:mysql://your-db-host:3306/project
spring.datasource.username=your-username
spring.datasource.password=your-password
server.port=8808
```

### Frontend (for production builds)
Create `.env.production`:
```
VITE_API_URL=https://your-backend-url.com
```

Update API calls:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8808';
axios.post(`${API_URL}/login`, {...})
```

## Monitoring & Logs

### Check GitHub Actions
https://github.com/Anupam65/journal/actions

### Backend Logs (if using systemd)
```bash
sudo journalctl -u journal-backend -f
```

### Backend Logs (if using Docker)
```bash
docker logs -f container-name
```

## Troubleshooting

### Frontend not updating?
1. Clear GitHub Actions cache
2. Force rebuild: Delete `gh-pages` branch and redeploy
3. Check browser cache (Ctrl+Shift+R)

### CORS errors?
1. Verify backend CORS configuration
2. Check frontend API URLs
3. Ensure backend is accessible

### Database connection failed?
1. Verify MySQL is running
2. Check credentials in application.properties
3. Ensure database exists

## Security Checklist

- [ ] Change default MySQL password
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS for production
- [ ] Implement JWT authentication (recommended)
- [ ] Add rate limiting
- [ ] Enable SQL injection protection
- [ ] Use prepared statements (already done with JPA)

---

**Need Help?** Open an issue on GitHub: https://github.com/Anupam65/journal/issues
