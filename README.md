Featured Events Page - Dynamics 360 Internship Case Study
Overview
This project is a full-stack, responsive "Featured Events" webpage developed for the Dynamics 360 Web Development Internship Case Study. It features a modern, mobile-friendly UI with a MongoDB backend for dynamic event management, JWT-based registration, and advanced filtering capabilities.
Technologies Used

Frontend:
React 18.3.1: For a component-based, dynamic UI.
Bootstrap 5.3.3 and React-Bootstrap: For responsive styling and components.
Axios: For API requests.
CSS3: For custom styling (hover effects, gradients).


Backend:
Node.js and Express: For a robust API server.
MongoDB (MongoDB Atlas): For storing event data.
Mongoose: For MongoDB schema modeling.
JSON Web Token (JWT): For simulated user registration.
CORS and Dotenv: For secure API communication and environment configuration.


Deployment:
Backend: Deployed on Vercel (or similar).
Frontend: Deployed on Netlify (or GitHub Pages).



Features

Responsive Navigation Bar: Includes a logo and links to "Home," "Events," and "Contact," with a mobile-friendly hamburger menu.
Hero Section: Displays "Discover Events Near You" with a gradient background.
Featured Events Section: Dynamically fetches and displays 4+ event cards from MongoDB, each with:
Event name
Date and time (formatted using toLocaleString)
Location
Description
"Register" button with JWT-based authentication


Search Bar: Filters events by name in real-time.
Bonus Features:
MongoDB Integration: Events are stored and retrieved from MongoDB Atlas using the provided MONGO_URL.
JWT Authentication: Simulated user registration with JWT tokens for secure interactions.
Date Filter: A button to filter upcoming events (events with dates >= today).
Enhanced UI: Smooth hover effects, responsive card layout, and placeholder images for visual appeal.



Setup Instructions

Clone the Repository:git clone <your-repository-url>


Backend Setup:
Navigate to backend/:cd backend
npm install


Create a .env file with the provided MONGO_URL, JWT_SECRET, PORT, and FRONTEND_URL.
Seed initial event data (run in MongoDB shell or via script):db.events.insertMany([
  { name: "Music Festival", date: ISODate("2025-05-10T18:00:00Z"), location: "Central Park, Islamabad", description: "Live music with local bands.", image: "https://via.placeholder.com/300x200?text=Music+Festival" },
  { name: "Tech Meetup", date: ISODate("2025-05-15T15:00:00Z"), location: "Tech Hub, Gulberg Greens", description: "Network with tech enthusiasts.", image: "https://via.placeholder.com/300x200?text=Tech+Meetup" },
  { name: "Art Exhibition", date: ISODate("2025-05-20T10:00:00Z"), location: "Art Gallery, F-7 Markaz", description: "Explore stunning artworks.", image: "https://via.placeholder.com/300x200?text=Art+Exhibition" },
  { name: "Food Carnival", date: ISODate("2025-05-25T12:00:00Z"), location: "Lake View Park, Islamabad", description: "Savor delicious cuisines.", image: "https://via.placeholder.com/300x200?text=Food+Carnival" }
]);


Start the backend:npm start




Frontend Setup:
Navigate to frontend/:cd frontend
npm install


Create a .env file with REACT_APP_API_URL=http://localhost:9000/api.
Start the frontend:npm start




Live Preview:
Deploy the backend to Vercel: Connect the backend folder to Vercel, set environment variables, and note the API URL.
Deploy the frontend to Netlify: Connect the frontend folder, set REACT_APP_API_URL to the backend URL, and note the live URL.
Live preview: <your-netlify-url> (update after deployment).


Dependencies:
Ensure Node.js (18.20.4 recommended) and MongoDB Atlas are set up.
Internet connection required for CDN resources (Bootstrap, images).



Deployment Instructions

Backend:
Push backend to a GitHub repository.
Deploy to Vercel by linking the repository and adding environment variables (MONGO_URL, JWT_SECRET, PORT, FRONTEND_URL).
Update frontend/.env with the Vercel API URL.


Frontend:
Push frontend to a GitHub repository.
Deploy to Netlify by linking the repository and setting REACT_APP_API_URL.
Alternatively, use GitHub Pages for the frontend (build and deploy the build folder).


Update this README with the live URLs after deployment.

Bonus Features Implemented

MongoDB Integration: Events are dynamically fetched from MongoDB Atlas, ensuring scalability.
JWT Authentication: Simulated registration with JWT tokens, enhancing security.
Date Filter: Filters events to show only upcoming ones, improving user experience.
Professional UI: Modern design with hover effects, responsive layout, and consistent styling.

Notes

The project exceeds requirements by implementing a full MERN stack with authentication and advanced filtering.
The code is optimized for performance and maintainability, with clear separation of concerns.
Deployment is streamlined for Vercel (backend) and Netlify (frontend), ensuring accessibility.

For questions, contact <your-email> or hr@dynamics360.net.
