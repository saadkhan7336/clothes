import CountUp from 'react-countup'
import './Hero.css'
import { jacketsData } from '../../constants'
import JacketCard from '../../components/JacketCard'
import { useState } from 'react'
import jacket1 from '../../../public/jacket1.png'
const Hero = () => {
  const [jacketImg,setjacketImg] =useState(jacket1)
  return (
<section id="hero">
  <div className="hero-container container">
    <div className="hero-left">
      <h1>Finding Your Perfect Items</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint et dolorem explicabo culpa, voluptatum tempora? Quibusdam repudiandae eveniet facere id voluptates quas soluta, cumque quis, corporis dignissimos eos similique incidunt!</p>
      <button className="btn">Shop Now</button>
      <div className="hero-stats">
        <div className="stat-box">
           <span>
            <CountUp start={100} end={500} duration={5}/>
            <p>+</p>
           </span>
           <span>Products</span>
        </div>
        <div className="stat-box">
           <span>
            <CountUp start={50} end={300} duration={5}/>
            <p>+</p>
           </span>
           <span>Brands</span>
        </div>
        <div className="stat-box">
           <span>
            <CountUp start={1000} end={99990} duration={5}/>
            <p>+</p>
           </span>
           <span>Customers</span>
        </div>
      </div>
    </div>
    <div className="hero-right">
      <img src={jacketImg}  />
      <div className="hero-right-container">
        {
          jacketsData.map((jacket,i)=>(
            <div key={i}>
              <JacketCard
              imgURL={jacket}
              changeJacketImage={(jacket)=> setjacketImg(jacket)}
              jacketImg={jacketImg}
              />
            </div>
          ))
        }
      </div>
    </div>
  </div>
  </section>  )
}

export default Hero