import React, { useState, useEffect } from 'react';
import AdminForm from "../Component/AdminForm";
import firebaseDb from "../Firebase";
import projectData from "../Data/projectData.json"

const Admin = (props) => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        firebaseDb.child('Admin').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])


    const addOrEdit = (obj) => {

        // alert('hai');
        // console.log(currentId)
        if (currentId == '')
            firebaseDb.child('todos').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                        // console.log('error')
                    else
                        setCurrentId('')
                        // console.log('else')
                })
        else
            firebaseDb.child(`todos/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }

    const onDelete = id => {
    if (window.confirm('Are you sure to delete this record?')) {
        firebaseDb.child(`Admin/${id}`).remove(
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    }
}


  return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Task Manager</h1>
                    <h6 className="text-center">Admin Panel</h6>
                    <input type="submit" value= "Logout" className="btn btn-primary btn-block col-md-1" onClick={props.Logout}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <AdminForm {...({ currentId, contactObjects, addOrEdit })} ></AdminForm>
                </div>
                <div className="col-md-6 offset-md-1">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Project Id</th>
                                <th>Project Name</th>
                            </tr>
                            <tr>
                                <td>{projectData.projects[0].projectId}</td>
                                <td>{projectData.projects[0].projectName}</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].projectId}</td>
                                        <td>{contactObjects[key].projectName}</td>
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Admin;