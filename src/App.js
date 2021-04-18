import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import { Container, Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";

import List from "./components/List.Component";
import New from "./components/New.Component";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <h1>Messages</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={2} md={2}>
              <New />
            </Col>
          </Row>
          <Row>
            <Col>
              <List />
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
  );
}
