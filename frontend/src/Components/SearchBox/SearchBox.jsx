import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const SearchBox = () => {
    const location = useLocation();
  const { location: selectedLocation, category: selectedCategory } = location.state || {};
  const [selectedOptions, setSelectedOptions] = useState({});

  // Function to toggle selected class on filter options
  const toggleSelected = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option]
    }));
  };

  // Function to handle price range slider input
  const handlePriceRange = (event) => {
    const value = parseInt(event.target.value);
    document.getElementById('price-min').textContent = `Nrs ${value.toLocaleString()}`;
  };

  // Function to reset filters
  const handleResetFilters = () => {
    setSelectedOptions({});
    document.querySelectorAll('.filter-option').forEach(option => {
      option.classList.remove('selected');
    });
  };

  // Function to handle view details click event
  const handleClick = (event) => {
    event.preventDefault();
    console.log('View Details clicked');
  };

  useEffect(() => {
    // Update selected options based on state when it changes
    if (selectedCategory || selectedLocation) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [selectedCategory?.toLowerCase()]: true,
        location: selectedLocation
      }));
    }
  }, [selectedCategory, selectedLocation]);
  return (
    <div>
        {/* <!-- Search box --> */}
        <div className="search_div">
            <div style={{ background: 'var(--p)', padding: '15px', borderRadius: '20px' }}>
                <form className="filter-container">
                    <h2>Filter Your Search</h2>
                    <div className="filter-buttons">
                        <p><h4>Selling Type</h4></p>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['rent'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('rent')}
                        >
                            Rent
                        </button>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['buy'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('buy')}
                        >
                            Buy
                        </button>
                    </div>
                    <div className="categories">
                        <p><h4>Category</h4></p>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['home'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('home')}
                        >
                            Home
                        </button>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['flat'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('flat')}
                        >
                            Flat
                        </button>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['apartment'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('apartment')}
                        >
                            Apartment
                        </button>
                    </div>
                    <div className="location">
                        <p><h4>Location</h4></p>
                        <select id="location-select" value={selectedOptions.location || ''} onChange={(e) => setSelectedOptions({...selectedOptions, location: e.target.value })}>
                            <option value="">Select Location</option>
                            <option value="bhaktapur">Bhaktapur</option>
                            <option value="birendranagar">Birendranagar</option>
                            <option value="deukhuri">Deukhuri</option>
                            <option value="godawari">Godawari</option>
                            <option value="hetauda">Hetauda</option>
                            <option value="janakpur">Janakpur</option>
                            <option value="kathmandu">Kathmandu</option>
                            <option value="lalitpur">Lalitpur</option>                        
                            <option value="pokhara">Pokhara</option>
                        </select>
                    </div>
                    <div className="price-range">
                        <p><h4>Price Range</h4></p>
                        <input
                            type="range"
                            id="price-range"
                            min="10000"
                            max="30000000"
                            step="1000"
                            onChange={handlePriceRange}
                        />
                        <div className="price-values">
                            <span id="price-min">Nrs 10,000</span>
                            <span id="price-max">Max</span>
                        </div>
                    </div>
                    <div className="categories"style={{marginTop:'20px'}}>
                        <p><h4>Property Type</h4></p>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['2BHK'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('2BHK')}
                        >
                            2BHK
                        </button>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['3BHK'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('3BHK')}
                        >
                            3BHK
                        </button>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['Bungalow'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('Bungalow')}
                        >
                            Bungalow
                        </button>
                        <button
                            type="button"
                            className={`filter-option ${selectedOptions['Mansion'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('Mansion')}
                        >
                            Mansion
                        </button>
                        <div style={{ marginTop: '10px' }}>
                            <button
                            type="button"
                            className={`filter-option ${selectedOptions['Triplex'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('Triplex')}
                            >
                            Triplex
                            </button>
                            <button
                            type="button"
                            className={`filter-option ${selectedOptions['Duplex'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('Duplex')}
                            >
                            Duplex
                            </button>
                            <button
                            type="button"
                            className={`filter-option ${selectedOptions['4BHK'] ? 'selected' : ''}`}
                            onClick={() => toggleSelected('4BHK')}
                            >
                            4BHK
                            </button>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button type="submit">Filter</button>
                        <button type="reset" onClick={handleResetFilters}>Clear Filters</button>
                    </div>
                </form>
            </div>
        </div>
                {/* <!--End Search box --> */}
        
    </div>
  )
}

export default SearchBox