import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './journals.css';
import { Link } from 'react-router-dom';

const JournalListVieww = () => {
    const [journals, setJournals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8808/Journal/all')
            .then(res => setJournals(res.data))
            .catch(err => console.error(err));
    }, []);

    // Navigate to review page
    const handleCardClick = (journal) => {
        navigate('/reviews', {
            state: {
                id: journal.id,
                title: journal.title,
                author: journal.author,
                abstractt: journal.abstractt
            }
        });
    };

    // Download PDF
    const handleDownload = async (e, id, title) => {
        e.stopPropagation(); // Prevent card navigation
        try {
            const response = await axios.get(`http://localhost:8808/Journal/download/${id}`, {
                responseType: 'blob'
            });
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${title}.pdf`;
            link.click();
            window.URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Download failed', error);
            alert('Failed to download file.');
        }
    };

    return (
        <div className="journal-list-container">
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

            <div className="journal-list-wrapperr">
                <div className="journals-containerr">
                    {journals.length > 0 ? (
                        journals.map(journal => (
                            <div
                                className="journal-cardd"
                                key={journal.id}
                                onClick={() => handleCardClick(journal)}
                            >
                                <div className="journal-headerr">
                                    <div className="journal-infoo">
                                        <h2 className="journal-titlett">{journal.title}</h2>
                                        <p className="journal-authorr">
                                            <span className="author-labell">Authors:</span> {journal.author}
                                        </p>
                                    </div>
                                    <button
                                        className="download-btntt"
                                        onClick={(e) => handleDownload(e, journal.id, journal.title)}
                                    >
                                        Download
                                    </button>
                                </div>
                                <p className="journal-abstractt">
                                    <span className="abstract-labell">Abstract:</span> {journal.abstractt}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="no-journals-cardd">
                            <p className="no-journals-textt">You have no submitted journals yet.</p>
                            <button className="no-journals-btnt">Start a New Submission</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const App = () => (
    <div className="app-wrappperr">
        <main className="main-containerr">
            <div className="max-w-5xl-wrapperr">
                <JournalListVieww />
            </div>
        </main>
    </div>
);

export default App;
