 Smart Study Planner

A web-based application built using Flask that helps students manage their study tasks efficiently with priority levels and a focus timer.

---

 Features

* Add and manage study tasks
* Set priority levels (High, Medium, Low)
* Mark tasks as completed
* Delete tasks
* Focus Timer with custom duration
* Simple and clean user interface

---

 Tech Stack

* Backend: Flask (Python)
* Database: SQLite
* Frontend: HTML, CSS, JavaScript

---
 Project Structure

study_planner/
│
├── app.py
├── study.db
│
├── templates/
│   └── index.html
│
└── static/
├── style.css
└── script.js

---
 How to Run the Project

1. Install Flask:

```
pip install flask
```

2. Run the application:

```
python app.py
```

3. Open browser and go to:

```
http://127.0.0.1:5000/
```

How It Works

* Tasks are stored in a SQLite database
* Users can add tasks with priority
* Tasks can be marked as done or deleted
* The focus timer helps improve productivity by allowing custom time sessions

---
Purpose of Project

This project is designed to demonstrate basic web development concepts such as:

* CRUD operations
* Database integration
* Frontend and backend interaction
* Simple user interface design

---
 Future Improvements

* User login system
* Task deadlines and reminders
* Progress tracking dashboard
* Dark mode UI

---
 Author

Shaik Javeed

