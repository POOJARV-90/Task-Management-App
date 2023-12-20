import React from 'react'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        
        <div className='container'>
            <h1>ORGANIZE YOUR WORK <br /> let"s go</h1>
            <p>Amateurs sit and wait for inspiration, <br />the rest of us just get up and go to work....' <br /> <b>- Stephen King</b></p>
            <button className='home-button'>CREATE YOUR LIST</button>
        </div>
       
    </div>
  )
}

export default Home