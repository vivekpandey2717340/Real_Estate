import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to Filter component with state
    navigate('/searchResult', { state: { location, category, budget } });
  };

  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section className="banner">
        <div className="container">
          <div className="banner_content">
            <div className="content_grid">
              <div><p>Let Us Find Your Dream</p></div>
              <div className="content_anim">
                <p>Home</p>
                <p>Flat</p>
                <p>Appartment</p>
              </div>
            </div>
          </div>
          <div className="search_btn">
            <select
              className="search_box left"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
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
            <select
              className="search_box"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Home">Home</option>
              <option value="Flat">Flat</option>
              <option value="Apartment">Apartment</option>
            </select>
            <input
              type="text"
              className="search_box"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Budget"
            />
            <div style={{cursor:'pointer'}} className="search_box right" onClick={handleClick}>
               <a >Search</a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero Section --> */}
    </div>
  )
}

export default Banner;
