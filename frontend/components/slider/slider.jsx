import React from 'react';
import Slider from 'react-slick';

export default class SlickSlider extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    return (
      <div>
        <Slider {...settings}>
          <div key={1}><h3>1</h3></div>
          <div key={2}><h3>2</h3></div>
          <div key={3}><h3>3</h3></div>
          <div key={4}><h3>4</h3></div>
          <div key={5}><h3>5</h3></div>
          <div key={6}><h3>6</h3></div>
        </Slider>
        <div style={{textAlign: 'center'}}>
          <button className='button' onClick={this.previous}>Previous</button>
          <button className='button' onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}
