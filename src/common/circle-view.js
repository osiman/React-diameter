import React, { Component } from 'react';

class Circle extends Component {


  constructor() {
    super();
    this.state = { 
        load:true,
        clicked:false
    };
  }

  
  circleClick = () => {
    console.log(this.props.postId);
    var apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json[this.props.postId]);
        this.setState({
            data: json[this.props.postId],
            loading: false,
            clicked:true
        });
    });
  }

  render() { 

    if (this.state.loading) {
      return (<div>Loading..</div>)
    }

    var letterStyle = {
        width: this.props.areaValue + 'px',
        height:this.props.areaValue + 'px'
    };

    return (
       <div className="circle" style={letterStyle} onClick={this.circleClick}>
          {this.state.clicked ? 
            <div className="detail-text">
              <h3>{this.state.data.title}</h3>
              <p>{this.state.data.body}</p>
            </div>
          : null }
       </div>
    );

  }
}

export default Circle;
