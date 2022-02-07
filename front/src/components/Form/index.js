

import React, { useState,useEffect } from 'react';
function Form() {

    const [name,setName] = useState("")
    const [role,setRole] = useState("")
    const [proceed,setProceed] = useState(false)

    useEffect(() => {
        return name != "" && role != "" ? setProceed(true) : setProceed(false);
    },[name, role]);


    return (
        <div>

<h1 className="text-3xl font-bold underline text-tahiti">
      Hello world!
    </h1>



            <input
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                type="name"
            />

            <input
                value={role}
                onChange={(e) => {setRole(e.target.value)}}
                type="name"
            />


            <button
            className="bg-midnight"
            disabled={!proceed ? true : false}
            >
                Test Button
            </button>

        </div>
      )
}

export default Form;
