export const chunker = (a:Array<any>,n:number) => [...Array(Math.ceil(a.length/n))].map((v,i) => a.slice(i*n, (i+1)*n))
