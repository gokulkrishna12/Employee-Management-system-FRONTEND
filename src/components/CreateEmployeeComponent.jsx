import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeService";

function CreateEmployeeComponent() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    function saveEmployee(e) {
        e.preventDefault();

        const employee = {
            firstname,
            lastname,
            email
        };

        createEmployee(employee)
            .then((response) => {
                console.log(response.data);
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
                        Add Employee
                    </h2>

                    <div className="card-body">

                        <form>

                            <div className="form-group mb-2">
                                <label className="form-label">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={firstname}
                                    className="form-control"
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
                                    placeholder="Enter Last Name"
                                    value={lastname}
                                    className="form-control"
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
                                    placeholder="Enter Email"
                                    value={email}
                                    className="form-control"
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                            </div>

                          <div className="text-center">
                          <button className="btn btn-success px-4">
                           Submit
                          </button>
                          </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;