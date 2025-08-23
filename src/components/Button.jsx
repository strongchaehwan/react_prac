function Button(props){
    
    //이벤트 객체
    const onClickButton = (e) =>{
        console.log(e);
        console.log(props.text);
    }

    return <button onClick={onClickButton}
                //onMouseEnter={onClickButton}
    >{props.text}</button>;
}



export default Button;