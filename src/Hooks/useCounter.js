import {useState} from "react";


export function useCounter() {
    const [count, setCount] = useState(0)
    const inc = ()=> { setCount( count + 1 )}
    const dec = ()=> { setCount( count - 1 )}
    return {count, dec,inc}


}