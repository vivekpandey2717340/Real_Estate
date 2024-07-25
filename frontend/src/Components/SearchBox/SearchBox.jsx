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
                        <option value="achham">Achham</option>
                        <option value="arghakhanchi">Arghakhanchi</option>
                        <option value="baglung">Baglung</option>
                        <option value="baitadi">Baitadi</option>
                        <option value="bajhang">Bajhang</option>
                        <option value="bajura">Bajura</option>
                        <option value="banke">Banke</option>
                        <option value="bara">Bara</option>
                        <option value="bardiya">Bardiya</option>
                        <option value="bhaktapur">Bhaktapur</option>
                        <option value="bhojpur">Bhojpur</option>
                        <option value="chitwan">Chitwan</option>
                        <option value="dadeldhura">Dadeldhura</option>
                        <option value="dailekh">Dailekh</option>
                        <option value="dang">Dang</option>
                        <option value="darchula">Darchula</option>
                        <option value="dhading">Dhading</option>
                        <option value="dhankuta">Dhankuta</option>
                        <option value="dhanusha">Dhanusha</option>
                        <option value="dholkha">Dholkha</option>
                        <option value="dolpa">Dolpa</option>
                        <option value="doti">Doti</option>
                        <option value="gorkha">Gorkha</option>
                        <option value="gulmi">Gulmi</option>
                        <option value="humla">Humla</option>
                        <option value="ilam">Ilam</option>
                        <option value="jajarkot">Jajarkot</option>
                        <option value="jhapa">Jhapa</option>
                        <option value="jumla">Jumla</option>
                        <option value="kailali">Kailali</option>
                        <option value="kalikot">Kalikot</option>
                        <option value="kanchanpur">Kanchanpur</option>
                        <option value="kapilvastu">Kapilvastu</option>
                        <option value="kaski">Kaski</option>
                        <option value="kathmandu">Kathmandu</option>
                        <option value="kavrepalanchok">Kavrepalanchok</option>
                        <option value="khotang">Khotang</option>
                        <option value="lamjung">Lamjung</option>
                        <option value="lalitpur">Lalitpur</option>
                        <option value="mahottari">Mahottari</option>
                        <option value="makwanpur">Makwanpur</option>
                        <option value="manang">Manang</option>
                        <option value="morang">Morang</option>
                        <option value="mugu">Mugu</option>
                        <option value="mustang">Mustang</option>
                        <option value="myagdi">Myagdi</option>
                        <option value="nawalpur">Nawalpur</option>
                        <option value="nuwakot">Nuwakot</option>
                        <option value="okhaldhunga">Okhaldhunga</option>
                        <option value="palpa">Palpa</option>
                        <option value="panchthar">Panchthar</option>
                        <option value="parbat">Parbat</option>
                        <option value="parsa">Parsa</option>
                        <option value="pyuthan">Pyuthan</option>
                        <option value="ramechhap">Ramechhap</option>
                        <option value="rasuwa">Rasuwa</option>
                        <option value="rautahat">Rautahat</option>
                        <option value="rolpa">Rolpa</option>
                        <option value="rukum">Rukum</option>
                        <option value="rupandehi">Rupandehi</option>
                        <option value="salyan">Salyan</option>
                        <option value="sankhuwasabha">Sankhuwasabha</option>
                        <option value="saptari">Saptari</option>
                        <option value="sarlahi">Sarlahi</option>
                        <option value="sindhuli">Sindhuli</option>
                        <option value="sindhupalchok">Sindhupalchok</option>
                        <option value="siraha">Siraha</option>
                        <option value="solukhumbu">Solukhumbu</option>
                        <option value="sunsari">Sunsari</option>
                        <option value="surkhet">Surkhet</option>
                        <option value="syangja">Syangja</option>
                        <option value="tanahun">Tanahun</option>
                        <option value="taplejung">Taplejung</option>
                        <option value="terhathum">Terhathum</option>
                        <option value="udayapur">Udayapur</option>
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
                <div className="categories">
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