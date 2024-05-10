import React from 'react';
import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <header>
                <div className="icon-cart">
                    <Link href="">
                        <button className="profile">Profile</button>
                    </Link>
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
                <div className="search-container">
                    <h2>Search for Jewelry</h2>
                    <div className="search-box">
                        <input type="text" id="searchInput" placeholder="Search..." />
                        <button onClick="searchItems()">Search</button>
                    </div>
                    <div className="searchResults" id="searchResults"></div>
                </div>
                <div id="middle-section">
                    <section id="gifts-section">
                        <h1>Shop by Category</h1>
                        <div className="category">
                            <div className="card" id="1">
                                <Link href={`/api/category?name=necklaces`}>
                            <Link href={
                                {
                                    pathname: '/customerpages/viewCategory',
                                }
                            }>
                                    <img src="images/necklaces.jpg" alt="necklaces" width="250" height="300" />
                                </Link>                                </Link>

                                <p>Necklaces</p>
                            </div>
                            <div className="card" id="2">
                                <Link href={`/api/category?name=bracelets`}>
                                    <img src="images/bracelets.jpeg" alt="bracelets" width="250" height="300" />
                                </Link>
                                <p>Bracelets</p>
                            </div>
                            <div className="card" id="3">
                                <Link href={`/api/category?name=rings`}>
                                    <img src="images/rings.jpeg" alt="rings" width="250" height="300" />
                                </Link>
                                <p>Rings</p>
                            </div>
                            <div className="card" id="4">
                                <Link href={`/api/category?name=earrings`}>
                                    <img src="images/earings.png" alt="earrings" width="250" height="300" />
                                </Link>
                                <p>Earrings</p>
                            </div>
                        </div>
                    </section>
                    <section id="our-story">
                        <h1>Our Story</h1>
                        <div className="our-story">
                            <p>
                                Hello from JOIA! We are a small group of passionate jewelry makers
                                who like making delicate and personalized jewelry for meaningful moments.
                                Our pieces are thoughtfully designed and one of a kind.
                                You can be assured that no two pieces are ever alike, making it even more
                                special as it is passed on from generation to generation.
                            </p>
                            <img src="images/our-story.png" alt="our-story" width="250" height="250" />
                        </div>
                    </section>
                </div>
                <div className="Contact-us">
                    <div>
                        <h2>Contact Us</h2>
                        <p>Email: joiaseller@example.com</p>
                        <p>Phone: +74 123 456 78</p>
                        <p>Address: 111 Main St, Doha, Qatar</p>
                    </div>
                    <div>
                        <h2>Follow Us</h2>
                        <p><i className="fab fa-facebook"></i> Facebook</p>
                        <p><i className="fab fa-instagram"></i> Instagram</p>
                    </div>
                </div>
            </main>
            <footer id="footer">
                <div><p1>© 2024 JOIA</p1></div>
            </footer>
        </>
    );
}
