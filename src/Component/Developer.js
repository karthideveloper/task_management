import React, { useState, useEffect } from 'react';
import DeveloperForm from "./DeveloperForm";
import firebaseDb from "../Firebase";
import projectData from "../Data/projectData.json"

const Developer = (props) => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        firebaseDb.child('Developer').on('value', snapshot => {
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
        firebaseDb.child(`Developer/${id}`).remove(
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
                    <h6 className="text-center">Developer Panel</h6>
                    <input type="submit" value= "Logout" className="btn btn-primary btn-block col-md-1" onClick={props.Logout}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <DeveloperForm {...({ currentId, contactObjects, addOrEdit })} ></DeveloperForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>P_ID</th>
                                <th>P_Name</th>
                                <th>T_ID</th>
                                <th>T_Name</th>
                                <th>Dev_Name</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>{projectData.projects[0].projectId}</td>
                                <td>{projectData.projects[0].projectName}</td>
                                <td>{projectData.projects[0].task[0].taskId}</td>
                                <td>{projectData.projects[0].task[0].taskName}</td>
                                <td>{projectData.projects[0].task[0].allocateTo}</td>
                                <td>started</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].fullName}</td>
                                        <td>{contactObjects[key].mobile}</td>
                                        <td>{contactObjects[key].email}</td>
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

export default Developer;