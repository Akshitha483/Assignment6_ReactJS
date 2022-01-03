import React from 'react'
import User from './User'

function UserTable({userFormData}) {
    return (
        <div>
            {
                userFormData.map((user,idx)=>{
                    
                    return <User key={idx} user={user}/>
                   
                })
            }
           </div>
     
    )
}

export default UserTable
