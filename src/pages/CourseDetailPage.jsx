// src/pages/CourseDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation, Routes, Route } from 'react-router-dom';
import './CourseDetailPage.css';

// Composants pour les onglets
const AboutTab = ({ course }) => (
    <section className="course-description">
        <h2>Description du cours</h2>
        <p>{course.description}</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            magna eu eros lacinia, ac dignissim nisl ultrices. Proin consectetur
            felis ut metus ultricies, at tincidunt massa gravida.
        </p>
    </section>
);

const CurriculumTab = ({ course }) => (
    <section className="course-curriculum">
        <h2>Programme du cours</h2>
        <div className="curriculum-modules">
            <div className="module">
                <h3>Module 1: Introduction</h3>
                <ul>
                    <li>Qu'est-ce que l'intelligence artificielle?</li>
                    <li>Histoire de l'IA</li>
                    <li>Applications modernes de l'IA</li>
                </ul>
            </div>

            <div className="module">
                <h3>Module 2: Fondamentaux</h3>
                <ul>
                    <li>Algorithmes et structures de données</li>
                    <li>Probabilités et statistiques</li>
                    <li>Optimisation</li>
                </ul>
            </div>

            <div className="module">
                <h3>Module 3: Projets pratiques</h3>
                <ul>
                    <li>Configuration de l'environnement</li>
                    <li>Projet guidé</li>
                    <li>Projet final</li>
                </ul>
            </div>
        </div>
    </section>
);

const ReviewsTab = ({ course }) => (
    <section className="course-reviews">
        <h2>Avis des étudiants</h2>
        <div className="reviews-container">
            <div className="review">
                <div className="review-header">
                    <span className="reviewer">Marie L.</span>
                    <div className="stars">★★★★★</div>
                </div>
                <p>Excellent cours! Les explications sont claires et les exercices très pertinents.</p>
            </div>

            <div className="review">
                <div className="review-header">
                    <span className="reviewer">Thomas R.</span>
                    <div className="stars">★★★★☆</div>
                </div>
                <p>Très bon contenu, mais j'aurais aimé plus d'exemples pratiques dans certains modules.</p>
            </div>

            <div className="review">
                <div className="review-header">
                    <span className="reviewer">Sophie M.</span>
                    <div className="stars">★★★★★</div>
                </div>
                <p>Ce cours m'a permis de comprendre des concepts complexes grâce à des analogies simples.</p>
            </div>
        </div>
    </section>
);

const InstructorsTab = ({ course }) => (
    <section className="course-instructors">
        <h2>Enseignants</h2>
        <div className="instructors-list">
            <div className="instructor">
                <img src="https://via.placeholder.com/100" alt="Instructeur" className="instructor-avatar" />
                <div className="instructor-info">
                    <h3>Dr. Alex Martin</h3>
                    <p className="instructor-title">Spécialiste en machine learning</p>
                    <p>PhD en Intelligence Artificielle, avec plus de 8 ans d'expérience dans le domaine de l'IA. A travaillé chez DeepMind et participe activement à des conférences internationales.</p>
                </div>
            </div>

            <div className="instructor">
                <img src="https://via.placeholder.com/100" alt="Instructrice" className="instructor-avatar" />
                <div className="instructor-info">
                    <h3>Julie Nguyen</h3>
                    <p className="instructor-title">Experte en deep learning</p>
                    <p>Ingénieure en apprentissage automatique avec une expertise en vision par ordinateur et traitement du langage naturel. A contribué à plusieurs projets open-source en IA.</p>
                </div>
            </div>
        </div>
    </section>
);

// Composant principal
const CourseDetailPage = ({ courses }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('about');
    const [shareMessage, setShareMessage] = useState('');

    // Récupérer le filtre actif s'il existe dans l'état de localisation
    const activeFilter = location.state?.filter || 'all';

    // Trouver le cours correspondant à l'ID
    const course = courses.find(c => c.id === parseInt(id));

    // Stocker le cours consulté dans localStorage pour "Récemment consultés"
    useEffect(() => {
        if (course) {
            // Récupérer les IDs existants ou initialiser un tableau vide
            const recentCourses = JSON.parse(localStorage.getItem('recentCourses') || '[]');

            // Supprimer l'ID du cours s'il existe déjà (pour le mettre en tête de liste)
            const filteredCourses = recentCourses.filter(courseId => courseId !== id);

            // Ajouter l'ID du cours en tête de liste
            const updatedCourses = [id, ...filteredCourses];

            // Limiter à 10 cours maximum (optionnel)
            const limitedCourses = updatedCourses.slice(0, 10);

            // Sauvegarder dans localStorage
            localStorage.setItem('recentCourses', JSON.stringify(limitedCourses));
        }
    }, [course, id]);

    // Si le cours n'existe pas, rediriger vers la page des cours
    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Cours non trouvé</h2>
                <p>Désolé, le cours que vous recherchez n'existe pas.</p>
                <Link to="/courses" className="btn">Voir tous les cours</Link>
            </div>
        );
    }

    // Fonction pour retourner à la liste des cours avec le filtre actif
    const goBack = () => {
        navigate('/courses', { state: { filter: activeFilter } });
    };

    // Fonction pour partager l'URL du cours (exercice supplémentaire)
    const shareCourse = () => {
        // Créer l'URL complète
        const shareUrl = window.location.href;

        // Copier l'URL dans le presse-papiers
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                setShareMessage('URL copiée dans le presse-papiers !');
                setTimeout(() => setShareMessage(''), 3000);
            })
            .catch(err => {
                console.error('Erreur lors de la copie : ', err);
                setShareMessage('Impossible de copier l\'URL. Veuillez réessayer.');
            });
    };

    // Gérer le changement d'onglet
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`/courses/${id}/${tab !== 'about' ? tab : ''}`, { replace: true });
    };

    return (
        <main className="main-content">
            <div className="course-detail">
                <button className="back-button" onClick={goBack}>
                    &larr; Retour aux cours
                </button>

                <div className="course-header">
                    <div className="course-title-section">
                        <h1>{course.title}</h1>
                        <div className="course-meta">
                            <span className="level">{course.level}</span>
                            <span className="price">{course.price} €</span>
                        </div>
                    </div>

                    <div className="course-actions">
                        {shareMessage && <div className="share-message">{shareMessage}</div>}
                        <button className="btn-secondary" onClick={shareCourse}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                            Partager
                        </button>
                    </div>
                </div>

                {/* Système d'onglets - Exercice supplémentaire */}
                <div className="course-tabs">
                    <button
                        className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => handleTabChange('about')}
                    >
                        À propos
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'curriculum' ? 'active' : ''}`}
                        onClick={() => handleTabChange('curriculum')}
                    >
                        Programme
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => handleTabChange('reviews')}
                    >
                        Avis
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'instructors' ? 'active' : ''}`}
                        onClick={() => handleTabChange('instructors')}
                    >
                        Enseignants
                    </button>
                </div>

                <div className="course-content">
                    {activeTab === 'about' && <AboutTab course={course} />}
                    {activeTab === 'curriculum' && <CurriculumTab course={course} />}
                    {activeTab === 'reviews' && <ReviewsTab course={course} />}
                    {activeTab === 'instructors' && <InstructorsTab course={course} />}
                </div>

                <div className="enroll-section">
                    <h2>Prêt à commencer votre apprentissage?</h2>
                    <button className="btn btn-large">S'inscrire maintenant</button>
                </div>
            </div>
        </main>
    );
};

export default CourseDetailPage;