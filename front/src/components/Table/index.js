import React, {useContext} from 'react';
import {CrudContext} from "../Crud"
function Table() {


  const {list,setKey,setList} = useContext(CrudContext);

  function Delete (key){
    let newData = [...list];
    newData.splice(key, 1);
    setList(newData);
  }

  return (
      <table>

        <thead>

        <tr>
            <th>
                Name
            </th>
        </tr>

        </thead>

        <tbody>
            {list.map((name,i) => {
                return (
                    <tr key={i}>
                        <td>
                            {name}
                        </td>
                        <td>
                            <button
                            onClick={() => setKey(i)}
                            >Update</button>
                        </td>
                        <td>
                            <button
                            onClick={() => Delete(i)}
                            >Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
        
          
      </table>
  )
}

export default Table;
