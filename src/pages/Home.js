import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import "./Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [table, setTable] = useState("");

    const loadData = async () => {
        const response = await axios.get(`https://server-commit.herokuapp.com//api/get/${table}`);
        setData(response.data);
    };

    loadData();

    const deleteContact = (table, info) => {
        if(window.confirm("Are you sure to delete?")){
            axios.delete(`https://server-commit.herokuapp.com//api/remove/${table}/${info}`);
            toast.success("Data is deleted");
            setTimeout(() => loadData(), 300);
        }   
    };

    const handleTable = () => {

        return(
            <><table className="styled-table" style={{
                display: table === "DiseaseType" ? '' : 'none',
            }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Link to={`/update/${table}/${item.id}`}>
                                        <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => deleteContact(table, item.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> 
            <table className="styled-table" style={{
                display: table === "Disease" ? '' : 'none',
             }}>
                    <thead>
                        <tr>
                            <th>Disease_code</th>
                            <th>Pathogen</th>
                            <th>Description</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.disease_code}>
                                    <td>{item.disease_code}</td>
                                    <td>{item.pathogen}</td>
                                    <td>{item.description}</td>
                                    <td>{item.id}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.disease_code}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.disease_code)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table> 
                <table className="styled-table" style={{
                        display: table === "Discover" ? '' : 'none',
                 }}>
                    <thead>
                        <tr>
                            <th>Disease_code</th>
                            <th>Country</th>
                            <th>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.disease_code}>
                                    <td>{item.disease_code}</td>
                                    <td>{item.cname}</td>
                                    <td>{item.first_enc_date}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.disease_code}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.disease_code)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table className="styled-table" style={{
                        display: table === "Country" ? '' : 'none',
                 }}>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.cname}>
                                    <td>{item.cname}</td>
                                    <td>{item.population}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.cname}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.cname)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table className="styled-table" style={{
                        display: table === "Users" ? '' : 'none',
                 }}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Salary</th>
                            <th>Phone</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.email}>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.cname}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.email}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.email)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table className="styled-table" style={{
                        display: table === "PublicServant" ? '' : 'none',
                 }}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.email}>
                                    <td>{item.email}</td>
                                    <td>{item.department}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.email}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.email)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table className="styled-table" style={{
                        display: table === "Doctor" ? '' : 'none',
                 }}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Degree</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.email}>
                                    <td>{item.email}</td>
                                    <td>{item.degree}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.email}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.email)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table className="styled-table" style={{
                        display: table === "Specialize" ? '' : 'none',
                 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.email}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.email}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.email)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table className="styled-table" style={{
                        display: table === "Record" ? '' : 'none',
                 }}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Disease Code</th>
                            <th>Total Deaths</th>
                            <th>Total Patients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.email}>
                                    <td>{item.email}</td>
                                    <td>{item.cname}</td>
                                    <td>{item.disease_code}</td>
                                    <td>{item.total_deaths}</td>
                                    <td>{item.total_patients}</td>
                                    <td>
                                        <Link to={`/update/${table}/${item.email}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => deleteContact(table, item.email)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </>
            
        )
    }

    return (
            <div>
                <label>Choose a Table:</label>
                <select onChange={(e)=>{setTable(e.target.value)}} value = {table}>
                    <option value="">Select</option>
                    <option value="DiseaseType">DiseaseType</option>
                    <option value="Disease">Disease</option>
                    <option value="Country">Country</option>
                    <option value="Discover">Discover</option>
                    <option value="Users">Users</option>
                    <option value="PublicServant">PublicServant</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Specialize">Specialize</option>
                    <option value="Record">Record</option>
                </select>

                <br></br>
                <Link to="/addContact">            
                    <button className = "btn btn-contact">Add New User</button>
                </Link>
                {handleTable()}
            </div>
    )
}
export default Home;

