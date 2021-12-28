import { useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function Body(props){
    return(
        <div>
            <GalleryList moments={props.moments} getGallery={props.getGallery}/>
        </div>
    )
}

export default Body;