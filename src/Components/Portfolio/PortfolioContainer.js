import React from 'react';
import PortfolioPresenter from './PortfolioPresenter';
import * as api from 'api';

class PortfolioContainer extends React.Component {
  state = {
    portfolioData: {},
    yearList: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
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
  };

  render() {
    return <PortfolioPresenter {...this.state} />;
  }
}

export default PortfolioContainer;
