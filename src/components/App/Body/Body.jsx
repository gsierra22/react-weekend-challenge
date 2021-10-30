import { useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function Body(props){
    // const [name, setName]= useState(...);
    return(
        <div>
            <h1>Body</h1>
            <p>{JSON.stringify(props)}</p>
            <GalleryList moments={props.moments} getGallery={props.getGallery}/>
        </div>
    )
}

export default Body;