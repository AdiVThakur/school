import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', msg: '' });

    const sendEnquiry = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        // Access environment variables from the .env file
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                    setLoading(false);
                    setStatus({
                        type: 'success',
                        msg: 'Thank you! Your enquiry has been sent directly to the Headmaster.'
                    });
                    formRef.current.reset(); // Clear form on success
                },
                (error) => {
                    setLoading(false);
                    setStatus({
                        type: 'error',
                        msg: 'Failed to send message. Please try calling the school office.'
                    });
                    console.error('EmailJS Error:', error);
                }
            );
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Admissions & Enquiries</h1>
                <p>Send an enquiry directly to the Headmaster's office</p>
            </div>

            <form ref={formRef} onSubmit={sendEnquiry} className="contact-form glass-card">

                {status.msg && (
                    <div style={{
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        textAlign: 'center',
                        backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
                        color: status.type === 'success' ? '#15803d' : '#b91c1c',
                        fontWeight: '600'
                    }}>
                        {status.msg}
                    </div>
                )}

                <div className="form-group">
                    <label>Parent / Guardian Name *</label>
                    <input
                        type="text"
                        name="parent_name"
                        placeholder="e.g. Rahul Sharma"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email Address *</label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="parent@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                        type="tel"
                        name="phone_number"
                        placeholder="+91 98765 43210"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Seeking Admission For Grade *</label>
                    <select
                        name="grade"
                        required
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1rem'
                        }}
                    >
                        <option value="">Select Grade</option>
                        <option value="Nursery - Kindergarten">Nursery / Kindergarten</option>
                        <option value="Class 1 - 4">Class 1 - 4</option>
                        <option value="Class 6 - 7">Class 6 - 7</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message / Additional Details</label>
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Mention any specific questions or previous academic records..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ marginTop: '1rem' }}
                >
                    {loading ? 'Sending Enquiry...' : 'Submit Enquiry'}
                </button>
            </form>
        </div>
    );
}