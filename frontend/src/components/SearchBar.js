import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch, onDateFilter }) => {
  return (
    <Form className="mb-4">
      <Form.Group className="d-flex">
        <Form.Control
          type="text"
          placeholder="Search events by name..."
          onChange={(e) => onSearch(e.target.value)}
          className="me-2"
        />
        <Button variant="primary" onClick={onDateFilter}>
          Filter Upcoming
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchBar;