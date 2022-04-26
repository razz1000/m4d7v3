import { Component } from "react";



class NewCommentArea extends Component {
    render() {
        return (
            <div>
                {this.props.asin}
             {JSON.stringify(this.props.comments)}
                
                

                                
 
            </div>

        )



        
    }
}

export default NewCommentArea