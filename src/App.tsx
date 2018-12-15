import * as React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './model';
import { saga as courseCollectionSaga } from './model/course/courseCollection';
import { Switch, Route } from 'react-router';
import HomePage from './pages/index';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(courseCollectionSaga)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout.Content>
            <Layout.Header></Layout.Header>
            <Layout.Content>
              <Switch>
                <Route component={HomePage} path="/" exact />
              </Switch>
            </Layout.Content>
          </Layout.Content>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(App);
