import React, { useEffect } from 'react'

type HeaderClientProps = {
  name: string;
}
function Client({name}: HeaderClientProps) {  
  return (
    <div>client {name}</div>
  )
}

export default Client