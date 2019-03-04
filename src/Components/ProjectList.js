import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 14px;
  justify-content: center;
`;

const ProjectList = ({ data }) => (
  <Grid>{data.map((portfolio) => <ProjectItem key={portfolio._id} data={portfolio} />)}</Grid>
);

ProjectList.propTypes = {
  data: propTypes.array.isRequired
};

export default ProjectList;
