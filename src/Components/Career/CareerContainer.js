import React from 'react';
import CareerPresenter from './CareerPresenter';
import * as api from 'api';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

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
      <React.Fragment>
        {isLoading && <Loader />}
        {error && <Message message={error} />}
        {data && <CareerPresenter data={data} />}
      </React.Fragment>
    );
  }
}

export default CareerContainer;
