import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="app-container">
            {/* Header & Navigation */}
            <header className="header">
                <nav className="nav-container">
                    <div className="brand-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4z" />
                        </svg>
                        <h1 className="brand-name">Journex</h1>
                    </div>
                    <div className="nav-links">
                        <Link to="/login">
                            <button className="login-btn">Login</button>
                        </Link>
                    </div>
                    <button className="mobile-menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </nav>
            </header>

            {/* Main Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h2 className="hero-heading">Your Gateway to Academic Publishing</h2>
                    <p className="hero-text">
                        Journex provides a seamless platform to manage, publish, and explore academic research.
                    </p>
                    <div className="hero-actions">
                        <a href="" className="cta-button primary-cta">Browse Journals</a>
                        <a href="" className="cta-button secondary-cta">Browse Reviews</a>
                    </div>
                </div>
            </section>

            {/* Published Journals Section */}
            <main className="main-content">
                <section className="journals-section">
                    <h2 className="section-heading">Journals</h2>
                    <div className="journal-grid">
                        <div className="journal-card">
                            <div className="journal-card-body">
                                <h3 className="journal-title">The Journal of Computational Sciences</h3>
                                <p className="journal-description">A leading publication for research in algorithms, data structures, and computational theory.</p>
                                <a href="#" className="view-journal-btn">View Journal</a>
                            </div>
                        </div>
                        <div className="journal-card">
                            <div className="journal-card-body">
                                <h3 className="journal-title">The Global Review of Medical Research</h3>
                                <p className="journal-description">Featuring groundbreaking discoveries and clinical trials in modern medicine and healthcare.</p>
                                <a href="#" className="view-journal-btn">View Journal</a>
                            </div>
                        </div>
                        <div className="journal-card">
                            <div className="journal-card-body">
                                <h3 className="journal-title">Innovations in Renewable Energy</h3>
                                <p className="journal-description">Showcasing the latest advancements in sustainable energy sources and green technology.</p>
                                <a href="#" className="view-journal-btn">View Journal</a>
                            </div>
                        </div>
                        <div className="journal-card">
                            <div className="journal-card-body">
                                <h3 className="journal-title">Journal of Social Sciences Today</h3>
                                <p className="journal-description">A platform for critical research in sociology, economics, politics, and anthropology.</p>
                                <a href="#" className="view-journal-btn">View Journal</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="reviews-section">
                    <h2 className="section-heading">Reviews</h2>
                    <div className="review-grid">
                        <div className="review-card">
                            <div className="review-header">
                                <img src="https://placehold.co/48x48/667eea/ffffff?text=JP" alt="Reviewer" className="reviewer-avatar" />
                                <div className="reviewer-info">
                                    <p className="reviewer-name">Jane P.</p>
                                    <p className="reviewer-role">Researcher</p>
                                </div>
                            </div>
                            <p className="review-text">"Journex has simplified the entire process of publishing my research. The platform is intuitive and the support team is excellent. I highly recommend it to my peers."</p>
                        </div>
                        <div className="review-card">
                            <div className="review-header">
                                <img src="https://placehold.co/48x48/667eea/ffffff?text=RS" alt="Reviewer" className="reviewer-avatar" />
                                <div className="reviewer-info">
                                    <p className="reviewer-name">Dr. R. Smith</p>
                                    <p className="reviewer-role">Journal Editor</p>
                                </div>
                            </div>
                            <p className="review-text">"The platform's management tools have made our editorial workflow significantly more efficient. The ability to track submissions and communicate with reviewers is a game-changer."</p>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="about-section">
                    <h2 className="section-heading">About Journex</h2>
                    <div className="about-content">
                        <p className="about-text">
                            Journex is a leading platform dedicated to advancing scholarly communication. We offer a comprehensive and intuitive journal management system designed to assist researchers, authors, editors, and reviewers in every step of the publishing journey. Our mission is to streamline the peer-review process, ensuring fast, transparent, and high-quality publication of academic work.
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">&copy; 2024 Journex. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
