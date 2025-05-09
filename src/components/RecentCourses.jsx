// src/components/RecentCourses.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecentCourses.css';

const RecentCourses = ({ allCourses }) => {
    const [recentCourses, setRecentCourses] = useState([]);

    useEffect(() => {
        // Récupérer les cours récemment consultés depuis localStorage
        const recentCoursesIds = JSON.parse(localStorage.getItem('recentCourses') || '[]');

        // Limiter à 3 cours maximum
        const limitedIds = recentCoursesIds.slice(0, 3);

        // Trouver les cours correspondants
        const matchedCourses = limitedIds
            .map(id => allCourses.find(course => course.id === parseInt(id)))
            .filter(Boolean); // Filtrer les cours non trouvés

        setRecentCourses(matchedCourses);
    }, [allCourses]);

    // Si aucun cours récent, ne pas afficher le composant
    if (recentCourses.length === 0) {
        return null;
    }

    return (
        <div className="recent-courses">
            <h2>Cours récemment consultés</h2>
            <div className="recent-courses-list">
                {recentCourses.map(course => (
                    <div key={course.id} className="recent-course-item">
                        <h3>{course.title}</h3>
                        <p>{course.description.substring(0, 80)}...</p>
                        <Link to={`/courses/${course.id}`} className="btn-small">
                            Revoir ce cours
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentCourses;