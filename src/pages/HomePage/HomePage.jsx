import React, { useState, useEffect } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import propertiesData from '../../data/properties.json';
import './HomePage.css';

const HomePage = ({ navigate, searchQuery = '' }) => {
  const [properties, setProperties] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const filteredProperties = properties.filter(property => {
    const matchesPrice = property.price <= maxPrice;
    const matchesLocation = property.location.toLowerCase().includes(locationFilter.toLowerCase().trim());
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) || 
                          property.location.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesPrice && matchesLocation && matchesSearch;
  });

  return (
    <div className="home-page container">
      <FilterBar 
        maxPrice={maxPrice} 
        setMaxPrice={setMaxPrice}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />
      
      {filteredProperties.length === 0 ? (
        <div className="empty-state">
          <h2>No matching properties found</h2>
          <p>Try adjusting your search filters.</p>
        </div>
      ) : (
        <div className="property-grid">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} navigate={navigate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
