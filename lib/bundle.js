import React from 'react';

var Switch = function Switch() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red',
      background: 'yellow'
    }
  }, "switch") // <div style={{ color: 'red' }} >Switch</div>
  ;
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".flip-container {\n    /*perspective:1000px;*/\n}\n.flip-container:hover .flipper {\n    transform:rotateY(180deg);\n}\n.flip-container,.front,.back {\n    width:320px;\n    height:480px;\n}\n.flipper {\n    transition:.3s;\n    transform-style:preserve-3d;\n    position:relative;\n}\n.front,.back {\n    position:absolute;\n}\n.back {\n    transform:rotateY(180deg);\n}\n";
styleInject(css_248z);

var Card = function Card(props) {
  console.log('faith=============', props);
  return (
    /*#__PURE__*/
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
    React.createElement("div", {
      className: "zhangbin",
      style: {
        margin: '5px',
        border: '1px solid #dadce0',
        display: 'inline-block',
        background: 'white',
        borderRadius: '5px',
        minWidth: 100,
        minHeight: 50
      }
    }, props.children)
  );
};

export { Card, Switch };
