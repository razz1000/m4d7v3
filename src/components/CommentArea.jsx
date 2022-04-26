import { Component } from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";
const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
    },
  };

class CommentArea extends Component { 

    state = {
        comments: []
    }

componentDidMount = async () => { 
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, options)
    const parsedBody = await response.json();
    
    this.setState({comments: parsedBody})
    console.log(parsedBody)
}


    render() {
        return (
           <div>
                {<CommentsList commentsToShow={this.state.comments}/>}
                
                {/* <h1 style={{color: "red"}}>COMMENT!§</h1> */}
                {<AddComment asin={this.props.asin}/>}
                </div>
            )
    }
}

export default CommentArea