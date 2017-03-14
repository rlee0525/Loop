import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Slider from 'react-slick';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.goToSignUp = this.goToSignUp.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  goToSignUp() {
    this.props.router.push("/signup");
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="splash-page">
        <div className="splash-body">
          <div className="banner">
            <h1>
              <span id="title">Which one?</span>
              Plan your next event<br/>on Loop<span id="title">.</span>
            </h1>

            <div className="search-bar-container">
              <div className="search-bar-section">
                <div className="search-container">
                  <div className="search-title">
                    <p>Category</p>
                  </div>
                  <div className="search-input">
                    <input type="text"
                      placeholder="All"
                      className="search-bar" />
                  </div>
                </div>

                <div className="search-container">
                  <div className="search-title">
                    <p>Activity</p>
                  </div>
                  <div className="search-input">
                    <input type="text"
                      placeholder="Anything"
                      className="search-bar" />
                  </div>
                </div>

                <div className="search-container">
                  <div className="search-title">
                    <p>Date</p>
                  </div>

                  <div className="search-input">
                    <input type="text"
                      placeholder="Anytime"
                      className="search-bar" />
                  </div>

                  <div className="search-button">
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="suggestions-navbar">
            <span id="suggestion-active">FOR YOU</span>
            <span>CATEGORIES</span>
            <span>ACTIVITES</span>
            <span>PLACES</span>
          </div>

          <div className="splash-main">
            <div className="featured-div">
              <div className="featured-title">
                Featured concerts
              </div>
              <div className="featured-slider-1">
                <Slider className="slider-container" {...settings}>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla5_nuqs5l.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla7_bgd2nk.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla2_nep093.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla3_x9hooi.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla4_cskppb.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla6_savm0g.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla8_qj9fpq.jpg"/>
                  <img className="img-slider" src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
                </Slider>
              </div>
            </div>
            <div className="featured-div">
              <div className="featured-title">
                Just booked
              </div>
              <div className="featured-slider">
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla6_savm0g.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla2_nep093.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla3_x9hooi.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla4_cskppb.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla5_nuqs5l.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla7_bgd2nk.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla8_qj9fpq.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
              </div>
            </div>
            <div className="featured-div">
              <div className="featured-title">
                Activities
              </div>
              <div className="featured-slider">
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla4_cskppb.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla5_nuqs5l.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla3_x9hooi.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla7_bgd2nk.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla8_qj9fpq.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla6_savm0g.jpg"/>
                <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla2_nep093.jpg"/>
              </div>
            </div>
          </div>

          <div className="electron">
            This is electron app
          </div>

          <div className="mobile">
            This is mobile app
          </div>

          <div className="footer">
            Loop, Inc.
          </div>
        </div>
        <div className="gray-area"></div>
      </div>
    );
  }
}

export default withRouter(Splash);
