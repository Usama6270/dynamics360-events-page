import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ event, onRegister }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; // Fallback: Generic event image (concert)
  };

  return (
    <Card className="event-card">
      <Card.Img
        variant="top"
        src={event.image}
        alt={event.name}
        onError={handleImageError}
      />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text><strong>Date:</strong> {new Date(event.date).toLocaleString()}</Card.Text>
        <Card.Text><strong>Location:</strong> {event.location}</Card.Text>
        <Card.Text>{event.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            console.log('Register button clicked for event:', event._id, 'Name:', event.name); // Debug log
            onRegister(event._id, event.name);
          }}
        >
          Register
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;