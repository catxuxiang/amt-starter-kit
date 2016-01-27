import React from 'react';
import {
  Container,
  Group,
} from 'amazeui-touch';

const Page1 = React.createClass({
  getInitialState: function() {
    return {
      result: null,
    };
  },

  componentDidMount: function() {
    let nocache = require('superagent-no-cache');
    let request = require('superagent');
	
    request
	.get("http://192.168.0.105:6699/mysql")
	.use(nocache)
	.withCredentials()
	.end(function(err, res){
	      if (err != null) {
		alert(err);
	      } else {
		      if (this.isMounted()) {
			this.setState({
			  result: JSON.parse(res.text)
			});
		      }
	      }
	}.bind(this));
  },  

  render() {
	if (this.state.result == null) {
	    return (
	      <Container {...this.props}>
		<Group>
		</Group>
	      </Container>
	    );
	} else {
	    var repos = this.state.result;
	    var repoList = repos.map(function (repo) {
		return (
		    <div>
			<h2>{ repo.id }</h2>
		  	<p>{ repo.comment }</p>
		    </div>
		);
	    });
	    return (
	      <Container {...this.props}>
		<Group>
		  {repoList}
		</Group>
	      </Container>
	    );
	}

  },
});

export default Page1;
