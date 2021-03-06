import React from "react";
import "./Card.css";

const Card=(props)=>{
    return(
        <div className="card-container">
           <div style={{borderRight: "1px solid #0076ff"}}>
                <h5>From&#9668;<span style={{textTransform:"capitalize"}}>{props.CardContent.from}</span></h5>
                <p style={{textTransform:"capitalize"}}>{props.CardContent.translateFrom}</p>
           </div>
           <div>
                <h5>To&#9658;<span style={{textTransform:"capitalize"}}>{props.CardContent.to}</span></h5>
                <p style={{textTransform:"capitalize"}}>{props.CardContent.translateTo}</p>
           </div>
        </div>
    )
}
export default Card;