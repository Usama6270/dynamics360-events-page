const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

const eventImages = [
  "https://images.pexels.com/photos/1540409/pexels-photo-1540409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Music Festival: Concert stage with crowd
  "https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Tech Meetup: People at a tech conference
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  // Art Exhibition: Art gallery setting
  "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Food Carnival: Food festival with stalls
];

router.get('/', async (req, res) => {
  try {
    let events = await Event.find();
    
    if (events.length === 0) {
      const dummyEvents = [
        {
          name: "Music Festival",
          date: new Date("2025-06-10T18:00:00Z"),
          location: "Central Park, Islamabad",
          description: "Live music with local bands.",
          image: eventImages[0] // Music Festival image
        },
        {
          name: "Tech Meetup",
          date: new Date("2025-06-15T15:00:00Z"),
          location: "Tech Hub, Gulberg Greens",
          description: "Network with tech enthusiasts.",
          image: eventImages[1] // Tech Meetup image
        },
        {
          name: "Art Exhibition",
          date: new Date("2025-06-20T10:00:00Z"),
          location: "Art Gallery, F-7 Markaz",
          description: "Explore stunning artworks.",
          image: eventImages[2] // Art Exhibition image
        },
        {
          name: "Food Carnival",
          date: new Date("2025-06-25T12:00:00Z"),
          location: "Lake View Park, Islamabad",
          description: "Savor delicious cuisines.",
          image: eventImages[3] // Food Carnival image
        }
      ];
      await Event.insertMany(dummyEvents);
      events = dummyEvents;
    } else {
      events = events.map((event, index) => ({
        ...event._doc,
        image: eventImages[index % eventImages.length]
      }));
      await Event.deleteMany({});
      await Event.insertMany(events);
    }
    
    console.log('Sending events with images:', events); // Debug log
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;