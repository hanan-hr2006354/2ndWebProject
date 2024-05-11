'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Correct import path

export default function MainPage() {
  const router = useRouter();

  const handleProfileClick = () => {
    const username = 'current_username'; // Replace with actual current username
    router.push({
      pathname: '/pages/joia/customer/profile',
      query: { username: username }
    });
  };

  return (
    <div className="container">
      <header>
        <div className="icon-cart">
        <Link href={
          {  pathname: '/pages/joia/customer/profile'}
              }>
          <button className="profile" onClick={handleProfileClick}>Profile</button></Link>
          <button className="logout">Logout</button>
        </div>
        <h1>Welcome to JOIA</h1>
        <nav id="main-menu">
          <ul>
            <li><a href="login.html">Login</a></li>
            <li><a href="joia.html">Home</a></li>
            <li><a href="#gifts-section">Gifts</a></li>
            <li><a href="#we-offer">What We Offer</a></li>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>

<div class="search-container">
    <h2>Search for Jewelry</h2>
    <div class="search-box">
        <input type="text" id="searchInput" placeholder="Search..."/>
        <button onclick="searchItems()">Search</button>
    </div>
    <div class="searchResults" id="searchResults"></div>
</div>

    <div id="middle-section">
        <section id="gifts-section">
            <h1> Shop by Category </h1>
            <div class="category">
                <div class="card" id="1">
                    <a href="catergory.html"><img src="images/necklaces.jpg" alt="necklaces" width="250" height="300"/></a>
                    <p> Necklaces </p>
                </div>
                <div class="card" id="2">
                    <a href="catergory.html"><img src="images/bracelets.jpeg" alt="bracelets"width="250" height="300"/></a>
                    <p> Bracelets </p>
                </div>
                <div class="card" id="3">
                    <a href="catergory.html"><img src="images/rings.jpeg" alt="rings" width="250" height="300"/></a>
                    <p> Rings </p>
                </div>
                <div class="card" id="4">
                    <a href="catergory.html"><img src="images/earings.png" alt="earrings"width="250" height="300"/></a>
                    <p> Earrings </p>
                </div>
            </div>
        </section>
        <section id="our-story">
            <h1> Our Story </h1>
            <div class="our-story">
                <p>
                    Hello from JOIA! We are a small group of passionate jewelry makers
                    who like making delicate and personalized jewelry for meaningful moments.
                    Our pieces are thoughtfully designed and one of a kind.
                    You can be assured that no two pieces are ever alike, making it even more
                    special as it is passed on from generation to generation.
                </p>
                <img src="images/our-story.png" alt="our-story" width="250" height="250"/>
            </div>
        </section>
    </div>


    <div class="Contact-us">
        <div>
            <h2> Contact Us </h2>
            <p> Email: joiaseller@example.com </p>
            <p> Phone: +74 123 456 78 </p>
            <p> Address: 111 Main St, Doha, Qatar </p>
        </div>
        <div>
            <h2> Follow Us </h2>
            <p><i class="fab fa-facebook"></i> Facebook </p>
            <p><i class="fab fa-instagram"></i> Instagram </p>
        </div>
        
    </div>

</main>
    <footer id="footer">
    <div><p1>© 2024 JOIA </p1></div>
</footer>
   </div>
  );
}
