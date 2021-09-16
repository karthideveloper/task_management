import React, { useState, useEffect } from 'react';

const DeveloperForm = (props) => {
    const initialFieldValues = {
        projectId: '',
        projectName: '',
        taskId: '',
        taskName: '',
        assignedTo:'',
        status:''
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <h4>Developer Upload</h4>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-tasks"></i>
                        </div>
                    </div>

                    <input className="form-control" name="projectId" placeholder="Project Id"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
        
            </div>
            <div className="form-group">
           
               <input className="form-control" name="projectName" placeholder="Project Name"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-tasks"></i>
                        </div>
                    </div>

                    <input className="form-control" name="taskId" placeholder="Task Id"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
        
            </div>

            <div className="form-group">
               <input className="form-control" name="taskName" placeholder="Task Name"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
               <input className="form-control" name="assignedTo" placeholder="assignedTo"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
            <select class="form-control" name="status">
                <option selected>Open this select menu</option>
                <option value="Start">Start</option>
                <option value="End">End</option>
                <option value="Completed">Completed</option>
               
            </select>
            </div>

            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default DeveloperForm;