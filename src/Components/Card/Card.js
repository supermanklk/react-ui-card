import React from 'react'
import './index.css'
const defaultImg = 'http://faith-2021-001.oss-cn-hangzhou.aliyuncs.com/20211207/1638868600827311.svg'
const Card= (props) => {
  console.log('faith=============', props);
  return (
    <div className="wrap">
      <div className="card">
        <div className="front">{props?.front}
          <div className='front-wrap'>
            <img className='front-img' src= {props.src ? props.src : defaultImg} alt='' />
          </div>

        </div>
        <div className="back">{props?.back}</div>
      </div>
    </div>
  )
}

export default Card
