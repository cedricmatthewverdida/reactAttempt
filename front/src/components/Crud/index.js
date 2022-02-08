import React, { useState, createContext,useEffect } from 'react';

import Form from '../Form';
import Table from '../Table'
export const CrudContext = createContext(null)

function Crud (){

    const [init,setInit] = useState(true);

    const [currentKey,setKey] = useState(undefined);
    const [name,setName] = useState("")
    const [list,setList] = useState([])
    const [action,setAction] = useState("Create")

    function fetchData(){

        if(localStorage.getItem("name") != null){
            setList(JSON.parse(localStorage.getItem("name")))
            console.log(JSON.parse(localStorage.getItem("name")));
        }

    }

    useEffect(() => {

        fetchData();
        // localStorage.setItem("name",JSON.stringify(list));

        

    },[]);


    useEffect(() => {

        localStorage.setItem("name",JSON.stringify(list));

        

    },[list]);

    useEffect(() => {

        const active = list[currentKey]

        if(currentKey != undefined){
            setName(list[currentKey]);
            setAction("Update")
        }



    },[currentKey]);

    return (
        <CrudContext.Provider value={{
            currentKey,
            name,
            action,
            list,
            setAction,
            setList,
            setName,
            setKey
        }}>
            <Form/>
            <Table/>
        </CrudContext.Provider>
    )
}



export default Crud;
