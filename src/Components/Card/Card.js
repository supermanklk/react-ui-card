import React from 'react'
import './index.css'
const Card= (props) => {
  console.log('faith=============', props);

  return (
    // <div  className="flip-container">
    //   {/*<div className="flipper">*/}
    //   {/*  <div className="front" style={{ background: 'red' }} >*/}
    //   {/*    <p>正面12</p>*/}
    //   {/*  </div>*/}
    //   {/*  <div className="back" style={{ background: 'yellow' }} >*/}
    //   {/*    <p>背面</p>*/}
    //   {/*  </div>*/}
    //   {/*</div>*/}
    // </div>
    <div  className="zhangbin" style={{ margin: '5px', border: '1px solid #dadce0', display: 'inline-block', background: 'white', borderRadius: '5px', minWidth: 100, minHeight: 50 }} >{props.children}</div>
  )
}

export default Card
