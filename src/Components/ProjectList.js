import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const ProjectList = ({ data, dataType }) => (
  <Grid>{data.map((portfolio) => <ProjectItem key={portfolio._id} data={portfolio} dataType={dataType} />)}</Grid>
);

ProjectList.propTypes = {
  data: propTypes.array.isRequired,
  dataType: propTypes.string.isRequired
};

export default ProjectList;
