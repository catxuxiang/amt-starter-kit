import React from 'react';
import {
  View,
  NavBar,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import NotFound from './NotFound';

const pages = {
  Page1,
  Page2,
  Page3,
};

const Page = React.createClass({
  render() {
    let pagechild = this.props.params.pagechild;
    let page = this.props.params.page;
    let pathName = this.props.location.pathname;
    let back = pathName.substring(0, pathName.lastIndexOf('/'));
    if (back != '') back += 'L';
 
    if (pagechild)
    {
        page = pagechild.charAt(0).toUpperCase() + pagechild.slice(1);
    } else {
      if (page) {
        page = page.charAt(0).toUpperCase() + page.slice(1);
      }
    }
    page=page.substring(0, page.length-1);

    const Component = pages[page] || NotFound;
    const backNav = {
      component: Link,
      icon: 'left-nav',
      title: '返回',
      props: {
        to: back,
      },
    };

    return (
      <View>
        <NavBar
          title={page}
          leftNav={[backNav]}
          amStyle="primary"
        />
        <Component scrollable />
      </View>
    );
  },
});

export default Page;
