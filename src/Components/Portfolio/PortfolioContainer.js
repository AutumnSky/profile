import React from 'react';
import PortfolioPresenter from './PortfolioPresenter';
import * as api from 'api';
import Loader from '../Loader';
import Message from '../Message';

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
      <React.Fragment>
        {isLoading && <Loader />}
        {error && <Message message={error} />}
        {data && <PortfolioPresenter data={data} />}
      </React.Fragment>
    );
  }
}

export default PortfolioContainer;
