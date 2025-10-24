import React from "react";
import "./form.css"; // Custom styles
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const handlesubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const abstract = document.getElementById("abstract").value;
        const author = document.getElementById("author").value;
        const affiliation = document.getElementById("affiliation").value;
        const fileInput = document.getElementById("file");
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append("title", title);
        formData.append("abstractt", abstract);
        formData.append("author", author);
        formData.append("affiliation", affiliation);
        formData.append("file", file);

        axios.post("http://localhost:8808/Journal/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            window.alert(response.data);
        }).catch((error) => {
            window.alert(error);
        });
    };
    const [submitted, setSubmitted] = React.useState(false);

    React.useEffect(() => {
        // Intercept axios responses and mark success only for the submission endpoint
        const id = axios.interceptors.response.use(
            (response) => {
                const url = response?.config?.url || "";
                if (url.includes("/Journal/add")) {
                    setSubmitted(true);
                }
                return response;
            },
            (error) => Promise.reject(error)
        );
        return () => axios.interceptors.response.eject(id);
    }, []);

    return (
        <div className="app-container">
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

            <div className="form-card">
                <header>
                    <h1 className="main-title">Journal Submission Portal</h1>
                    <p className="subtitle">Submit your manuscript for review.</p>
                    <p className="note">
                        <span className="required">*</span> Required fields
                    </p>
                </header>

                {submitted && <div className="success-box">Submission Successful! 🎉</div>}

                <form>
                    <h2 className="section-title">1. Manuscript Information</h2>
                    <div className="input-group">
                        <label className="input-label">
                            Manuscript Title <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="e.g., A Novel Approach to Neural Network Optimization"
                            required
                            className="text-input"
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">
                            Abstract <span className="required">*</span>
                        </label>
                        <textarea
                            id="abstract"
                            placeholder="Provide a concise summary (max 250 words)."
                            required
                            className="text-area"
                        />
                    </div>

                    <h2 className="section-title">2. Authors</h2>
                    <div className="authors-section">
                        <div className="author-row">
                            <div className="author-field">
                                <label className="author-label">
                                    Author 1 Name <span className="required">*</span>
                                </label>
                                <input id="author" type="text" placeholder="John Doe" required className="author-input" />
                            </div>
                            <div className="author-field">
                                <label className="author-label">
                                    Affiliation <span className="required">*</span>
                                </label>
                                <input id="affiliation" type="text" placeholder="University/Institution" required className="author-input" />
                            </div>
                        </div>
                        <button type="button" className="add-author-btn">
                            ＋ Add Another Author
                        </button>
                    </div>

                    <h2 className="section-title">3. Upload File</h2>
                    <div className="input-group">
                        <label className="input-label">
                            Select Manuscript File (PDF/DOCX) <span className="required">*</span>
                        </label>
                        <input id="file" type="file" className="file-input" />
                    </div>

                    <div className="submit-container">
                        <button onClick={handlesubmit} type="submit" className="submit-btn">
                            Submit Manuscript
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
