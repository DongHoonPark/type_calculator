import React, { useEffect, useState, useRef } from 'react';
import { Container, Form, Col, Row, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { get_type_bitlens, hex2val, val2hex, isNumber, hex2bits, bits2hex } from '../Conversions';
import {useWindowWidth} from '@react-hook/window-size'
import { chunker } from '../Misc';

type CalcPanelProps = {
    type : string
}

export default function CalcPanel({type}:CalcPanelProps){
    
    const hexRef = useRef<any>()
    const valueRef = useRef<any>()

    const [hex, setHex] = useState<string>("0")
    const [value, setValue] = useState<string>("0")

    const [convDirection, setConvDirection] = useState<string>("binary_to_value")

    const width = useWindowWidth()
    const [bvCol, setBvCol] = useState<number>(8)

    useEffect(()=>{
        valueRef.current.value = value
    },[value])

    useEffect(()=>{
        hexRef.current.value = hex
    },[hex])

    useEffect(()=>{

    },[width])

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


    let bits = chunker(hex2bits(hex, type).reverse(), bvCol).map(x=>x.reverse()).reverse()
    let offset = 0
    while(bits[0].length < bvCol){
        bits[0].unshift(" ")
        offset++
    }
    return(
        <>
        <Form.Group>
            <Form.Label>Hex Representation</Form.Label>
            <Form.Control type="text" placeholder="hex" onKeyPress={onEnterPressed} onChange={onHexInputChanged} ref={hexRef}/>
        </Form.Group>
        <Row>
        {
            bits.map((c, i)=>{
                return(
                    <Col xs={12} sm={12} md={6} lg={3} style={{marginTop:"5px", alignContent:"center"}} className="text-center">
                        <ToggleButtonGroup type="checkbox" name={"tbg".concat(i.toString())} 
                            value={c.slice().reverse().map((vv,ii)=>vv===1?ii:null).filter(x=>x!=null)}>

                            {c.map((v, j)=>{

                                let index = i * bvCol + j - offset
                                let bindex = bits.length * bvCol - (i * bvCol + j) - 1

                                let variant = 'secondary'
                                let disabled = false
                                let bitlens = get_type_bitlens(type)

                                if(index < bitlens[0]){
                                    variant = 'warning'
                                }
                                else if(index < bitlens[0] + bitlens[1]){
                                    variant = 'success'
                                }
                                else if(index < bitlens[0] + bitlens[1] + bitlens[2]){
                                    variant = 'primary'
                                }
                                else{
                                    disabled = true
                                }

                                return(
                                    <ToggleButton value={bindex} variant={variant} disabled={disabled} onClick={(e)=>{
                                        if(e.currentTarget == e.target){
                                            setConvDirection("toValue")
                                            if(v === 0){
                                                let bits_tmp = hex2bits(hex, type)
                                                bits_tmp[index] = 1
                                                setHex(bits2hex(bits_tmp))
                                            }
                                            else{
                                                let bits_tmp = hex2bits(hex, type)
                                                bits_tmp[index] = 0
                                                setHex(bits2hex(bits_tmp))
                                            }
                                        }
                                    }}>
                                        {v}
                                    </ToggleButton>
                                )
                            })}
                        </ToggleButtonGroup>
                    </Col>
                )
            })
        }
        </Row>
        <br/>
        <Form.Group>
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" placeholder="value in decimal" onKeyPress={onEnterPressed} onChange={onValueInputChanged} ref={valueRef}/>
        </Form.Group>
        <br/>
        <Button onClick={onCalculateButtonClicked}>Calculate</Button>
        </>
    )
}