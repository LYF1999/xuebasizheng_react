import * as React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router';
import HomePage from './pages/index';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import SectionIndex from './pages/section/index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout.Content>
          <Layout.Header style={{ display: 'flex', justifyContent: 'center', color: 'white', fontSize: 18 }}>
            学霸
          </Layout.Header>
          <Layout.Content style={{ padding: '20px' }}>
            <Switch>
              <Route component={HomePage} path="/" exact />
              <Route component={SectionIndex} path="/sections" exact />
            </Switch>
          </Layout.Content>
        </Layout.Content>
      </BrowserRouter>
    );
  }
}

export default hot(App);
