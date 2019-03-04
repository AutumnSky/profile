import React from 'react';
import PersonalProjectPresenter from './PersonalProjectPresenter';
import * as api from 'api';
import Loader from '../Loader';
import Message from '../Message';

class PersonalProjectContainer extends React.Component {
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
      const { data } = await api.getPersonalProjects();
      console.log(data);
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
        {data && <PersonalProjectPresenter data={data} />}
      </React.Fragment>
    );
  }
}

export default PersonalProjectContainer;
