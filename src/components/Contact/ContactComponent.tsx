import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../../amplify/data/resource.js';
import awsconfig from '../../aws-exports.js';
import { Form, Button } from 'react-bootstrap';

import * as APITypes from '../../API';

Amplify.configure(awsconfig);

const client = generateClient<Schema>();

const ContactComponent: React.FC = () => {
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false); // New state for submission status

  const setInput = (key: string, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const input: APITypes.CreateContactFormInput = {
        email: formState.email,
        name: formState.name,
        comment: formState.comment
      };
      
      // await client.mutations.createContactForm({ input });
      setFormState({ email: '', name: '', comment: '' });
      setSubmitted(true); // Set submitted to true after successful submission
    } catch (err) {
      console.error('Error creating contact:', err);
      // No alert message if submission fails
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for contacting us. We will respond soon.
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formState.email}
              onChange={(e) => setInput('email', e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={formState.name}
              onChange={(e) => setInput('name', e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter comment"
              value={formState.comment}
              onChange={(e) => setInput('comment', e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ backgroundColor: 'darkblue' }}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default ContactComponent;
