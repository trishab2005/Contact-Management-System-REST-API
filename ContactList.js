import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

const ContactList = ({ onContactSelected, refreshKey }) => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('/api/contacts');
            setContacts(response.data);
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error('There was an error fetching the contacts!', err);
            setError('Failed to load contacts. Please ensure the backend is running.');
        }
    };

    // This useEffect now depends on refreshKey, so it re-fetches when a contact is added/deleted/updated
    useEffect(() => {
        fetchContacts();
    }, [refreshKey]);

    const handleDelete = async (contactId) => {
        try {
            await axios.delete(`/api/contacts/${contactId}`);
            // Refresh the contact list after successful deletion
            fetchContacts();
        } catch (err) {
            console.error('Failed to delete contact:', err);
            setError('Failed to delete contact.');
        }
    };

    return (
        <div className="contact-list-container">
            <h2>Contact List</h2>
            {error && <div className="alert-error">{error}</div>}
            <div className="contact-grid">
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <div key={contact.contactId} className="contact-card">
                            <h3>{contact.name}</h3>
                            <p><strong>Email:</strong> {contact.email}</p>
                            <p><strong>Phone:</strong> {contact.phone}</p>
                            <div className="contact-actions">
                                <button onClick={() => onContactSelected(contact)}>Edit</button>
                                <button onClick={() => handleDelete(contact.contactId)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No contacts found. Add a new contact using the form above. ➕</p>
                )}
            </div>
        </div>
    );
};

export default ContactList;