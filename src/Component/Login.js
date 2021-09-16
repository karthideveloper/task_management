import React, { useState, useEffect } from 'react';
import Admin from './Admin';
import Developer from './Developer';
import Manager from './Manager';



    


const Login = () => {
    
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

    const Logout=()=>{
        setusertype('')
    }

    

    return (
<div>
    {usertype=='' && <form autoComplete="off" className="col-md-6 offset-md-3" onSubmit={handleFormSubmit}> 
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
                    <input className="form-control" name="userName"  placeholder="UserName" onChange={e=>setusername(e.target.value)}/>
                </div>
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-eye"></i>
                        </div>
                    </div>
                    <input className="form-control" name="password" type="password" placeholder="Password" onChange={e=>setpassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value= "Login" className="btn btn-primary btn-block" />
            </div>
        </form> }
    {usertype=='admin'&& <Admin Logout={Logout}/>}
    {usertype=='manager'&& <Manager Logout={Logout}/>}
    {usertype=='developer'&& <Developer Logout={Logout}/>}
        </div>           
       
    );
}

export default Login;