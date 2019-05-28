import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Character, CharacterList } from "./container";
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
          <Switch>
            <Route path="/characters" exact={true} component={CharacterList} />
            <Route path="/characters/:id" exact={true} component={Character} />
            <Route render={() => <Redirect to="/characters" />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
