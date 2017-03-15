import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Navbar from '../navbar/navbar_container';
import MainSearch from '../main_search/main_search_container';
import Slider from 'react-slick';
import FeaturedSlider from '../main_sliders/featured_slider';
import HottestSlider from '../main_sliders/hottest_slider';
import BookedSlider from '../main_sliders/booked_slider';
import ElectronPage from '../downloads/electron_page';
import MobilePage from '../downloads/mobile_page';
import Footer from '../footer/footer';

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
              <FeaturedSlider />
              <HottestSlider />
              <BookedSlider />
            </div>

            <ElectronPage />
            <MobilePage />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
