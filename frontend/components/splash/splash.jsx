import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Navbar from '../navbar/navbar_container';
import MainSearch from '../main_search/main_search_container';
import Slider from 'react-slick';
import FeaturedSlider from '../main_sliders/featured_slider';
import HottestSlider from '../main_sliders/hottest_slider';
import BookedSlider from '../main_sliders/booked_slider';
import DownloadPage from '../download_page/download_page';
import Footer from '../footer/footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
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

            <DownloadPage />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Splash);
