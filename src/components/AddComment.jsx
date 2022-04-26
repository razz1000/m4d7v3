import { Component } from "react";
import {Form} from "react-bootstrap"

/* const options = {
    method: "POST",
    body: JSON.stringify(this.state.comment),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
    },

}
 */

class AddComment extends Component {

    state = {
        comment: { 
            comment: "Love it",
            rate: 1,
            elementId: this.props.asin
        }
    }

    onClickEvent = async (event) => {
        event.preventDefault()
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
            method: "POST",
            body: JSON.stringify(this.state.comment),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
            }      

        })

        if (response.ok) {
            alert("Comment sent! ")
        } else {
            alert("something went wrong")
        };
    }

        
        


        /* this.state(comment) */

    



    render() {
        return (
            <div>
                <h6 style={{color: "green"}}>ASIN:{this.props.asin}</h6>
                <h6 style={{color: "blue"}}>Please add you comment below</h6>

            <Form style={{border: "black solid 2px"}} 
               onSubmit={this.onClickEvent} >
                <Form.Group >
                    <Form.Label>Your Comment:</Form.Label>
                    <Form.Control type="text" placeholder="Add comment"
                    value={this.state.comment.comment} 
                    onChange={((event) => {
                        this.setState({
                            ...this.state.comment,
                            comment: event.target.value
                        })
                    })}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Your rating (1-5)</Form.Label>
                    <Form.Control as="select" value={this.state.comment.rate}
                    onChange={((event) => {
                        this.setState({
                            ...this.state.comment,
                            rate: event.target.value
                        })
                    })}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                    <button type="submit">submit</button>

                </Form.Group>
            </Form>

            </div>

        )
    }
}

export default AddComment