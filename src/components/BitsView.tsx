import React, { CSSProperties } from 'react';
import {get_type_bitlens, hex2bits} from '../Conversions'

function BitsPanel(hex : string, type : string){
    let bitlens = get_type_bitlens(type) // length info of bits of data
    let bits = hex2bits(hex, type) // raw 0, 1 expression of data

    return(
        <></>
    )
}

export default BitsPanel;