import Header from '../Header';
import './index.css';

const Home = () => (
    <>
    <Header/>
    <div className="main-container">
    <div className="home-container">
        <img src="https://bit.ly/490YKDJ" alt="home-logo" className="home-logo"/>
    <div className="home-content-container">
      <h1 className="home-title">Welcome to Our Real Estate Portfolio</h1>
      <p className="home-para">
        Discover your dream home with our extensive range of carefully curated
        listings. Whether you're looking for a cozy apartment, a suburban family
        home, or a luxurious estate, we have the perfect property to meet your
        unique needs and preferences.
      </p>
      <p className="home-para">
        Our team of dedicated real estate experts is committed to providing
        unparalleled service throughout your home-buying journey. Explore our
        featured listings, each accompanied by detailed descriptions and
        stunning images, giving you a glimpse into the possibilities that await
        you.
      </p>
      
    </div>
    </div>
    </div>
    </>
  )


export default Home;
