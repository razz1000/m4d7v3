import { Component } from "react";



class NewCommentArea extends Component {
    render() {
        return (
            <div>
                {this.props.asin}
                <h3>This is the author: {this.props.author} </h3>
                <h2>This is the comment: {this.props.comment1}</h2>
                
                

                                
 
            </div>

        )



        
    }
}

export default NewCommentArea