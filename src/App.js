import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Character, Characters } from "./container";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootSaga from "./saga";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:id" exact component={Character} />
          {/* <Route render={() => <Redirect to={{ home: "/characters" }} />} /> */}
        </Router>
      </Provider>
    );
  }
}

export default App;
