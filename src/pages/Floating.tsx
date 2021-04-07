import React, { useState } from 'react';
import { Container, Form, Col } from 'react-bootstrap';
import CalcPanel from '../components/CalcPanel';

function FloatingPage(){
    const [type, setType] = useState<string>("float32")

    const onTypeChange : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        const { value } = e.target
        switch(value){
            case 'Single 32b':
                setType('float32')
                break
            case 'Double 64b':
                setType('float64')
                break
            default:
                break
        }
    }

    return(
        <>
        <Container>
            <p></p>
            <Form>
            <Form.Label>IEEE754 Float Type</Form.Label>
            <Form.Row>
                <Form.Group as={Col} controlId="signed">
                    <Form.Control as="select" defaultValue="Single 32b" onChange={onTypeChange}>
                        <option>Single 32b</option>
                        <option>Double 64b</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            </Form>
            <CalcPanel type = {type} />
        </Container>

        </>
    )
}

export default FloatingPage