import { useState } from "react";

function GalleryItem(props){
    // const [name, setName]= useState(...);

    const [likes, setLikes]= useState(0);

    const increaseLikes = () =>{
        setLikes(likes + 1);
        console.log(likes)
    }

    const[show, setShow]=useState( false );

    const toggleImage = () =>{
        setShow( !show );
    }
    return(
        <div>{
            show?
                <img src={ props.image.location } width="150" height="150" onClick={ toggleImage }></img>:
                <h1 onClick={ toggleImage }>{ props.image.description }</h1>
                }
                <button onClick={increaseLikes}>Like</button>
                <div>{props.image.likes}</div>

        </div>
    )
}

export default GalleryItem;