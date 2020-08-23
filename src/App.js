import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import Landing from "./components/Landing";
import configureStore from './store';
const store = configureStore();

const Container = styled.div.attrs(() => ({
  className: `d-flex`,
}))`
  padding: 40px 0;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Container>
            <Landing />
          </Container>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
