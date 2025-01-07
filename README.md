This is a simple Express.js application that demonstrates basic middleware functionality and routing. It includes:

Multiple middleware functions that execute in sequence.
Handling both GET and POST requests for a contact form.
A form that allows users to submit their contact information.

File Structure
- app.js          (Main application file)
- README.md       (Project documentation)
Step-by-Step Explanation
Express Setup The application uses the Express.js framework to create the server and handle requests.

Middleware:

The application uses two middleware functions that log messages when the server receives requests.
These middleware functions allow you to inspect or modify requests before they are processed by route handlers.
First Middleware: Logs "First Middleware".
Second Middleware: Logs "Second Middleware".
Third Middleware: Handles the root route (/) and sends an HTML response with the message "Welcome to express".
GET /contact-Us Route:

Displays a form where users can submit their name and email address.
This form sends a POST request to the same route (/contact-Us).
POST /contact-Us Route:

Handles the form submission and logs the request URL and method.
Responds with a message "We will contact you shortly" after the form is submitted.





Getting Started
Prerequisites
Node.js installed on your local machine.
Installation
Clone the repository or create a new directory for the project.
Install the necessary dependencies:
bash
Copy code
npm init -y           # Initializes a new Node.js project (if not already done)
npm install express   # Install Express.js
Running the Application
Navigate to your project directory.

Start the application:

node app.js
Open your browser and navigate to http://localhost:5006. You should see the form to submit your contact details.

Testing Routes
GET /: Will display "Welcome to express".
GET /contact-Us: Will display the contact form.
POST /contact-Us: After form submission, you'll receive a response saying "We will contact you shortly".
Future Improvements
Validation: Add server-side validation for form inputs.
Error Handling: Implement better error handling for failed form submissions.
Database Integration: Store form submissions in a database like MongoDB or MySQL.
Contributing
Fork this repository.
Create a new branch for your feature.
Make changes and submit a pull request with a description of your modifications.
