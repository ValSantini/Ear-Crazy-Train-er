import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

const BodyContainer = () => {
  return (
    <div
        className="body-container"
    >
        <Child1 />
        <Child2 />
        <Child3 />
    </div>
  )
}

export default BodyContainer