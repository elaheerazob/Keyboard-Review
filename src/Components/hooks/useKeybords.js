import { useEffect, useState } from "react"

const useKeybords = ()=>{
    const [keybords,setKeybords] = useState([]);
    useEffect( () =>{
        fetch('mydata.json')
        .then(res =>res.json())
        .then(data =>setKeybords(data))
    },[])
    return [keybords,setKeybords];
}
export default useKeybords;