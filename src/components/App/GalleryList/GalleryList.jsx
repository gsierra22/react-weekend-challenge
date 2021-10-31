import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem"
function GalleryList(props){
    // const [name, setName]= useState(...);
    return(
        <div>
            <h1>Moments List</h1>
            {props.moments.map (thisMoment =>(
              <GalleryItem  image={thisMoment} getGallery={props.getGallery}/>
            ))}
        </div>
    )
}

export default GalleryList;