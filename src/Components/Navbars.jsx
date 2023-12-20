import React from 'react'

function Navbars() {
  return (
    <div className='bg-light w-100 d-flex justify-content-between' style={{height:'100px'}}>
        <div className='m-2'><img src="https://i.pinimg.com/originals/d8/fc/1b/d8fc1b977f9eacac2940a3372917c75f.png" style={{height:'70px',width:'100px'}} alt="" /></div>
        <div className='m-4 d-flex justify-content-center'>
            <div className='bg-light p-2 rounded me-1 shadow d-flex justify-content-center fw-bolder' style={{height:'50px'}}> <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFBme03Nv7IlQ/company-logo_200_200/0/1643003840160?e=2147483647&v=beta&t=2H1j1k-rUit1thHlvtCAL3QSDUuveqg7K4XoEQBwvzg" alt="" style={{height:'40px',width:'40px',borderRadius:'50%'}} className='me-1'/> <p className='mt-1'>X Y Z Enterprises Pvt.Ltd</p></div>
            <div className='bg-light p-2 rounded fw-bolder shadow d-flex jutify-content-center' style={{height:'50px',width:'30px'}}>^</div>
        </div>
    </div>
  )
}

export default Navbars