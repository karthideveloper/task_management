import React, { useState, useEffect } from 'react';

const AdminForm = (props) => {
    const initialFieldValues = {
        projectName: '',
        projectId: '',
       
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
                   
            </div>
            <div className="form-row">

            <div className="form-group input-group col-md-12">
                    <div className="input-group-prepend">
                        <h4>Project Upload</h4>
                    </div>

                    
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa fa-tasks"></i>
                        </div>
                    </div>

                    <input className="form-control" name="projectId" placeholder="Project Id"
                        value={values.projectId}
                        onChange={handleInputChange}
                    />
                </div>
             
            </div>
            <div className="form-group">
            {/*instead of this input use textarea - issue with my syntax highlighter */}
               <input className="form-control" name="projectName" placeholder="Project Name"
                    value={values.projectName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default AdminForm;