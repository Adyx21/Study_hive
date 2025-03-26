# StudyHive

## 📌 Overview
StudyHive is an AI-powered academic assistant designed to help students with instant doubt resolution, study resources, and community learning. It leverages AI chatbots, real-time databases, and a simple yet effective UI to enhance the learning experience.

## 🔥 Features
- **AI-Powered Chatbot** – Instant doubt resolution using Dialogflow.
- **User Authentication** – Secure login and registration using Django authentication.
- **MongoDB Database** – Store user queries, resources, and discussions.
- **Real-time Discussions** – Students can engage in topic-based discussions.
- **Study Resources** – Organized notes, tutorials, and practice problems.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS for interactions)
- **Backend:** Django (for authentication, API handling)
- **Database:** MongoDB (for storing user data and discussions)
- **AI Chatbot:** Dialogflow integration

## 🚀 Setup Instructions
### Prerequisites
- Python 3.x
- Django
- MongoDB
- Node.js (optional for additional enhancements)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/studyhive.git
   cd studyhive
   ```
2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```
3. **Frontend Setup**
   Open `index.html` in a browser.

## 📌 Project Structure
```
studyhive/
│── backend/          # Django backend with MongoDB
│   ├── manage.py
│   ├── studyhive_app/
│   │   ├── models.py  # User authentication and database models
│   │   ├── views.py   # API views for authentication and chatbot
│   │   ├── urls.py    # URL routing
│   ├── index.html    # Main webpage
│   ├── styles.css    # Styling
│   ├── app.js        # JavaScript interactions
│── README.md
```

## 📌 Frontend Code
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StudyHive</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to StudyHive</h1>
    <p>Your AI-powered study assistant</p>
    <button onclick="askQuestion()">Ask a Question</button>
    <script src="app.js"></script>
</body>
</html>
```

### styles.css
```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
}
button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
```

### app.js
```js
function askQuestion() {
    alert("AI Chatbot is coming soon!");
}
```

## 📌 Future Enhancements
- **AI-based Study Recommendations**
- **Live Tutoring Sessions**
- **Gamified Learning Experience**# Study_hive
