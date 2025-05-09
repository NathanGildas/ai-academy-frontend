// src/components/CourseList.jsx
import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

function CourseList({ courses }) {
    return (
        <div className="course-list">
            <h2>Nos Cours</h2>
            <p>Découvrez notre sélection de cours d'intelligence artificielle</p>
            <div className="courses-container">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        title={course.title}
                        description={course.description}
                        price={course.price}
                        level={course.level}
                        image={course.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default CourseList;