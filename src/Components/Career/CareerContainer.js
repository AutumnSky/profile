import React from "react";
import CareerPresenter from "./CareerPresenter";
import * as api from "api";
import Loader from "Components/Loader";
import Message from "Components/Message";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 80vh;
  background-color: white;
  padding: 2rem;
`;

class CareerContainer extends React.Component {
  state = {
    data: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const { data } = await api.getWorkPortfolios();
      this.setState({ data });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { error, isLoading, data } = this.state;

    return (
      <ContainerDiv>
        {isLoading && <Loader />}
        {error && <Message message={error} />}
        {data && <CareerPresenter data={data} />}
      </ContainerDiv>
    );
  }
}

export default CareerContainer;
