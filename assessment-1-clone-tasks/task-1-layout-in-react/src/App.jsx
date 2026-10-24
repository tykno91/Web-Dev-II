import React from 'react';
import Header from './components/Header';
import ArticleIntro from './components/ArticleIntro';
import ArticleContent from './components/ArticleContent';
import ImageGallery from './components/ImageGallery';
import AuthorBio from './components/AuthorBio';
import Comments from './components/Comments';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content-card">
        <ArticleIntro />
        <ArticleContent />
        <ImageGallery />
        <AuthorBio />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}