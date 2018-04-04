import React, { Component } from 'react';

class Circle extends Component {

  // default values
  constructor() {
    super();
    this.state = { 
        load:true,
        clicked:false
    };
  }

  // // when circle button on click -> fetch data & user data
  circleClick = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        this.setState({
            data: json[this.props.postId],
            loading: false,
            clicked:true
        });
    });
  }

  render() { 
    // if data is not displayed on the element
    if (this.state.loading) {
      return (<div>Loading..</div>)
    }

    // calculated values and style
    let letterStyle = {
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
