import React from 'react';
import './CourseCard.css';

function CourseCard({ title, description, price, level, image }) {
    return (
        <div className="course-card">
            {image && <div className="course-image">
                <img src={image} alt={title} />
            </div>}
            <div className="course-content">
                <h3 className="course-title">{title}</h3>
                <p className="course-description">{description}</p>
                <div className="course-details">
                    <span className="course-price">{price} €</span>
                    <span className="course-level">{level}</span>
                </div>
                <button className="course-button">En savoir plus</button>
            </div>
        </div>
    );
}

export default CourseCard;