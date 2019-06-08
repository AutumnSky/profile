import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";
import * as api from "api";
import Loader from "../Loader";
import Message from "../Message";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 80vh;
  background-color: white;
  padding: 2rem;
`;

class PortfolioContainer extends React.Component {
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
      const { data } = await api.getPortfolios();
      this.setState({ data });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, error, data } = this.state;

    return (
      <ContainerDiv>
        {isLoading && <Loader />}
        {error && <Message message={error} />}
        {data && <PortfolioPresenter data={data} />}
      </ContainerDiv>
    );
  }
}

export default PortfolioContainer;
