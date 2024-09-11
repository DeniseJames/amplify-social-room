import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../../amplify/data/resource.js';
import awsconfig from '../../aws-exports';

import * as APITypes from '../../API';

Amplify.configure(awsconfig);

const client = generateClient<Schema>();

const ContactComponent: React.FC = () => {
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    comment: ''
  });

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
      alert('Contact created successfully!');
      setFormState({ email: '', name: '', comment: '' });
    } catch (err) {
      console.error('Error creating contact:', err);
      alert('Failed to create contact.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) => setInput('email', e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(e) => setInput('name', e.target.value)}
          required
        />
        <textarea
          placeholder="Comment"
          value={formState.comment}
          onChange={(e) => setInput('comment', e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactComponent;
