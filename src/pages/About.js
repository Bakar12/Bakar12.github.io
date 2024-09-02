import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <section id="about" className="about">
            <h2 className="about__heading">About Me</h2>
            <div className="about__content">
                {/* Introduction */}
                <div className="about__intro">
                    <p>
                        Hi! I'm a passionate software developer with a deep interest in creating efficient and scalable
                        solutions. Received a BSc (Hons) in Computer Science at the University of Westminster,
                        I have developed a solid foundation in various programming languages, frameworks, and tools.
                        My experience ranges from web development to data analysis, and I am constantly seeking to
                        expand my skill set. I'm enthusiastic about tackling complex problems and turning ideas into
                        reality through code. Let's connect and build something amazing together!
                    </p>
                </div>

                <div className="about__cards">
                    {/* Education Card */}
                    <div className="about__card">
                        <h3 className="about__card-heading">Education</h3>
                        <p className="about__card-text"><strong>University of Westminster</strong><br/>
                            BSc (Hons) Computer Science | First Class Honours | 2021-2024
                        </p>
                    </div>

                    {/* Technical Skills Card */}
                    <div className="about__card">
                        <h3 className="about__card-heading">Technical Skills</h3>
                        <ul className="about__card-list">
                            <li><strong>Programming Languages:</strong> Python, Java, JavaScript, HTML, CSS</li>
                            <li><strong>Frameworks & Libraries:</strong> Flask, React.js, Node.js, Pandas</li>
                            <li><strong>Databases:</strong> MySQL</li>
                            <li><strong>Software Development:</strong> Agile Methodologies, Git (Version Control)</li>
                            <li><strong>Web Development:</strong> Full-Stack Experience (Front-End & Back-End)</li>
                            <li><strong>Data Tools:</strong> Pandas, NumPy, Scikit-learn, Excel</li>
                            <li><strong>Data Analysis:</strong> Statistical Analysis, Data Visualization</li>
                            <li><strong>Cyber Security:</strong> Basic Principles and Vulnerability Management</li>
                            <li><strong>Proficiency:</strong> Excel, Microsoft Office Suite (Word, PowerPoint, Outlook)
                            </li>

                        </ul>
                    </div>

                    {/* Experience Card */}
                    <div className="about__card">
                        <h3 className="about__card-heading">Relevant Experience</h3>
                        <ul className="about__card-list">
                            <li><strong>Bright Network Internship Experience UK 2022 – Technology</strong><br/>
                                Gained insights into Amazon's tech projects and enhanced teamwork skills.
                            </li>
                            <li><strong>Electronic Arts Software Engineering Virtual Experience</strong><br/>
                                Proposed a feature for The Sims 4 and optimized the codebase.
                            </li>
                            <li><strong>Moreton Bay Regional Council Web Development Simulation</strong><br/>
                                Completed a job simulation involving website planning and creation.
                            </li>
                            <li><strong>Skyscanner Front-End Software Engineering Programme</strong><br/>
                                Built a web application using React, and customised using Skyscanner's Backpack React library.
                            </li>
                        </ul>
                    </div>

                    {/* Personal Interests & Accomplishments Card */}
                    <div className="about__card">
                        <h3 className="about__card-heading">Personal Interests & Accomplishments</h3>
                        <ul className="about__card-list">
                            <li><strong>Awards:</strong> Jack Petchey Award, Silver Crest Award, Platinum QMUL Award,
                                Duke of Edinburgh Bronze Award
                            </li>
                            <li><strong>Languages:</strong> Fluent in English, Conversational in Urdu</li>
                            <li><strong>Hobbies:</strong> Football, Gym, Reading</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
