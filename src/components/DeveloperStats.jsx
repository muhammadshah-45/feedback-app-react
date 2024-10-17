import React from 'react'

const DeveloperStats = ({devData}) => {
  console.log(devData.rating)
  let average = devData.reduce((acc,curr)=>{
    return acc + curr.rating
  },0)/ devData.length;

  average = average.toFixed(1).replace(/[.,]0$/,"")

  return (
    <>
      <div>
        <h4>Cards:{devData.length}</h4>
        <h4>Average Rating:{isNaN(average) ? 0 : average} </h4>
      </div>
    </>
  )
}

export default DeveloperStats
