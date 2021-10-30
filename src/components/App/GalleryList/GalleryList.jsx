import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem"
import GradItem from "../GradItem/GradItem";
import VaticanItem from "../VaticanItem/VaticanItem";
function GalleryList(props){
    // const [name, setName]= useState(...);
    return(
        <div>
            <h1>GalleryList</h1>
            <p>{JSON.stringify(props)}</p>
            {props.moments.map (thisMoment =>(
              <GalleryItem  image={thisMoment}/>
            ))}
        </div>
    )
}

export default GalleryList;