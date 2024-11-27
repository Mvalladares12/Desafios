import { useState } from "react";
// import ChildComponent from "./ChildComponent"
import Counter from './Counter'

const MyComponent=()=>{
    /*const name='Mario Valladares';
    
    const edad=22*/  
    
    // const [name, setName]=useState('Mario Valladares');
    // const [edad, setedad] = useState(22)

    // const changeData = () => {
    //     setName('Ernesto Escobar');
    //     setedad(25);
    //};

    return(
        <div>
            {/* <ChildComponent name={name} edad={edad}/> 
            <button onClick={changeData}>Cambiar nombre y edad</button>*/}
            <Counter/>
        </div>
    )
}

export default MyComponent;