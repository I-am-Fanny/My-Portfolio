import React from "react";

function Websites({ text, title, website, repository }){
  return(
    <>
    <div className='card-container'>
      <div className='card'>
        <div className='top-card-container'>
          <p className='text-card'>
            {text}
          </p>
          <div className='button-card-container'>
            <div className='container-card-button'>
            <button className='button-card'>
              <a className="button-card" href={repository} target="_blank" rel="noopener noreferrer">Repository</a>
            </button>
            </div>
            <div className='container-card-button'>
            <button className='button-card'><a href={website} className='button-card' target="_blank" rel="noopener noreferrer" >Website</a></button>
            </div>
            
          </div>
          <div className='title-card-container'>

            <p className='title-card'>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Websites;



