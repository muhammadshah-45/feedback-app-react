import React from 'react'
import { FaTimes } from 'react-icons/fa'
const DeveloperItem = ({ developerData ,deleteData}) => {
  
  let styleContainer = {

    display: "flex",
     justifyContent: "center",

    flexDirection: "column",
     alignItems: "center",
      padding: "20px",
       background: "white",
       
       borderRadius: "30px",
        color: "black",
         width: "30%",
          margin: "10px auto"
  }

  
  return (
    <>
      <div  style={styleContainer}>
        <button className='btn-dev' onClick={()=> deleteData(developerData.id)}>
        <FaTimes  color='white'  />
        </button>
        <img src={developerData.imageSrc} alt="image" />
        <p> <b>Name:</b>
            {developerData.name}
        </p>
        <p> <b>Age:</b> 
          <span> {developerData.age}</span>
        </p>
        <p><b>Passion:</b>{developerData.passion}</p>
        <p> <b>Company:</b> {developerData.company}</p>


      </div>
    </>
  )
}

export default DeveloperItem;
