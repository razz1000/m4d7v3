import React from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import NewCommentArea from './NewCommentArea'
class BookList extends React.Component {

    state = {
        searchQuery: '',
        asinNumber: null
    }

    render() {
        return (
            <Container>
                <Row>
                <Col className="col-md-8">

            <Row>
                    <Col>

                       { <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>}
                    </Col>
                
             
                    </Row> 
                    <Row>

                         {
                        this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
                            
                    
                          <Col className="col-lg-2" key={b.asin}>
                                <SingleBook book={b} setAsinNumber={(asin)=>this.setState({asinNumber:asin})} />
                                
                                </Col>       



                      ))
                    }

                            
                            </Row>
                              </Col>
                        
                            <Col className="col-md-4">
                                <NewCommentArea asin={this.state.asinNumber} />    
                            </Col>
                        </Row>
                            </Container>   
                             
                         
        )
    }

}

export default BookList