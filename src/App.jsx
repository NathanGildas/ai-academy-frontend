// src/App.jsx
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import CourseList from './components/CourseList';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  // Données factices pour les cours
  const coursesData = [
    {
      title: "Introduction à l'IA",
      description: "Découvrez les fondamentaux de l'intelligence artificielle et ses applications.",
      price: 199,
      level: "Débutant",
      image: "https://via.placeholder.com/300x180?text=Intelligence+Artificielle"
    },
    {
      title: "Machine Learning Fondamental",
      description: "Apprenez les principes du machine learning et les algorithmes de base.",
      price: 299,
      level: "Intermédiaire",
      image: "https://via.placeholder.com/300x180?text=Machine+Learning"
    },
    {
      title: "Deep Learning Avancé",
      description: "Maîtrisez les réseaux de neurones profonds et leurs applications.",
      price: 399,
      level: "Avancé",
      image: "https://via.placeholder.com/300x180?text=Deep+Learning"
    },
    {
      title: "IA et Éthique",
      description: "Explorez les implications éthiques et sociétales de l'IA.",
      price: 249,
      level: "Tous niveaux",
      image: "https://via.placeholder.com/300x180?text=IA+et+Ethique"
    }
  ];

  // État pour le formulaire de contact (exercice sur les événements)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // État pour afficher un message de confirmation
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Gestion des changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', contactForm);
    // Réinitialiser le formulaire
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
    // Afficher le message de confirmation
    setFormSubmitted(true);
    // Cacher le message après 3 secondes
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="app">
      <Header />
      <NavBar />

      <main className="content">
        <section className="hero-section">
          <h2>Bienvenue sur AI Academy</h2>
          <p>
            Notre mission est de rendre l'apprentissage de l'intelligence artificielle
            accessible à tous.
          </p>
          <button className="cta-button">Découvrir nos cours</button>
        </section>

        <CourseList courses={coursesData} />

        <section className="counter-section">
          <h2>Statistiques</h2>
          <div className="counters">
            <Counter initialValue={5} label="Étudiants inscrits aujourd'hui" />
            <Counter initialValue={42} label="Cours complétés" />
            <Counter initialValue={12} label="Instructeurs experts" />
          </div>
        </section>

        <section className="contact-section">
          <h2>Contactez-nous</h2>
          {formSubmitted && (
            <div className="success-message">
              Votre message a été envoyé avec succès !
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Envoyer</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;