import React from "react"
import {ListGroup} from "react-bootstrap"



let SingleComment = (props) => {
    return ( 
        <div>
            <ListGroup.Item key={props.c._id} style={{color: "black", fontSize: "0.5em"}}>{props.c.comment}</ListGroup.Item>
        </div>
    )
}

export default SingleComment