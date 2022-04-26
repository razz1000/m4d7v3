import React from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'
import NewCommentArea from './NewCommentArea';

const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
    },
  };


class SingleBook extends React.Component {

    state = {
        selected: false,
        comments: null       
    }

    setSelected = ()=> {
        this.setState({selected: !this.state.selected})
        this.props.setAsinNumber(this.props.book.asin)
        this.getMovieComments()
    }

    getMovieComments = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, options)
            const comments = await response.json();
            console.log(comments)

            if (response.ok) {
                alert("Check the comments in the bottom! ")
                this.setState({
                    /* comments: comments[0].comment, */
                    comments: comments,

                })




/*                 {comments.map((c) => {
                    return (
                        <NewCommentArea comment={c} />
                        )
                })}
             */


            } else {
                alert("something went wrong")
            }; 

        } catch (error) {
            console.log(error)
        }
    }

    


    render() {
        return (
           <div>
            <Card
            onClick={()=>this.setSelected()}
            
                style={{ border: this.state.selected ? '3px solid red' : 'none' }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                    
                </Card.Body>
            </Card>



                    {this.state.comments && this.state.comments.map((c) =>
                    <NewCommentArea author={this.state.comments[0].author}
                        comment1={this.state.comments[0].comment}/> 
                    )} 
                    
                     {/* {<NewCommentArea comment={this.state.comments} /> } */} 
                                </div>


)
    }

}

export default SingleBook