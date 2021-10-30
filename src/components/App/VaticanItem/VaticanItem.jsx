import { useState } from "react";

function VaticanItem(){
    // const [name, setName]= useState(...);
    const[image, SetImage]=useState({
        location: 'images/vatican.jpeg',
        description: 'Picture of me in the Vatican'
    });

    const[show, setShow]=useState( false );

    const toggleImage = () =>{
        setShow( !show );
    }
    return(
        <div>{
            show?
                <img src={ image.location } width="150" height="150" onClick={ toggleImage }></img>:
                <h1 onClick={ toggleImage }>{ image.description }</h1>}
        </div>
    )
}

export default VaticanItem;