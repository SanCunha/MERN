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
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your Age" />
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
                                            <td className="rightTable">
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
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Barbecue</td>
                                            <td className="rightTable">
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tea</td>
                                            <td className="rightTable">
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                                <Form.Check type="radio" aria-label="radio 1" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </fieldset>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col className="col-border">2 of 2</Col>
            </Row>
            <Row>
                <Col className="col-border">1 of 1</Col>
            </Row>
        </Container>
    )
}


export default App;