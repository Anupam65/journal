import React, { useState } from 'react';
import './review.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const JournalReviewForm = () => {
    const location = useLocation();
    const { title, author, abstractt } = location.state || {};

    // State variables for ratings
    const [significance, setSignificance] = useState('');
    const [methodology, setMethodology] = useState('');
    const [clarity, setClarity] = useState('');
    const [literature, setLiterature] = useState('');

    // State variables for comments
    const [summary, setSummary] = useState('');
    const [detailed, setDetailed] = useState('');
    const [confidential, setConfidential] = useState('');

    // Final recommendation
    const [recommendation, setRecommendation] = useState('');

    // Submission status
    const [submitted, setSubmitted] = useState(false);

    const savedata = () => {
        // Validation
        if (!significance || !methodology || !clarity || !literature || !summary || !detailed || !recommendation) {
            window.alert("Please fill all required fields");
            return;
        }

        const data = {
            originality: significance,
            scientific: methodology,
            clarity: clarity,
            relevance: literature,
            summary: summary,
            author: detailed,
            editor: confidential,
            final: recommendation,
            journal: title
        };

        axios.post('http://localhost:9909/review', data)
            .then((response) => {
                window.alert(response.data);
                setSubmitted(true);
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error submitting review");
            });
    };

    return (
        <div>
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

            <div className="review-form-container">
                <header className="form-header">
                    <h1>Peer Review Submission</h1>
                    <p>Manuscript ID 101 - Review due by November 30, 2025</p>
                    <div className="manuscript-info">
                        <h2>{title}</h2>
                        <p><span className='disp'>Authors:</span> {author}</p>
                        <p><span className='disp'>Journal: </span>{abstractt}</p>
                    </div>
                </header>

                {submitted && (
                    <div className="status-message">
                        <p className="font-semibold">Review Successfully Submitted!</p>
                        <p className="text-sm">Thank you for your valuable contribution to the peer-review process.</p>
                    </div>
                )}

                <form className="review-form" onSubmit={(e) => { e.preventDefault(); savedata(); }}>
                    <section className="quantitative-section">
                        <h2>1. Quantitative Assessment (1 = Poor, 5 = Excellent)</h2>

                        {/* Originality */}
                        <div className="rating-row">
                            <label className="criteria-label">Originality and Significance</label>
                            <div className="rating-options">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <label key={`sig-${n}`} style={{ marginRight: '8px' }}>
                                        <input
                                            type="radio"
                                            name="significance"
                                            value={n}
                                            checked={significance === String(n)}
                                            onChange={(e) => setSignificance(e.target.value)}
                                        /> {n}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Methodology */}
                        <div className="rating-row">
                            <label className="criteria-label">Scientific Methodology/Validity</label>
                            <div className="rating-options">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <label key={`meth-${n}`} style={{ marginRight: '8px' }}>
                                        <input
                                            type="radio"
                                            name="methodology"
                                            value={n}
                                            checked={methodology === String(n)}
                                            onChange={(e) => setMethodology(e.target.value)}
                                        /> {n}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Clarity */}
                        <div className="rating-row">
                            <label className="criteria-label">Clarity and Quality of Writing</label>
                            <div className="rating-options">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <label key={`clar-${n}`} style={{ marginRight: '8px' }}>
                                        <input
                                            type="radio"
                                            name="clarity"
                                            value={n}
                                            checked={clarity === String(n)}
                                            onChange={(e) => setClarity(e.target.value)}
                                        /> {n}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Literature */}
                        <div className="rating-row">
                            <label className="criteria-label">Relevance to Current Literature</label>
                            <div className="rating-options">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <label key={`lit-${n}`} style={{ marginRight: '8px' }}>
                                        <input
                                            type="radio"
                                            name="literature"
                                            value={n}
                                            checked={literature === String(n)}
                                            onChange={(e) => setLiterature(e.target.value)}
                                        /> {n}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Qualitative Comments */}
                    <section className="qualitative-section">
                        <h2>2. Qualitative Comments</h2>

                        <div className="comment-field">
                            <label>Summary for the Editor (Required)</label>
                            <textarea
                                rows="4"
                                placeholder="Briefly summarize the work and state your general impression."
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            />
                        </div>

                        <div className="comment-field">
                            <label>Detailed Comments for the Author (Required)</label>
                            <textarea
                                rows="6"
                                placeholder="Provide specific, constructive feedback including major and minor points."
                                value={detailed}
                                onChange={(e) => setDetailed(e.target.value)}
                            />
                        </div>

                        <div className="comment-field">
                            <label>Confidential Comments for the Editor (Optional)</label>
                            <textarea
                                rows="4"
                                placeholder="Include any concerns or sensitive information the author should not see."
                                value={confidential}
                                onChange={(e) => setConfidential(e.target.value)}
                            />
                        </div>
                    </section>

                    {/* Final Recommendation */}
                    <section className="final-recommendation">
                        <h2>3. Final Recommendation</h2>
                        <label>Decision (Required)</label>
                        <select value={recommendation} onChange={(e) => setRecommendation(e.target.value)}>
                            <option value="">-- Select Recommendation --</option>
                            <option value="accept">Accept</option>
                            <option value="minor">Accept with Minor Revisions</option>
                            <option value="major">Revise and Resubmit (Major Revisions)</option>
                            <option value="reject">Reject</option>
                        </select>
                    </section>

                    <div className="submit-button-wrapper">
                        <button type="submit">Submit Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JournalReviewForm;
