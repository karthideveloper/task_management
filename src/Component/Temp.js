import React, { useState, useEffect } from 'react';
import Admin from './Admin';
import Developer from './Developer';
import Manager from './Manager';


const Authentication=()=>
{
    
}


const Temp = () => {
    
   const [username,setusername]=useState('')
   const [password, setpassword] = useState('')
   const [usertype, setusertype] = useState('')

    const handleFormSubmit = () => {
       if(username=="admin" && password=="admin")
       {
            setusertype('admin')
       }
       else if(username=="manager" && password=="manager")
       {
            setusertype('manager')
       }
       else if(username=="developer" && password=="developer")
       {
            setusertype('developer')
       }
    }

    const Authentication=(props)=>{
        return(
            <form autoComplete="off" className="col-md-6 offset-md-3" onSubmit={props.handleFormSubmit}> 
            <div className="form-row ">
            <div className="form-group input-group ">
                    <div className="input-group-prepend ">
                        <h4 className="text-center">Login</h4>
                    </div>
                </div>
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" name="userName" value={username} placeholder="UserName" onChange={e=>props.setusername(...username,e.target.value)}/>
                </div>
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-eye"></i>
                        </div>
                    </div>
                    <input className="form-control" name="password" placeholder="Password" onChange={e=>props.setpassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value= "Login" className="btn btn-primary btn-block" />
            </div>
        </form> 
        )
    }

    return (
<div>
    {usertype=='' && <Authentication setusername={setusername} setpassword={setpassword} handleFormSubmit={handleFormSubmit}/>}
    {usertype=='admin'&& <Admin/>}
    {usertype=='manager'&& <Manager/>}
    {usertype=='developer'&& <Developer/>}
        </div>           
       
    );
}

export default Temp;