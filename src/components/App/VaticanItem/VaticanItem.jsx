import { useState } from "react";

function VaticanItem(){
    // const [name, setName]= useState(...);
    const[image, SetImage]=useState({
        location: 'images/vatican.jpeg',
        description: 'Picture of me in the Vatican'
    });

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
                <img src={ image.location } width="150" height="150" onClick={ toggleImage }></img>:
                <h1 onClick={ toggleImage }>{ image.description }</h1>}
                <button onClick={increaseLikes}>Like</button>
                <div>{likes}</div>
        </div>
    )
}

export default VaticanItem;