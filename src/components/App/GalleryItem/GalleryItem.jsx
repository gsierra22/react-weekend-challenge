import { useState } from "react";
import axios from "axios";

function GalleryItem(props){
    // const [name, setName]= useState(...);

    const [likes, setLikes]= useState(0);

    const increaseLikes = () =>{
        axios.put(`/gallery/like/${props.image.id}`).then( (response)=>{
            props.getGallery();
            console.log( response.data );
          }).catch((err)=>{
            alert('nope');
            console.log(err);
          })

    }

    const[show, setShow]=useState( false );

    const toggleImage = () =>{
        setShow( !show );
    }
    return(
        <div>{
            show?
                <img src={ props.image.path } width="150" height="150" onClick={ toggleImage }></img>:
                <h1 onClick={ toggleImage }>{ props.image.description }</h1>
                }
                <button onClick={increaseLikes}>Like</button>
                <div>{props.image.likes}</div>

        </div>
    )
}

export default GalleryItem;