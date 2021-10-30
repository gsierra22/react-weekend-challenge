import { useState } from "react";

function GalleryItem(){
    // const [name, setName]= useState(...);
    const[image, SetImage]=useState({
        location: 'images/chicago.jpeg',
        description: 'Picture of me in Chicago'
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

export default GalleryItem;