import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import theme from "Theme";

const Container = styled.div`
  width: 100%;
  align-self: center;
  background-color: ${props => props.theme.portfolioBackground};
  border-radius: 10px;
  padding: 20px;
  border: 3px solid ${props => props.theme.fontLight};
  display: flex;
  flex-direction: column;
`;

const ImageArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArrowCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 30vh;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.fontLight};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: ${props => props.theme.main};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)``;

const NextButton = styled(Button)``;

const PageArea = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.fontDesc};
  padding-top: 1rem;
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
          <ImageArea>
            <ArrowCol>
              <PrevButton onClick={this.handlePrev}>
                {/* TODO: <Icon type="left" /> */}
              </PrevButton>
            </ArrowCol>
            <ImageContainer>
              <Image
                src={`${process.env.REACT_APP_IMG_PATH}/${
                  images[currentIndex]
                }`}
              />
            </ImageContainer>
            <ArrowCol>
              <NextButton onClick={this.handleNext}>
                {/* TODO: <Icon type="right" /> */}
              </NextButton>
            </ArrowCol>
          </ImageArea>

          <PageArea>
            {currentIndex + 1} / {images.length}
          </PageArea>
        </Container>
      </ThemeProvider>
    );
  }
}

export default SlideShow;

SlideShow.propTypes = {
  images: PropTypes.array.isRequired
};
