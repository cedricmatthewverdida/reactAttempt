
import React, { useContext,useEffect, useState  } from 'react';
import {CrudContext} from "../Crud"
function Form() {

    const {name,list,setName,setList,action,setAction,currentKey,setKey} = useContext(CrudContext);

    const [proceed,setProceed] = useState(false);

    
    useEffect(() => {
        return name.trim() !== "" ? setProceed(true) : setProceed(false)
    },[name,list]);


    function Action (){
        
        if(action === "Create"){
            setList(list => [...list, name])
        }
        
        if(action === "Update"){
            let newData = [...list];
            newData[currentKey]= name
            setList(newData);
            setAction("Create")
            setKey(undefined);
        }


    }
    


    return (
        <div>

            <input
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                type="name"
                placeholder="Name"
            />


            <button
            onClick={() => Action()}
            disabled={!proceed ? true : false}
            >
                {action}
            </button>

        </div>
      )
}

export default Form;
