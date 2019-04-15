import React from 'react';
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
  border: 1px solid ${(props) => props.theme.fontLight};
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
  data: PropTypes.object.isRequired,
  dataType: PropTypes.string.isRequired
};
