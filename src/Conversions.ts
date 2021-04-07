import { chunker } from "./Misc"

const is_unsigned_fixed = (type:string)=>RegExp("^uq[0-9]+\\.[0-9]+$").test(type.toLowerCase())
const is_signed_fixed   = (type:string)=>RegExp("^q[0-9]+\\.[0-9]+$").test(type.toLowerCase())
const is_fixed          = (type:string)=>is_signed_fixed(type)||is_unsigned_fixed(type)
export const isNumber = (input : string) =>{ return '0' <= input && input <= '9'}

export function get_type_bitlens(type : string){
    type = type.toLowerCase()
    let extract_bit = (fixed_type:string)=>{
        return fixed_type.split("q")[1].split(".").map((x)=>(parseInt(x)))
    }
                
    if(is_fixed(type)){
        let bits = extract_bit(type)
        return [is_signed_fixed(type)? 1 : 0, ...bits]
    }
    else if(type === 'float32'){
        return [1, 8, 23]
    }
    else if(type === 'float64'){
        return [1, 11, 52]
    }
    else{
        //no match type
        return [0,0,0]
    }        
}
            
export function hex2bits(hex : string, type : string){
    let ret = []
    for(let i = hex.length - 1; i >= 0; i--){
        let integer = parseInt(hex[i], 16)
        for(let j = 0; j < 4; j++){
            ret.push(integer & (1<<j) ? 1 : 0)
            if(ret.length === get_type_bitlens(type).reduce((a,c)=>a+c)){
                return ret.reverse()
            }
        }
    }
    while(ret.length < get_type_bitlens(type).reduce((a,c)=>a+c)){
        ret.push(0)
    }
    return ret.reverse()
}

export function bits2hex(bits : number[]){
    const integer2hex = (num : number, places : number) => num.toString(16).padStart(places, '0')
    let bits_rcopy = bits.slice().reverse()
    let qbits_chunk = chunker(bits_rcopy, 4).reverse()
    let ret = ""
    for(let qbits of qbits_chunk){
        let integer = 0
        for(let i = 0; i < qbits.length; i++){
            if(qbits[i] === 1){
                integer += 1<<i
            }
        }
        ret = ret.concat(integer2hex(integer, 1))
    }
    return ret
}

export function hex2val(hex : string, type:string){
    if(is_fixed(type)){
        let bitlens = get_type_bitlens(type)
        let integer = parseInt(hex, 16)
        let unit = 1<<bitlens[2]
        
        let val = integer / unit
        if(is_signed_fixed(type) && hex2bits(hex, type)[0] === 1){
            val -= 1<< (2 + bitlens[1])
        }
        return val
    }
    else if(type === 'float32'){
        return Buffer.from(hex, 'hex').readFloatBE(0)
    }
    else if(type === 'float64'){
        return Buffer.from(hex, 'hex').readDoubleBE(0)
    }
    else{
        return 0
    }      
}

export function val2hex(val : number, type:string){
    if(is_fixed(type)){
        const integer2hex = (num : number, places : number) => num.toString(16).padStart(places, '0')

        let bitlens = get_type_bitlens(type)
        let resolution = 1 / (1<<bitlens[2])

        let integer = Math.round( val / resolution )
        let bitlen = bitlens.reduce((a,c)=>a+c)
        
        if(integer < 0){
            integer += 1 << bitlen + 1
        }

        let hexlen = Math.ceil(bitlen / 4) 
        let hex = integer2hex(integer, hexlen)

        if(hex.length > hexlen){
            hex = hex.slice(1)
        }
        return hex
    }
    else if(type === 'float32'){
        let buf = Buffer.alloc(4)
        buf.writeFloatBE(val, 0)
        return buf.toJSON().data.map(x=>x.toString(16).padStart(2, '0')).join("")
    }
    else if(type === 'float64'){
        let buf = Buffer.alloc(8)
        buf.writeDoubleBE(val, 0)
        return buf.toJSON().data.map(x=>x.toString(16).padStart(2, '0')).join("")
    }
    else{
        return "0"
    }    
}

            
            
            
            
            
            
            
            
            
            
            
            