// src/components/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ id, title, description, price, level, image }) => {
    return (
        <div className="course-card">
            {image && (
                <div className="course-image">
                    <img src={image} alt={title} />
                </div>
            )}
            <div className="course-content">
                <h3 className="course-title">{title}</h3>
                <p className="course-description">{description}</p>
                <div className="course-details">
                    <span className="course-price">{price} €</span>
                    <span className="course-level">{level}</span>
                </div>
                <Link to={`/courses/${id}`} className="btn">
                    Voir les détails
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;