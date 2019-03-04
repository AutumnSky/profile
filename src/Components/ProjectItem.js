import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.portfolioBackground};
  border-radius: 10px;
  padding: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const NotFoundImage = styled.img`
  max-width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const ProjectName = styled.h4`
  color: ${(props) => props.theme.fontTitle};
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

const ProjectItem = ({ data }) => (
  <Container>
    {data.screenshot.length > 0 ? (
      <Image src={`${process.env.REACT_APP_IMG_PATH}/${data.screenshot[0]}`} />
    ) : (
      <NotFoundImage src={`${process.env.REACT_APP_IMG_PATH}/default.png`} />
    )}
    <ProjectName>{data.projectName.en}</ProjectName>
  </Container>
);

ProjectItem.propTypes = {
  data: propTypes.object.isRequired
};

export default ProjectItem;
