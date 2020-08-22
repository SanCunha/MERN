import React from 'react'

import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap'

const App = () => {
    return (
        <Container>
            <Row>
                <Col className="col-border">
                    <Form>
                        <Form.Row>
                            <fieldset>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Age:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Age" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridBrave">
                                        <Form.Label>Are you brave?</Form.Label>
                                        <Form.Control as="select">
                                            <option>Choice</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                            </fieldset>
                        </Form.Row>
                        <Form.Row>
                            <fieldset>
                                <legend>
                                    How much do you like to:
                                </legend>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td className="leftTable">
                                                <div>
                                                    <label>1</label>
                                                </div>
                                                <div>
                                                    <label>2</label>
                                                </div>
                                                <div>
                                                    <label>3</label>
                                                </div>
                                                <div>
                                                    <label>4</label>
                                                </div>
                                                <div>
                                                    <label>5</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Beer</td>
                                            <td className="leftTable">
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Barbecue</td>
                                            <td className="leftTable">
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tea</td>
                                            <td className="leftTable">
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </fieldset>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Insert
                        </Button>
                    </Form>
                </Col>
                <Col className="col-border">
                    <Form>
                        <Form.Row>
                            <fieldset>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Empty for all" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Age</Form.Label>
                                        <div className="itens-inline">
                                            <div style={{fontSize: 'small'}}>
                                                <div className="itens-inline">
                                                    <Form.Label>Over</Form.Label>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>
                                                <div className="itens-inline">
                                                    <Form.Label>Under</Form.Label>
                                                    <Form.Check type="radio" aria-label="radio 1" />
                                                </div>                                                
                                            </div>
                                            <div>
                                                <Form.Control type="text" placeholder="Empty for all" />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridBrave" style={{paddingLeft: 5 + 'px !important'}}>
                                        <Form.Label>Would you like a brave?</Form.Label>
                                        <div className="itens-inline">
                                            <div>
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Label>Yes</Form.Label>
                                            </div>
                                            <div>
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Label>No</Form.Label>
                                            </div>
                                            <div>
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Label>Whatever</Form.Label>
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Form.Row>
                            </fieldset>
                        </Form.Row>
                        <Form.Row>
                            <fieldset>
                                <legend>
                                    How much do you like to:
                                </legend>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td className="rightTable">
                                                <label>0</label>
                                                <label>1</label>
                                                <label>2</label>
                                                <label>3</label>
                                                <label>4</label>
                                                <label>5</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Beer</td>
                                            <td className="rightTable">
                                                <Form.Group controlId="formBasicRange">
                                                    <Form.Control type="range" min="0" max="5"/>
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Barbecue</td>
                                            <td className="rightTable">
                                                <Form.Group controlId="formBasicRange">
                                                    <Form.Control type="range" min="0" max="5"/>
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tea</td>
                                            <td className="rightTable">
                                                <Form.Group controlId="formBasicRange">
                                                    <Form.Control type="range" min="0" max="5"/>
                                                </Form.Group>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </fieldset>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col className="col-border">1 of 1</Col>
            </Row>
        </Container>
    )
}


export default App;