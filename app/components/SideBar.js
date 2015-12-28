import React, { PropTypes, Component } from 'react';
import Router from 'react-router';
import getContentInfo from '../utils/data';

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      topic: getContentInfo()
    }
  }
  
  handleClick(e,path){
      e.stopPropagation();
      var pathString = path.join('/');

      [].forEach.call(document.querySelectorAll('.list-group-item.selected'), function(el) {
          el.classList.remove("selected");
      });
      e.target.parentElement.className +=' selected';

      this.props.history.pushState('', "/" + pathString);
    }
  makeList(topic, path){

    var that =this;

    return topic && (
            <ul className="list-group">
                {
                    Object.keys(topic).map((key) => {
                        var newPath = Array.prototype.concat.apply([], path);
                        newPath.push(key);
                        return <li className="list-group-item" key={key} onClick={(e) => this.handleClick(e,newPath)}>{key}
                            {typeof topic[key] === 'object' && that.makeList(topic[key], newPath)}
                        </li>

                    })
                }
            </ul>
        );
  }
  render(){
    const topic = this.state.topic;
    return (
        this.makeList(topic,[])
    )
  }
}
SideBar.PropTypes = {
  history: PropTypes.object.isRequired
}

export default SideBar;