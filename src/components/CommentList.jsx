import { Component } from "react";
import {ListGroup} from "react-bootstrap"
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";



class CommentsList extends Component {


    render() {
        return (
            <div>
                <h6 style={{color: "purple"}}>These are the comments:</h6>
                <ListGroup >
                        {this.props.commentsToShow.map((c) => {
                            return ( 
                        <SingleComment c={c}/>
                        )})}
                </ListGroup>


            </div>
        )
    }
}

export default CommentsList