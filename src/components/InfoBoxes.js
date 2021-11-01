import React from "react"

import "./InfoBoxes.scss"

const InfoBoxes = (props) => (

    <ul className="list-inline">
        {props.boxNames.map((boxName) => 
            <li><span className="label label-info">{boxName}</span></li>
            )
        }
    </ul>

)

export default InfoBoxes
