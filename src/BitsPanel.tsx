import React, { CSSProperties } from 'react';

function hex2bits(hex : string, type : string){
    let integer = parseInt(hex, 16)
    let ret = []
    for(let i = 0; i < get_type_bitlens(type).reduce((a,c)=>a+c); i++){
        ret.push(integer&(1<<i) ? 1 : 0)
    }
    return ret.reverse()
}

function bits2hex(bits : number[]){
    const integer2hex = (num : number, places : number) => num.toString(16).padStart(places, '0')
    let integer = 0;
    for(let i = 0; i < bits.length; i++){
        if(bits.reverse()[i] == 1){
            integer += (1<<i)
        }
    }
    let hexlen = 0;
    if(bits.length % 4 == 0){
        hexlen = bits.length / 4
    }
    else{
        hexlen = Math.floor(bits.length / 4) + 1
    }
    return integer2hex(integer, hexlen)
}

function hex2val(hex : string, type:string){

}

function val2hex(val : number, type:string){

}

function get_type_bitlens(type : string){
    let type_lower = type.toLowerCase();
    
    switch(type_lower){
        case 'float32':
            return [1, 8, 23]
        case 'float64':
            return [1, 11, 52]
        default:
            const re_uq : RegExp = new RegExp("^uq[0-9]+\\.[0-9]+$")
            const re_q  : RegExp = new RegExp("^q[0-9]+\\.[0-9]+$")

            let extract_bit = (str:string)=>{
                return str.split("q")[1].split(".").map((x)=>(parseInt(x)))
            }
            
            if(re_uq.test(type_lower)){
                //uqX.Y
                let bits = extract_bit(type_lower)
                return [0, ...bits]
            }
            else if(re_q.test(type_lower)){
                //qX.Y
                let bits = extract_bit(type_lower)
                return [1, bits[0] - 1, bits[1]]
            }
            else{
                //no match type
                return [0,0,0]
            }        
    }
    
}

function BitsPanel(hex : string, type : string){
    let bitlens = get_type_bitlens(type) // length info of bits of data
    let bits = hex2bits(hex, type) // raw 0, 1 expression of data

    
}

export default BitsPanel;