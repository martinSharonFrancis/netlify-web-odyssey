import React, { useEffect } from 'react'

type HeaderClientProps = {
  name: string;
}
function Client({name}: HeaderClientProps) {
  useEffect(()=>{
    console.log("wrking this log");
    
    if(name){
      alert(name);
    }
  }, [name])
  return (
    <div>client {name}</div>
  )
}

export default Client