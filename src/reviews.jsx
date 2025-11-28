import React from 'react';
import './reviews.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toUpperCase from 'lodash/toUpper';


// Example reviews


const getRatingColor = (rating) => {
    if (rating >= 4) return '#86fdc0ff'; // green bg
    if (rating == 3) return '#fdeca7ff';
    return '#fdacacff'; // red bg
};

const getRecColor = (rec) => {
    switch (rec) {
        case 'accept': return '#059669';
        case 'minor': return '#0284c7';
        case 'major': return '#f59e0b';
        case 'reject': return '#dc2626';
        default: return '#6b7280';
    }
};

function App() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8808/reviews')
            .then(res => setReviews(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='reviewslist'>
            <header className="header">
                <nav className="nav-container">
                    <div className="brand-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4z" />
                        </svg>
                        <h1 className="brand-name">Journex</h1>
                    </div>
                    <div className="nav-links">
                        <Link to="/home" className="nav-link">Home </Link>
                        <Link to="/form" className="nav-link">Submit Paper</Link>
                        <Link to="/journals"><a href="" className="nav-link">Journals</a></Link>
                        <Link to="/reviewlist" className="nav-link">Reviews</Link>
                        <Link to="/">
                            <button className="login-btn">Logout</button>
                        </Link>
                    </div>
                    <button className="mobile-menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </nav>
            </header>
            <div className="container">

                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <h2 className="review-title">{review.journal}</h2>
                            <span className="recommendation" style={{ backgroundColor: getRecColor(review.final) }}>
                                {review.final ? review.final.toUpperCase() : ''}
                            </span>
                        </div>
                        <p className="review-meta">
                        </p>

                        <div className="ratings">
                            <div
                                className="rating-box"
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <p className="rating-label">Significance</p>
                                <span className="rating-value" style={{ backgroundColor: getRatingColor(review.originality) }}>{review.originality} / 5</span>
                            </div>
                            <div
                                className="rating-box"
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <p className="rating-label">Methodology</p>
                                <span className="rating-value" style={{ backgroundColor: getRatingColor(review.scientific) }}>{review.scientific} / 5</span>
                            </div>
                            <div
                                className="rating-box"
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <p className="rating-label">Clarity</p>
                                <span className="rating-value" style={{ backgroundColor: getRatingColor(review.clarity) }}>{review.clarity} / 5</span>
                            </div>
                            <div
                                className="rating-box"
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <p className="rating-label">Literature</p>
                                <span className="rating-value" style={{ backgroundColor: getRatingColor(review.relevance) }}>{review.relevance} / 5</span>
                            </div>
                        </div>

                        <div className="comments">
                            <div className="comment-summary">
                                <h3>Editor Summary:</h3>
                                <p>{review.summary}</p>
                            </div>
                            <div className="comment-detailed">
                                <h3>Detailed Feedback for Author:</h3>
                                <pre>{review.author}</pre>
                            </div>
                            {review.editor && (
                                <div className="comment-confidential">
                                    <h3>Confidential Note to Editor:</h3>
                                    <p>{review.editor}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div></div>
    );
}

export default App;
