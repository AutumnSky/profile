import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "Theme";
import * as api from "api";
import Loader from "Components/Loader";
import SlideShow from "Components/SlideShow";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 80vh;
  background-color: white;
  padding: 2rem;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const DescItem = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const DescTitle = styled.span`
  width: 120px;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.main};
`;

const DescContent = styled.span`
  flex-grow: 1;
  color: ${props => props.theme.fontDesc};
`;

class ProjectDetail extends React.Component {
  state = {
    type: this.props.match.params.type,
    id: this.props.match.params.id,
    data: null
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadData();
  }

  loadData = async () => {
    const { id, type } = this.state;
    let res;
    if (type === "career") {
      res = await api.getWorkPortfolioById(id);
    } else if (type === "personal") {
      res = await api.getPersonalProjectById(id);
    } else if (type === "portfolio") {
      res = await api.getPortfolioById(id);
    }

    this.setState({
      data: res.data
    });
  };

  render() {
    const { data } = this.state;

    return (
      <Container>
        {!data ? (
          <Loader />
        ) : (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <SlideShow images={data.screenshot} />
              <DescContainer>
                <DescItem>
                  <DescTitle>Name</DescTitle>
                  <DescContent>{data.projectName.en}</DescContent>
                </DescItem>
                <DescItem>
                  <DescTitle>Date</DescTitle>
                  <DescContent>
                    {data.from} ~ {data.to}
                  </DescContent>
                </DescItem>
                <DescItem>
                  <DescTitle>Role</DescTitle>
                  <DescContent>{data.role.join(", ")}</DescContent>
                </DescItem>
                <DescItem>
                  <DescTitle>Participation</DescTitle>
                  <DescContent>{data.participation}%</DescContent>
                </DescItem>
                {data.link && data.link.web && (
                  <DescItem>
                    <DescTitle>Link</DescTitle>
                    <DescContent>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={data.link.web}
                      >
                        {data.link.web}
                      </a>
                    </DescContent>
                  </DescItem>
                )}
                {data.link && data.link.iOS && (
                  <DescItem>
                    <DescTitle>iOS Link</DescTitle>
                    <DescContent>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={data.link.iOS}
                      >
                        {data.link.iOS}
                      </a>
                    </DescContent>
                  </DescItem>
                )}
                {data.link && data.link.Android && (
                  <DescItem>
                    <DescTitle>Android Link</DescTitle>
                    <DescContent>{data.link.android}</DescContent>
                  </DescItem>
                )}
              </DescContainer>
            </React.Fragment>
          </ThemeProvider>
        )}
      </Container>
    );
  }
}

export default ProjectDetail;
