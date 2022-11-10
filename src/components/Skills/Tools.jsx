import React from "react";
import '../../Styles/Skills.css';

function Tools(props){
    return(
            <div className='icon-container'>
                <img className='icon-image' src={require(`../../img/icon-${props.image}.png`)} alt={`Icon of ${props.name}`} />
            </div>
    );
}

export default Tools;