import React from 'react';

class DownloadPage extends React.Component {
  render() {
    return (
      <div className="download-page">
        <div className="download-demo">
          <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489559864/mobile-placeholder-min_wlpzid.jpg" />
          <img src="http://res.cloudinary.com/rlee0525/image/upload/v1489559864/electron_placeholder-min_oumsep.png" />
        </div>
        <div className="download-links">
          <span>
            Download Mobile App
          </span>
          <span>
            Download Desktop App
          </span>
        </div>
      </div>
    );
  }
}

export default DownloadPage;
