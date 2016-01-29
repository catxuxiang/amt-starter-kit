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
      <img src="./i/slider/1.jpg"/>
      <div className="myslider-caption">
        我是不是很萌
      </div>
    </Slider.Item>
    <Slider.Item>
      <img src="./i/slider/2.jpg" />
      <div className="myslider-caption">
        宽敞的地方才好耍宝
      </div>
    </Slider.Item>
    <Slider.Item>
      <img src="./i/slider/3.jpg" />
      <div className="myslider-caption">
        坐在爷爷身上有点紧张
      </div>
    </Slider.Item>
    <Slider.Item>
      <img src="./i/slider/4.jpg" />
      <div className="myslider-caption">
        奶奶是最爱和我疯的人
      </div>
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
      {'page':'Page3', 'title':'我的照片'},
      {'page':'Page1', 'title':'我的视频'},
    ];

    return pages.map((item, index) => {
      return (
        <List.Item
          linkComponent={Link}
          linkProps={{to: `/${item.page.toLowerCase()}R`}}
          title={item.title}
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
