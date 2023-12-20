import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div className='sidebarr d-flex flex-column ' style={{width:'100%',zIndex:'5'}}>
        <div className='mt-4 rounded d-flex flex-column shadow justify-content-center align-items-center w-100' style={{height:'130px'}}>
            <div className='mt-4 d-flex-justify-content-center'> <img src="https://th.bing.com/th/id/OIP.m3GfJuIbiEIwlHe1GzN4vQHaLH?w=800&h=1200&rs=1&pid=ImgDetMain" style={{width:'50px',height:'50px',borderRadius:'50%'}} alt="" /></div>
            <div className='fw-bolder d-flex justify-content-center w-100'>Tovino Thomas </div>
            <div className='mb-2 d-flex justify-content-center w-100'>tovino@gmail.com</div>
        </div>
        <div className='d-flex flex-column'>
          <div className='mt-5' style={{width:'100%',height:'50px'}}> <button className='btn btn-outline-info shadow' style={{width:'100%'}}><i className="fa-solid fa-border-all me-2"></i>Dashboard</button></div>
          <div className='' style={{width:'100%',height:'50px'}}> <button className='btn btn-outline-info shadow' style={{width:'100%'}}><i className="fa-solid fa-coins me-2"></i>Perks</button></div>
          <div className='' style={{width:'100%',height:'50px'}}> <button className='btn btn-outline-info shadow' style={{width:'100%'}}><i className="fa-solid fa-puzzle-piece me-2"></i>Addons</button></div>
          <div className='' style={{width:'100%',height:'50px'}}> <button className='btn btn-outline-info shadow' style={{width:'100%'}}><i className="fa-solid fa-circle-question me-2"></i>FAQ</button></div>
          <div className='' style={{width:'100%',height:'50px'}}> <button className='btn btn-outline-info shadow' style={{width:'100%'}}><i class="fa-solid fa-headset me-2"></i>Spport</button></div>


          <div className='d-flex justify-content-center' style={{marginTop:'150px'}}> <p className='text-info' style={{}}><i className="fa-solid fa-power-off me-2"></i>Logout</p></div>


        </div>
    </div>
  )
}

export default Sidebar