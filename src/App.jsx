// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Composants principaux
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ContactPage from './pages/ContactPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';

// Espace membre
import MemberLayout from './pages/MemberArea/MemberLayout';
import Dashboard from './pages/MemberArea/Dashboard';
import Profile from './pages/MemberArea/Profile';
import MyCourses from './pages/MemberArea/MyCourses';
import Settings from './pages/MemberArea/Settings';

// Styles
import './components/Header.css';
import './components/Footer.css';
import './components/CourseList.css';
import './components/CourseCard.css';
import './components/Counter.css';
import './components/SearchBar.css';
import './components/RecentCourses.css';
import './pages/AboutPage.css';
import './pages/CoursesPage.css';
import './pages/CourseDetailPage.css';
import './pages/ContactPage.css';
import './pages/SearchResultsPage.css';
import './pages/NotFoundPage.css';
import './pages/MemberArea/MemberArea.css';

function App() {
  // Définir les données des cours (à terme, elles viendront de l'API)
  const coursesData = [
    {
      id: 1,
      title: "Introduction à l'IA",
      description: "Découvrez les fondamentaux de l'intelligence artificielle.",
      price: 199,
      level: "Débutant",
      image: "https://via.placeholder.com/300x180?text=Introduction+IA"
    },
    {
      id: 2,
      title: "Machine Learning Fondamental",
      description: "Apprenez les principes du machine learning et les algorithmes de base.",
      price: 299,
      level: "Intermédiaire",
      image: "https://via.placeholder.com/300x180?text=Machine+Learning"
    },
    {
      id: 3,
      title: "Deep Learning Avancé",
      description: "Maîtrisez les réseaux de neurones profonds et leurs applications.",
      price: 399,
      level: "Avancé",
      image: "https://via.placeholder.com/300x180?text=Deep+Learning"
    },
    {
      id: 4,
      title: "IA et Éthique",
      description: "Explorez les implications éthiques et sociétales de l'intelligence artificielle.",
      price: 249,
      level: "Tous niveaux",
      image: "https://via.placeholder.com/300x180?text=IA+Ethique"
    },
    {
      id: 5,
      title: "Traitement du Langage Naturel",
      description: "Apprenez à créer des modèles qui comprennent et génèrent du langage humain.",
      price: 349,
      level: "Intermédiaire",
      image: "https://via.placeholder.com/300x180?text=NLP"
    },
    {
      id: 6,
      title: "Vision par Ordinateur",
      description: "Découvrez comment les ordinateurs peuvent interpréter et comprendre les images.",
      price: 329,
      level: "Avancé",
      image: "https://via.placeholder.com/300x180?text=Computer+Vision"
    }
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage courses={coursesData} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage courses={coursesData} />} />
          <Route path="/courses/:id" element={<CourseDetailPage courses={coursesData} />} />
          <Route path="/courses/:id/*" element={<CourseDetailPage courses={coursesData} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchResultsPage courses={coursesData} />} />

          {/* Routes imbriquées pour l'espace membre */}
          <Route path="/member" element={<MemberLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;