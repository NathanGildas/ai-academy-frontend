// src/components/CourseList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';
import CourseCard from './CourseCard';

const CourseList = ({ courses }) => {
    // Si courses n'est pas défini, utiliser un tableau vide
    const courseData = courses || [];

    return (
        <div className="course-list">
            <h2>Nos Cours</h2>
            <p>Découvrez notre sélection de cours d'intelligence artificielle.</p>
            <div className="courses-container">
                {courseData.map(course => (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        price={course.price}
                        level={course.level}
                        image={course.image}
                    />
                ))}
            </div>
            <div className="view-all-courses">
                <Link to="/courses" className="btn">Voir tous nos cours</Link>
            </div>
        </div>
    );
};

export default CourseList;