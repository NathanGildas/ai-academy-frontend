// src/pages/SearchResultsPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './SearchResultsPage.css';

const SearchResultsPage = ({ courses }) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Filtrer les cours en fonction du terme de recherche
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);

        const filteredCourses = courses.filter(course => {
            const title = course.title.toLowerCase();
            const description = course.description.toLowerCase();

            // Vérifier si tous les termes de recherche sont présents
            return searchTerms.every(term =>
                title.includes(term) || description.includes(term)
            );
        });

        setResults(filteredCourses);
    }, [query, courses]);

    return (
        <main className="main-content">
            <div className="search-results">
                <h1>Résultats de recherche pour "{query}"</h1>

                {results.length > 0 ? (
                    <>
                        <p className="results-count">{results.length} cours trouvés</p>
                        <div className="search-results-list">
                            {results.map(course => (
                                <div key={course.id} className="search-result-item">
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                    <div className="course-meta">
                                        <span className="price">{course.price} €</span>
                                        <span className="level">{course.level}</span>
                                    </div>
                                    <Link to={`/courses/${course.id}`} className="btn">
                                        Voir le cours
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="no-results">
                        <p>Aucun cours ne correspond à votre recherche.</p>
                        <p>Essayez d'autres termes ou consultez notre <Link to="/courses">catalogue complet</Link>.</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default SearchResultsPage;