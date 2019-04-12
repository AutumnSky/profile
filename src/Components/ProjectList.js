import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  grid-column-gap: 10px;
  grid-row-gap: 20px;
`;

const ProjectList = ({ data }) => (
  <Grid>{data.map((portfolio) => <ProjectItem key={portfolio._id} data={portfolio} />)}</Grid>
);

ProjectList.propTypes = {
  data: propTypes.array.isRequired
};

export default ProjectList;
