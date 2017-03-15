import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Navbar from '../navbar/navbar_container';
import MainSearch from '../main_search/main_search_container';
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

  nextArrow(props) {
    return (
      <div {...this.props} className="next-arrow">
        <FontAwesome
          className='fa-chevron-right'
          name='chevron-right'
          id='fa-chevron-right' />
      </div>
    );
  }

  prevArrow(props) {
    return (
      <div {...this.props} className="prev-arrow">
        <FontAwesome
          className='fa-chevron-left'
          name='chevron-left'
          id='fa-chevron-left' />
      </div>
    );
  }

  render() {
    let nextArrow = this.nextArrow(this.props);
    let prevArrow = this.prevArrow(this.props);

    let settings = {
      dots: false,
      arrows: true,
      nextArrow: nextArrow,
      prevArrow: prevArrow,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      }, {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    return (
      <div>
        <Navbar />

        <div className="splash-page">
          <div className="splash-body">
            <div className="banner">
              <h1>
                <span id="title">Which one?</span>
                Plan your next event<br/>on Loop<span id="title">.</span>
              </h1>

              <MainSearch />
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
                <div className="featured-slider">
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
              <div className="booked-div">
                <div className="featured-title">
                  Just booked
                </div>
                <div className="featured-slider">
                  <Slider className="slider-container" {...settings}>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla6_savm0g.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla2_nep093.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla3_x9hooi.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla4_cskppb.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla5_nuqs5l.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla7_bgd2nk.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla8_qj9fpq.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
                  </Slider>
                </div>
              </div>
              <div className="activities-div">
                <div className="featured-title">
                  Activities
                </div>
                <div className="featured-slider">
                  <Slider className="slider-container" {...settings}>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla6_savm0g.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla2_nep093.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla3_x9hooi.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla4_cskppb.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla5_nuqs5l.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla7_bgd2nk.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla8_qj9fpq.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478256/lolla9_tpj90y.jpg"/>
                    <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489478255/lolla1_kd83qs.jpg"/>
                  </Slider>
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
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
