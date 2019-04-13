import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.portfolioBackground};
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const NotFoundImageContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundImage = styled.img`height: 100%;`;

const ProjectName = styled.h4`
  color: ${(props) => props.theme.fontTitle};
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

const ProjectItem = ({ data, dataType }) => (
  <Link to={`/detail/${dataType}/${data._id}`}>
    <Container>
      {data.screenshot.length > 0 ? (
        <ImageContainer>
          <Image src={`${process.env.REACT_APP_IMG_PATH}/${data.screenshot[0]}`} />
        </ImageContainer>
      ) : (
        <NotFoundImageContainer>
          <NotFoundImage src={`${process.env.REACT_APP_IMG_PATH}/default.png`} alt="noimage" />
        </NotFoundImageContainer>
      )}
      <ProjectName>{data.projectName.en}</ProjectName>
    </Container>
  </Link>
);

export default ProjectItem;

ProjectItem.propTypes = {
  data: propTypes.object.isRequired,
  dataType: propTypes.string.isRequired
};
