import { useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function Body(props){
    // const [name, setName]= useState(...);
    return(
        <div>
            <GalleryList moments={props.moments} getGallery={props.getGallery}/>
        </div>
    )
}

export default Body;