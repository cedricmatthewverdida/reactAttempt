import React, { useState,useEffect } from 'react';

const Table = ({test}) => {


const [count,setCount] = useState("");
const [password,setPassword] = useState(5);


// useEffect(() => {
//   console.log(count);
// },[email, password]);

// useEffect(() => {
//   first;

//   return () => {
//     setPassword(0);
//   };
// }, [third]);


function Pressme(){
    setCount(count + 1)
}

  return (
    <div>
        <button onClick={() => Pressme()} >{count}</button>
    </div>
  );
};

export default Table;