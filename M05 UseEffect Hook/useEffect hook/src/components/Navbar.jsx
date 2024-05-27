import React, { useState, useEffect } from 'react'


const Navbar = ({color}) => {
  const [first, setFirst] = useState(0)
// case - 1 (run on every render)
  useEffect(() => {
    alert("welcome")
  })

// case - 2  (run only when certain value change i.e., count)
  useEffect(() => {
    alert("welcome to the first")
  }, [first])

  //  case - 3 (run oly when certain value change i.e., color)
  useEffect(() => {
    alert("color is changed")
  }, [color])
  return (
    <div>
      I am navbar of {color} color broo...
    </div>
  )
}



export default Navbar;