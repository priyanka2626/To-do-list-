import React from 'react';
const Divstyle = {
  backgroundColor: '#483c3c45',
  marginLeft: '560px',
  marginRight: '560px',
  marginTop: '10px'
  
};


var list=(props)=>{
	return <div><div onClick={props.click} style={Divstyle}>{props.name}</div></div>
}

export default list;