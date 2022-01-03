import React from 'react'


function User({user}) {
    return (
        <table className='table table-bordered'>
            <thead >
                <tr>
                    <th scope='col'>Sl no.</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>First name</th>
                    <th scope='col'>Last name</th>
                    <th scope='col'>Password</th>
</tr>
</thead>
<tbody>
    <tr>
        <th scope='row'>1</th>

            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.password}</td>
        </tr>
        </tbody>
        </table>
        
    )
}

export default User
