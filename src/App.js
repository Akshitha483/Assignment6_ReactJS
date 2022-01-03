import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import UserTable from './components/UserTable';

function App() {
  const [userFormData, setuserFormData] = useState([])
  let getUserData=(userData)=>{

    const userFormDataCopy=[...userFormData]

    userFormDataCopy.push(userData)
    
    setuserFormData(userFormDataCopy)
  }
  return (
    <div className="App">
      <UserForm getUserData={getUserData}/>
      <UserTable userFormData={userFormData}/>
    </div>
  );
}

export default App;
