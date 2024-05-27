// // // 1) Count the clicks
// import { useRef, useState } from 'react'
// import './App.css'

// export default function Click() {
//   let ref = useRef(0);
//   function countClick () {
//     ref.current = ref.current + 1;
//     alert("You Click "  + ref.current + " times");

//   } 
//   return(
//     <button onClick={countClick}>
//       Click here
//     </button>
//   )
// }

// 2) Focus on the input

// function focus() {
//   let inputRef = useRef(null);
//   function handleInp () {
//     inputRef.current.focus(); 
//   }
//   return(
//     <>
//     <input ref={handleInp}/>
//     <button onClick={handleInp}>
//       Click to Focus 
//     </button>
//     </>
//   )
// }

// export default focus();

