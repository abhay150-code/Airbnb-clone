import React from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import { mockListings } from './data/listings';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Categories />
      <main className="listings-grid">
        {mockListings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
