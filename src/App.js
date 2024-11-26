import React,{useState,useEffect} from 'react';
import User from './components/User';
import { useNavigate } from 'react-router-dom'
function App() { 
    const navigate = useNavigate();
    const[add,setAdd]=useState(true);
    useEffect(()=>{if (localStorage.getItem("userRole") !== "admin" || !localStorage.getItem("userRole")) {
        return navigate('/admin/dashboard/restrict');
      }},[]);
     const cH=()=>{
        setAdd(!add);
     }

  const data = [
    {
        id: 1,
        name: "Katherine Walsh",
        email: "jackwarren@hotmail.com",
        permission: "Read,Write",
        role: "User",
        status:"Active"
    },
    {
        id: 2,
        name: "Teresa Watkins",
        email: "hardinjennifer@sanders-diaz.com",
        permission: "Read,Write",
        role: "User",
        status:"Active"
    },
    {
        id: 3,
        name: "Samantha Williams",
        email: "lauraharris@nelson.com",
        permission: "Read,Write,Delete",
        role: "User",
        status:"Active"
    },
    {
        id: 4,
        name: "Brian Thompson",
        email: "melissa12@mclaughlin.com",
        permission: "Read,Write",
        role: "User",
        status:"Active"
    },
    {
        id: 5,
        name: "William Holt",
        email: "grayjeffrey@yahoo.com",
        permission: "Read,Write,Delete",
        role: "User",
        status:"Active"
    },
    {
        id: 6,
        name: "Lisa Martinez",
        email: "sara02@ingram.com",
        permission: "Read,Write",
        role: "User",
        status:"Inactive"
    },
    {
        id: 7,
        name: "Yvonne Wiley",
        email: "nicholasanderson@moon-price.com",
        permission: "Read,Write,Delete",
        role: "Admin",status:"Active"
    },
    {
        id: 8,
        name: "Sandra Hunter",
        email: "valdezrobert@gmail.com",
        permission: "Read,Write",
        role: "User",status:"Inactive"
    },
    {
        id: 9,
        name: "Jessica Green",
        email: "stephanie40@adams-monroe.com",
        permission: "Read,Write",
        role: "User",status:"Active"
    },
    {
        id: 10,
        name: "David Savage",
        email: "tinamendoza@martin-mccann.com",
        permission: "Read,Write",
        role: "User",status:"Inactive"
    },
    {
        id: 11,
        name: "Robert Simmons",
        email: "alexander84@hotmail.com",
        permission: "Read,Write,Delete",
        role: "User",status:"Active"
    },
    {
        id: 12,
        name: "Angela Wilson",
        email: "jasonanderson@mcdowell.com",
        permission: "Read,Write",
        role: "User",status:"Inactive"
    },
    {
        id: 13,
        name: "Denise Harvey",
        email: "kyle37@hotmail.com",
        permission: "Read,Write",
        role: "User",status:"Active"
    },
    {
        id: 14,
        name: "Julie Hahn",
        email: "ronniemack@shepherd-hicks.com",
        permission: "Read,Write",
        role: "User",status:"Inactive"
    },
    {
        id: 15,
        name: "Brad Black",
        email: "jameschristine@hotmail.com",
        permission: "Read,Write",
        role: "User",status:"Active"
    }    
]


return(
    
  <div>
    <div className='hd' hidden={add} > 
        
        <h3 className='dashHead'>Add User</h3>
        <div className='us'>
        <label><input type='email' name='email' placeholder='email' required/></label>
        <label><input type='text' name='name' placeholder='name' required/></label>
        <label><input type='checkbox' value='Read'/>Read<input type='checkbox' value='Write'/>Write<input type='checkbox' value='Delete'/>Delete</label> 
        <label><select className='drop'>
            <option value='User'>User</option>
            <option value='Admin'>Admin</option>
        </select></label>
        <label><input type='submit' className='Sub' value='Add' onClick={()=>alert("New User will be Added Soon")}/></label></div></div>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  <h2 className='dashHead'>DashBoard : </h2>
  <div className='us'> 
  <table>
      <tr><th>Id :</th><td></td><th>Name :</th><th>Email :</th><th>Permission : </th><th>Role :</th><th>Status :</th><th><label onClick={()=>cH()}><i class="material-icons" >add</i></label></th></tr>
      <tbody>
      {data.map((user)=><User id={user.id} name={user.name} email={user.email} permission={user.permission} role={user.role} status={user.status}/>)}
      </tbody>
      </table>    
  </div>
  
  </div>
  
    

)

}

export default App;
