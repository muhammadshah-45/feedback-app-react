import React from 'react'
import DeveloperItem from './DeveloperItem'
const DeveloperList = ({devData , deleteData}) => {
  console.log(deleteData.id)
   if(!devData || devData.length === 0){
    return <p>No card available yet</p>
   } 
  return (
    <>
    <div className='dev-list'>
        { devData.map((data) =>{
     return <DeveloperItem deleteData = {deleteData} key = {data.id} developerData = {data}/>
        })}
    </div>
    </>
  )
}

export default DeveloperList;
