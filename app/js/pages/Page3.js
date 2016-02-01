import React from 'react';
import {
  Container,
  Group,
  List,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

const Page3 = React.createClass({
  renderItems() {
    const pages = [
      'Page1',
    ];

    return pages.map((item, index) => {
      return (
        <List.Item
          linkComponent={Link}
          linkProps={{to: `/page3/${item.toLowerCase()}`, query: { dir: 'R' }}}
          title={item}
          key={index}
        />
      );
    });
  },
  render() {
    return (
      <Container {...this.props}>
        <Group
          header="Page 3"
          noPadded
        >
          {this.renderItems()}
        </Group>
      </Container>
    );
  },
});

export default Page3;
