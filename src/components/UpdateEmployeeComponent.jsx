import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getEmployee,
    updateEmployee
} from "../services/EmployeeService";

function UpdateEmployeeComponent() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        getEmployee(id)
            .then((response) => {
                setFirstname(response.data.firstname);
                setLastname(response.data.lastname);
                setEmail(response.data.email);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    function saveOrUpdateEmployee(e) {

        e.preventDefault();

        const employee = {
            firstname,
            lastname,
            email
        };

        updateEmployee(id, employee)
            .then(() => {
                navigator('/employees');
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <br />

            <div className="row">
                <div className="glass-card col-md-8 offset-md-2">

                    <h2 className="page-title">
                        Update Employee
                    </h2>

                    <div className="card-body">

                        <form>

                            <div className="form-group mb-2">
                                <label className="form-label">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstname}
                                    onChange={(e) =>
                                        setFirstname(e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastname}
                                    onChange={(e) =>
                                        setLastname(e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                            </div>

                            <div className="text-center">
                            <button type="button" className="btn btn-warning px-4" onClick={saveOrUpdateEmployee}>
                            Update
                           </button>
                           
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;