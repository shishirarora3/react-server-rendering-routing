import React, { PropTypes, Component } from 'react'
import getContentInfo from '../utils/data';


class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      contentText: 'this is default text'
    }
  }
  componentDidMount(){
    console.log(this);
    this.init(this.props.params.splat)
  }
  componentWillReceiveProps(nextProps){
    this.init(nextProps.params.splat);
  }

  init(slug){
    this.setState({
          contentText: getContentInfo(slug)
        });
  }
  
  render(){
    return (
      <h3>Hello, you have selected <span className="label label-default">{this.props.params.splat}</span></h3>
    )
  }
}

export default Content
