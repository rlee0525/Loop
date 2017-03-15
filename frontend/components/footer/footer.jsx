import React from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-menu">
            <div className="footer-vertical-menu">
              <span>English</span>
              <span>USD</span>
            </div>
            <div className="footer-vertical-menu">
              <span>Loop</span>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Policies</li>
                <li>Help</li>
                <li>Diversity & Belonging</li>
              </ul>
            </div>
            <div className="footer-vertical-menu">
              <span>Discover</span>
              <ul>
                <li>Trust & Safety</li>
                <li>Travel Credit</li>
                <li>Gift Cards</li>
                <li>Loop Citizen</li>
                <li>Business Travel</li>
                <li>Guidebooks</li>
              </ul>
            </div>
            <div className="footer-vertical-menu">
              <span>Hosting</span>
              <ul>
                <li>Why Host</li>
                <li>Hospitality</li>
                <li>Responsible Hosting</li>
              </ul>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489450126/logo1_xm2m2j.png" />Loop, Inc
            </div>
            <div>
              <div className="icons">
                <a href="http://www.raymondlee.io">
                  <FontAwesome
                    className='fa-user'
                    name='user'
                    id='fa-user' />
                </a>
                <a href="https://github.com/rlee0525">
                  <FontAwesome
                    className='fa-github'
                    name='github'
                    id='fa-github' />
                </a>
                <a href="https://www.linkedin.com/in/rlee0525">
                  <FontAwesome
                    className='fa-linkedin'
                    name='linkedin'
                    id='fa-linkedin' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
