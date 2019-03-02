import React from 'react';
import PortfolioPresenter from './PortfolioPresenter';
import * as api from 'api';
import Loader from '../Loader';
import Message from '../Message';

class PortfolioContainer extends React.Component {
  state = {
    portfolioData: {},
    yearList: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data: portfolioList } = await api.portfolio();

      let yearList = [];
      const portfolioData = portfolioList.reduce((totalData, currentData) => {
        const key = currentData['year'];
        if (!totalData[key]) {
          yearList.push(key);
          totalData[key] = [];
        }
        totalData[key].push(currentData);
        return totalData;
      }, {});

      this.setState({
        portfolioData,
        yearList
      });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, error } = this.state;
    return (
      <React.Fragment>
        {isLoading && <Loader />}
        {error && <Message message={error} />}
        <PortfolioPresenter {...this.state} />
      </React.Fragment>
    );
  }
}

export default PortfolioContainer;
