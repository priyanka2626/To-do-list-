import React, { useEffect } from 'react';
const Divstyle = {
  backgroundColor: '#483c3c45',
  marginLeft: '560px',
  marginRight: '560px',
  marginTop: '10px',
   wordWrap: 'break-word' 
};

var List=(props)=>{
    useEffect(()=>{
        console.log("i am useeffect")
        setTimeout(()=>{
            alert("useeffect")
        },1000) ;
    },[]);
    console.log("rendering")
	return <div><div onClick={props.click} style={Divstyle}>{props.name}</div></div>
}

export default List;