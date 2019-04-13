import React from 'react';

class SlideShow extends React.Component {
  render() {
    const { images } = this.props;
    return images.map((image, index) => <img key={index} src={`${process.env.REACT_APP_IMG_PATH}/${image}`} />);
  }
}

export default SlideShow;
