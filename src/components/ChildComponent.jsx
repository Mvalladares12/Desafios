const ChildComponent=(props)=>{
    return(
        <div>
            <h1>Componente hijo</h1>
            <h4>Mi nombre es: {props.name}</h4>
            <h4>Mi edad es: {props.edad}</h4>
            <h4>Numero: {props.Cont}</h4>
        </div>
    )
}

export default ChildComponent;