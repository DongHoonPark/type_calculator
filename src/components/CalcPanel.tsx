import React, { useEffect, useState, useRef } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import { get_type_bitlens, hex2val, val2hex, isNumber } from '../Misc';

type CalcPanelProps = {
    type : string
}

export default function CalcPanel({type}:CalcPanelProps){
    
    const hexRef = useRef<any>()
    const valueRef = useRef<any>()

    const [hex, setHex] = useState<string>("0")
    const [value, setValue] = useState<string>("0")

    const [convDirection, setConvDirection] = useState<string>("binary_to_value")

    useEffect(()=>{
        valueRef.current.value = value
    },[value])

    useEffect(()=>{
        hexRef.current.value = hex
    },[hex])

    const onHexInputChanged : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        const { value, name } = e.target
        let input = value.charAt(value.length - 1).toLowerCase()
        setConvDirection("toValue")
        if(isNumber(input) || ('a' <= input && input <= 'f')){
            setHex(e.target.value)
        }
        else{
            e.target.value = value.slice(0, -1)
        }
    }

    const fromValue = ()=>{
        let hexUpdate = (val2hex(parseFloat(value), type).toString())
        setHex(hexUpdate)
        setValue((hex2val(hexUpdate, type).toString()))
    }

    const toValue = ()=>{
        setValue((hex2val(hex, type).toString()))
    }

    const onEnterPressed : React.KeyboardEventHandler<HTMLInputElement>=(e)=>{
        if (e.key === 'Enter') {
            switch(e.target){
                case valueRef.current:
                    fromValue()
                    break
                case hexRef.current:
                    toValue()
                    break
            }
        }
    }

    const onValueInputChanged : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setConvDirection("fromValue")
        setValue(e.target.value)
    }

    const onCalculateButtonClicked : React.MouseEventHandler = ()=>{
        switch(convDirection){
            case "fromValue":
                fromValue()
                break
            case "toValue":
                toValue()
                break
            default:
                break
        }
    }

    return(
        <>
        <Form.Group>
            <Form.Label>Hex Representation</Form.Label>
            <Form.Control type="text" placeholder="hex" onKeyPress={onEnterPressed} onChange={onHexInputChanged} ref={hexRef}/>
            <br/>
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" placeholder="value in decimal" onKeyPress={onEnterPressed} onChange={onValueInputChanged} ref={valueRef}/>
        </Form.Group>
        <br/>
        <Button onClick={onCalculateButtonClicked}>Calculate</Button>
        </>
    )
}