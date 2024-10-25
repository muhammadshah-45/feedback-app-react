import React from 'react'
import { Navigate, useNavigate, Routes,Route} from 'react-router-dom'
export default function Post() {
  const navigate = useNavigate();
  const onClickbtn = ()=>{
    console.log("hello world"); 
    navigate("/about");
  }
  const status = 200;
    if(status === 404){
        return <Navigate to="/notfound"/>
    } 

  return (
    <div>
      POST
      <button onClick={onClickbtn}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello World</h1>}  />
      </Routes>
    </div>
  )
}
