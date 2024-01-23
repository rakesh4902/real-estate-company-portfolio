import {Link} from 'react-router-dom'
import './index.css'



const Header = () => (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
        
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://bit.ly/3vMBcEm"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                <h1 className="tag-head">Home</h1>
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
              <h1 className="tag-head">About</h1>
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/contact" className="nav-link">
              <h1 className="tag-head">Contact</h1>
              </Link>
            </li>
          </ul>
         
        </div>
      </div>

    </nav>
  )


export default Header