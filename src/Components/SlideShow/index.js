import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import { Icon } from 'antd';

const Container = styled.div`
  width: 100%;
  position: relative;
  align-self: center;
  background-color: ${(props) => props.theme.portfolioBackground};
  border-radius: 10px;
  padding: 20px;
  border: 3px solid ${(props) => props.theme.fontLight};
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 50vh;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.fontLight};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: ${(props) => props.theme.main};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
`;

const NextButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
`;

const Page = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.fontDesc};
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

class SlideShow extends React.Component {
  state = {
    currentIndex: 0
  };

  handlePrev = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({
        currentIndex: currentIndex - 1
      });
    }
  };

  handleNext = () => {
    const { currentIndex } = this.state;
    if (currentIndex < this.props.images.length - 1) {
      this.setState({
        currentIndex: currentIndex + 1
      });
    }
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;
    // return images.map((image, index) => <img key={index} src={`${process.env.REACT_APP_IMG_PATH}/${image}`} />);
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <PrevButton onClick={this.handlePrev}>
            <Icon type="left" />
          </PrevButton>
          <Item>
            <Image src={`${process.env.REACT_APP_IMG_PATH}/${images[currentIndex]}`} />
          </Item>
          <NextButton onClick={this.handleNext}>
            <Icon type="right" />
          </NextButton>
          <Page>
            {currentIndex + 1} / {images.length}
          </Page>
        </Container>
      </ThemeProvider>
    );
  }
}

export default SlideShow;

SlideShow.propTypes = {
  images: PropTypes.array.isRequired
};
