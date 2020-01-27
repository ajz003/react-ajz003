import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./InfoBoxes.scss"

const InfoBoxes = (props) => (


        <ul class="list-inline">

    {props.boxNames.map((boxName) => 
<li><span class="label label-info">{boxName}</span></li>)
}
</ul>

    )

export default InfoBoxes