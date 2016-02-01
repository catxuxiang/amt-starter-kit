import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

const App = React.createClass({
  render() {
    const {
      location,
      params,
      children,
      ...props,
      } = this.props;
    const length = this.props.location.pathname.length;
    const dir = this.props.location.query.dir;
    const transition = children.props.transition || (dir == 'L' ? 'rfr' : 'sfr');

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            icon="list"
            title="主页"
            selected={!params.page}
            to="/"
          />
          <TabBar.Item
            component={Link}
            icon="info"
            title="关于"
            selected={params.page === 'about'}
            to="/about"
          />
        </TabBar>
      </Container>
    );
  },
});

// Pages
import Index from './pages/Index';
import Page from './pages/Page';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path=":page" component={Page} >
        <Route path=":pagechild" component={Page} />
      </Route>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
