import React from 'react';
import styled from 'styled-components';
import * as api from 'api';
import Loader from 'Components/Loader';
import SlideShow from 'Components/SlideShow';

const Container = styled.div``;

class ProjectDetail extends React.Component {
  state = {
    type: this.props.match.params.type,
    id: this.props.match.params.id,
    data: null
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const { id } = this.state;
    const { data } = await api.getWorkPortfolioById(id);
    this.setState({
      data
    });
    console.log('data', data);
  };

  render() {
    const { data } = this.state;
    return !data ? (
      <Loader />
    ) : (
      <Container>
        <SlideShow images={data.screenshot} />
      </Container>
    );
  }
}

export default ProjectDetail;
