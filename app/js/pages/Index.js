import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
  Slider,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

const sliderIntance = (
  <Slider>
    <Slider.Item>
      <img src="./i/slider/1.jpg" />
    </Slider.Item>
    <Slider.Item><img src="./i/slider/2.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="./i/slider/3.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="./i/slider/4.jpg" />
    </Slider.Item>
  </Slider>
);

const Index = React.createClass({
  getDefaultProps() {
    return {
      transition: 'rfr',
    };
  },

  renderItems() {
    const pages = [
      'Page1',
      'Page2',
      'Page3',
    ];

    return pages.map((item, index) => {
      return (
        <List.Item
          linkComponent={Link}
          linkProps={{to: `/${item.toLowerCase()}`}}
          title={item}
          key={index}
        />
      );
    });
  },

  render() {
    return (
      <View>
        <NavBar
          amStyle="primary"
          title="郞郞的小窝"
        />
        <Container scrollable>
            {sliderIntance}
            <List classPrefix="mylist">
              {this.renderItems()}
            </List>
        </Container>
      </View>
    );
  },
});

export default Index;
