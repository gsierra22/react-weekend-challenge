import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem"
function GalleryList(props){
    // const [name, setName]= useState(...);
    return(
        <div>
            <h1>GalleryList</h1>
            <p>{JSON.stringify(props)}</p>
            {props.moments.map (thisMoment =>(
              <GalleryItem  image={thisMoment} getGallery={props.getGallery}/>
            ))}
        </div>
    )
}

export default GalleryList;