import React, { useEffect, useState, useRef } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import CalcPanel from '../components/CalcPanel';
import { get_type_bitlens, hex2val, val2hex, isNumber } from '../Misc';

function FixedPage(){
    const integerRef = useRef<any>()
    const fractionRef = useRef<any>()

    const [type, setType]         = useState<string>("q0.0")
    const [signed, setSigned]     = useState<string>("q")
    const [integer, setInteger]   = useState<string>("0")
    const [fraction, setFraction] = useState<string>("0")

    const onTypeSignedInputChanged : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        const { value, name } = e.target
        if(value === "Signed")
            setSigned("q")
        else
            setSigned("uq")

    }
    const onTypeNumberInputChanged : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        const { value, name } = e.target
        let input = value.charAt(value.length - 1)
        if(!isNumber(input)){
            e.target.value = value.slice(0, -1)
        }
        switch(e.target){
            case integerRef.current:
                setInteger(e.target.value)
                break
            case fractionRef.current:
                setFraction(e.target.value)
                break
        }
    }

    useEffect(() => {
        setType("".concat(signed?signed:"" , integer?integer:"", ".", fraction?fraction:""))
    }, [signed, integer, fraction])


    return(
        <>
        <Container>
            <p></p>
            <Form>
            <Form.Label>Q-Fixed Type : {type} / {get_type_bitlens(type?type:"q0.0").reduce((a,c)=>a+c)}bit</Form.Label>
            <Form.Row>
                <Form.Group as={Col} controlId="signed">
                    <Form.Control as="select" defaultValue="Signed" onChange={onTypeSignedInputChanged}>
                        <option>Signed</option>
                        <option>Unsigned</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="integer" >
                    <Form.Control type="text" placeholder="Integer" defaultValue={0} onChange={onTypeNumberInputChanged} ref={integerRef}/>
                </Form.Group>

                <Form.Group as={Col} controlId="fraction">
                <Form.Control type="text" placeholder="Fraction" defaultValue={0} onChange={onTypeNumberInputChanged} ref={fractionRef}/>
                </Form.Group>
            </Form.Row>
            </Form>
            <CalcPanel type={type}></CalcPanel>
        </Container>

        </>
    )
}

export default FixedPage