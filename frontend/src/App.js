import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import EventCard from './components/EventCard';
import './App.css';

const Home = () => (
  <>
    {/* Hero Section */}
    <section className="hero text-center">
      <Container className="py-5">
        <h1 className="display-3 mb-4 animate-fade-in">Welcome to Dynamics 360 Events</h1>
        <p className="lead mb-4 animate-slide-up">Discover Events Near You</p>
        <Button
          as={Link}
          to="/events"
          variant="primary"
          size="lg"
          className="animate-pop-in"
          onClick={() => console.log('Explore Events button clicked')} // Debug log
        >
          Explore Events
        </Button>
      </Container>
    </section>

    {/* About Us Section */}
    <section className="about py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 animate-fade-in">About Dynamics 360</h2>
        <Row className="align-items-center mb-5">
          <Col md={6} className="animate-slide-right">
            <h3 className="mb-3">Our Story</h3>
            <p className="lead text-muted">
              Dynamics 360 was founded with a vision to bring communities together through memorable events. 
              Based in Islamabad, Pakistan, we’re a passionate team dedicated to connecting people with local experiences 
              that inspire and entertain.
            </p>
          </Col>
          <Col md={6} className="text-center animate-slide-left">
            <div className="about-image animate-zoom-in">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" className="img-fluid about-img shadow" />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mb-5">
          <Col md={6} className="order-md-2 animate-slide-left">
            <h3 className="mb-3">Our Mission</h3>
            <p className="lead text-muted">
              We aim to make event discovery seamless and engaging, fostering connections that enrich lives. 
              Whether it’s a music festival or a tech meetup, we’re here to help you find your next unforgettable experience.
            </p>
          </Col>
          <Col md={6} className="text-center order-md-1 animate-slide-right">
            <div className="about-image animate-zoom-in">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Mission" className="img-fluid about-img shadow" />
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <h3 className="mb-4 animate-fade-in">Meet Our Team</h3>
          </Col>
        </Row>
        <Row>
          {[
            { name: "Ayesha Khan", role: "Founder & CEO", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { name: "Usama Malik", role: "Event Manager", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { name: "Sara Ahmed", role: "Marketing Lead", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
          ].map((member, index) => (
            <Col md={4} key={index} className="mb-4 animate-slide-up">
              <Card className="team-card shadow-sm">
                <Card.Img variant="top" src={member.img} alt={member.name} className="team-img" />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </>
);

const Contact = () => (
  <>
    <section className="contact text-center py-5">
      <Container>
        <h2 className="mb-4">Contact Us</h2>
        <p>Email: <a href="mailto:hr@dynamics360.net">hr@dynamics360.net</a></p>
        <p>Phone: +92 339 411 1994</p>
        <p>Address: 404, 5th Floor, Golden Heights, Business Square, Block C, Gulberg Greens, Islamabad, Pakistan</p>
      </Container>
    </section>
  </>
);

const Events = ({ events, filteredEvents, setFilteredEvents, handleRegister, handleSearch, handleDateFilter }) => {
  console.log('Events component rendering with filteredEvents:', filteredEvents);
  return (
    <>
      <section className="hero text-center">
        <Container>
          <h1 className="display-4">Discover Events Near You</h1>
        </Container>
      </section>
      <section className="events py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Events</h2>
          <SearchBar onSearch={handleSearch} onDateFilter={handleDateFilter} />
          <Row>
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <Col md={4} key={event._id} className="mb-4">
                  <EventCard event={event} onRegister={handleRegister} />
                </Col>
              ))
            ) : (
              <p className="text-center">No events found. Check console for errors.</p>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [registrationMessage, setRegistrationMessage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Removed refreshKey dependency

  const fetchData = async () => {
    console.log('Fetching data from:', process.env.REACT_APP_API_URL);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
      console.log('Fetched events data:', response.data);
      if (Array.isArray(response.data)) {
        const updatedEvents = response.data.map(event => ({
          ...event,
          _id: event._id || Math.random().toString(36).substr(2, 9) // Ensure _id for key
        }));
        setEvents(updatedEvents);
        setFilteredEvents(updatedEvents);
      } else {
        console.error('Data is not an array:', response.data);
        setEvents([]);
        setFilteredEvents([]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Error setting up request:', error.message);
      }
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = events.filter(event =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Filtered events:', filtered);
    setFilteredEvents(filtered);
  };

  const handleDateFilter = () => {
    const today = new Date('2025-05-01T00:00:00Z'); // Test date to show all events
    const upcomingEvents = events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    });
    console.log('Upcoming events:', upcomingEvents);
    setFilteredEvents(upcomingEvents);
  };

  const handleRegister = (eventId, eventName) => {
    console.log('Registering for event:', eventId, 'Event Name:', eventName); // Debug log
    alert(`Successfully registered for "${eventName}" (ID: ${eventId})`);
    setRegistrationMessage(`You have successfully registered for "${eventName}"!`);
    setTimeout(() => setRegistrationMessage(null), 3000); // Clear message after 3 seconds
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Dynamics 360
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
              <Nav.Link as={Link} to="/events" className="me-3">Events</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {registrationMessage && (
        <div className="alert alert-success text-center" role="alert">
          {registrationMessage}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={
          <Events
            events={events}
            filteredEvents={filteredEvents}
            setFilteredEvents={setFilteredEvents}
            handleRegister={handleRegister}
            handleSearch={handleSearch}
            handleDateFilter={handleDateFilter}
          />
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer text-center py-4 text-white">
        <Container>
          <p className="mb-0">© 2025 Dynamics 360. All Rights Reserved.</p>
          <p className="mb-0">
            Follow us on: 
            <a href="https://twitter.com/dynamics360" className="text-white mx-2">Twitter</a> | 
            <a href="https://facebook.com/dynamics360" className="text-white mx-2">Facebook</a> | 
            <a href="https://instagram.com/dynamics360" className="text-white mx-2">Instagram</a>
          </p>
        </Container>
      </footer>
    </Router>
  );
}

export default App;