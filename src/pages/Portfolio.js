import React, { useState } from 'react';
import '../styles/ProjectCard.css';

function Portfolio() {
    const [activeTab, setActiveTab] = useState('All');

    const projects = [
        {
            title: 'Tech Repair Service',
            platform: 'Web Development',
            languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Web Development'],
            link: 'https://github.com/Bakar12/TechRepairService',
            type: 'Web Development',
        },
        {
            title: 'Spam Detection',
            platform: 'Machine Learning',
            languages: ['Python', 'Machine Learning'],
            link: 'https://github.com/Bakar12/SpamDetection',
            type: 'Machine Learning',
        },
        {
            title: 'Chatbot',
            platform: 'Machine Learning',
            languages: ['Python', 'Jupyter Notebook', 'Machine Learning'],
            link: 'https://github.com/Bakar12/Applied-AI-Chatbot-Coursework',
            type: 'Machine Learning',
        },
        {
            title: 'WebScrapper',
            platform: 'Python Project',
            languages: ['Python'],
            link: 'https://github.com/Bakar12/WebScrapper',
            type: 'Python Project',
        },
        {
            title: 'Calculator',
            platform: 'Python Project',
            languages: ['Python'],
            link: 'https://github.com/Bakar12/Calculator',
            type: 'Python Project',
        },
        {
            title: 'Sudoku',
            platform: 'Python Project',
            languages: ['Python'],
            link: 'https://github.com/Bakar12/Sudoku',
            type: 'Python Project',
        },
        {
            title: 'Skin Consultation',
            platform: 'Java Project',
            languages: ['Java'],
            link: 'https://github.com/Bakar12/Skin-Consultation',
            type: 'Java Project',
        },
        {
            title: 'Search Google Tab',
            platform: 'Chrome Extension',
            languages: ['JavaScript', 'HTML'],
            link: 'https://github.com/Bakar12/SearchTabExtension',
            type: 'Chrome Extension',
        },
        {
            title: 'Symptom Diagnoses Web Application',
            platform: 'Prototype | Final Year Project',
            languages: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Machine Learning', 'Web Development'],
            link: 'https://github.com/Bakar12/ProjectPrototypeFYP',
            type: 'Prototype',
        },
         {
            title: 'Dynamic System of the Car-Trailer System',
            platform: 'Robotics Principles',
            languages: ['MATLAB'],
            link: 'https://github.com/Bakar12/Robotic-Principles',
            type: 'Robotics Principles',
        }
    ];

    const tabs = ['All', 'Python', 'JavaScript', 'Java', 'Web Development', 'Machine Learning', 'MATLAB'];

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(project => project.languages.includes(activeTab));

    return (
        <section id='myprojects' className="portfolio__container">
            <div className="portfolio__heading">
                <h2>👨‍💻 My Projects:</h2>
            </div>
            <div className="portfolio__tabs">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`portfolio__tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="portfolio__items">
                {filteredProjects.map((project, index) => (
                    <article key={index} className='portfolio__item'>
                        <h3>{project.title}</h3>
                        <small>{project.platform}</small>
                        <div className="portfolio__item-cta">
                            <a href={project.link} target="_blank" rel='noreferrer' className='btn'>View Project</a>
                        </div>
                        <div className="portfolio__item-languages">
                            {project.languages.map(lang => (
                                <span key={lang} className="language-badge">{lang}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;

