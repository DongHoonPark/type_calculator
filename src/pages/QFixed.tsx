import React, { CSSProperties, useEffect, useState, useRef } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import BitsPanel from '../components/BitsPanel';
import { get_type_bitlens, hex2val, val2hex } from '../Misc';

const isNumber = (input : string) =>{ return '0' <= input && input <= '9'}


function QFixed(){
    const integerRef = useRef<any>()
    const fractionRef = useRef<any>()
    const hexRef = useRef<any>()
    const valueRef = useRef<any>()

    const [type, setType] = useState<string>("q0.0")
    const [signed, setSigned] = useState<string>("q")
    const [integer, setInteger] = useState<string>("0")
    const [fraction, setFraction] = useState<string>("0")

    const [hex, setHex] = useState<string>("0")
    const [value, setValue] = useState<string>("0")

    const [convDirection, setConvDirection] = useState<string>("binary_to_value")

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

    useEffect(()=>{
        valueRef.current.value = value
    },[value])

    useEffect(()=>{
        hexRef.current.value = hex
    },[hex])

    const onHexInputChanged : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        const { value, name } = e.target
        let input = value.charAt(value.length - 1).toLowerCase()
        if(isNumber(input) || ('a' <= input && input <= 'f')){
            setHex(e.target.value)
        }
        else{
            e.target.value = value.slice(0, -1)
        }
    }

    const onEnterPressed : React.KeyboardEventHandler<HTMLInputElement>=(e)=>{
        if (e.key === 'Enter') {
            switch(e.target){
                case valueRef.current:
                    setHex((val2hex(parseFloat(value), type).toString()))
                    setValue((hex2val(hex, type).toString()))
                    break
                case hexRef.current:
                    setValue((hex2val(hex, type).toString()))
                    break
            }
        }
    }

    const onValueInputChanged : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setValue(e.target.value)
    }

    return(
        <>
        <Container>
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
            <Form.Group>
                <Form.Label>Hex Representation</Form.Label>
                <Form.Control type="text" placeholder="hex" onKeyPress={onEnterPressed} onChange={onHexInputChanged} ref={hexRef}/>
                <br/>
                <Form.Label>Value</Form.Label>
                <Form.Control type="text" placeholder="value in decimal" onKeyPress={onEnterPressed} onChange={onValueInputChanged} ref={valueRef}/>
            </Form.Group>
            <br/>
            <Button>Calculate</Button>
            {/* <BitsPanel>
            </BitsPanel> */}
        </Container>

        </>
    )
}

export default QFixed