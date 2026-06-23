import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    listEmployees,
    deleteEmployee
} from "../services/EmployeeService";

function ListEmployeeComponent() {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function addNewEmployee() {
        navigator('/add-employee');
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id) {
        deleteEmployee(id)
            .then(() => {
                getAllEmployees();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="container glass-container">
            <div className="glass-card">

            <h2 className="page-tittle">
                List of Employees
            </h2>

            <button
                className="btn btn-primary mb-2"
                onClick={addNewEmployee}
            >
                Add Employee
            </button>
             
            <div className="table-responsive">
            <table className="table table-bordered table-striped">

                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>

                {
                    employees.map(employee =>

                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>

                            <td>

                                <button
                                    className="btn btn-info"
                                    onClick={() =>
                                        updateEmployee(employee.id)
                                    }
                                >
                                    Update
                                </button>

                                <button
                                    className="btn btn-danger ms-2"
                                    onClick={() =>
                                        removeEmployee(employee.id)
                                    }
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>
                    )
                }

                </tbody>

            </table>
            </div>
           </div>
        </div>
    );
}

export default ListEmployeeComponent;