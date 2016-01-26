import React from 'react';
import {
  Container,
  Group,
} from 'amazeui-touch';

const Page1 = React.createClass({
  getInitialState: function() {
    return {
      resultId: '111',
      resultComment: '222'
    };
  },

  componentDidMount: function() {
        this.setState({
	  resultId: "",
          resultComment: ""
        });

	var nocache = require('superagent-no-cache');
	var request = require('superagent');
	
	request
	.get("http://192.168.0.105:6699/mysql")
	.use(nocache)
	.withCredentials()
	.end(function(err, res){
	      if (err != null) {
		alert(err);
	      } else {
		      if (this.isMounted()) {
			var result = JSON.parse(res.text);
		        var lastGist = result[1];
			this.setState({
			  resultId: lastGist.id,
			  resultComment: lastGist.comment
			});
		      }
	      }
	}.bind(this));
  },  

  render() {
    return (
      <Container {...this.props}>
        <Group>
          <h2>{ this.state.resultId }</h2>
          <p>{ this.state.resultComment }</p>
        </Group>
      </Container>
    );
  },
});

export default Page1;
