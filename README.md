# Interactive User Registration Form

## Overview

The **Interactive User Registration Form** is a web application built using HTML, CSS, Bootstrap 5, and JavaScript. It allows users to register through a form, validates user input, displays registered users dynamically, and stores data using `localStorage` so registrations persist after refreshing the page.

## Features

- Register new users
- Form validation with custom error messages
- Dynamic DOM manipulation
- Display registered users
- Delete registered users
- Save user data using `localStorage`
- Automatically load saved users on page refresh
- Responsive design using Bootstrap 5

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- DOM Manipulation
- localStorage

## Project Structure

```text
lab-user-reg-form/
│── index.html
│── styles.css
│── script.js
└── README.md
```

## How to Run

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in your web browser.
4. Register users and test the application's functionality.

## Validation

The registration form validates user input before submission.

- Required fields cannot be left blank.
- Custom error messages are displayed for invalid input.
- Successfully submitted users are added to the registration list.

## Data Persistence

User registration data is stored in the browser using `localStorage`.

- New users are automatically saved.
- Users are loaded when the page is refreshed.
- Deleted users are removed from both the page and `localStorage`.

## Learning Objectives

This project demonstrates how to:

- Select and manipulate DOM elements
- Handle user events
- Validate form inputs
- Display custom validation messages
- Dynamically create HTML elements
- Use `localStorage` for persistent data
- Build responsive layouts with Bootstrap

## Author

**Truong Pham**
