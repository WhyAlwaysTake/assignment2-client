import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom';
import './AddEdit.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    id: "", description: "", cname: "", population: "", disease_code: "",
    pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
    phone: "", department: "", degree: "", total_deaths: "", total_patients: "",
}
const Edit = () =>  {
        const [state, setState] = useState(initialState)
        const {id, description, cname, population, disease_code, pathogen, first_enc_date, email,name, surname, salary, phone, department, degree, total_deaths, total_patients} = state;
        const navigate = useNavigate();

        const {table, info} = useParams();

        useEffect(() => {
            axios.get(`http://localhost:4000/api/get/${table}/${info}`)
                 .then((resp) => setState({...resp.data[0]}));
                 console.log(table, info);
        }, [table, info]);

        const handleEdit = (e) => {
            e.preventDefault();
            if(table === "DiseaseType"){
                if(description === ""){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/DiseaseType/${info}`, {description,})
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }
            else if(table === "Country"){
                if(!population){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/Country/${info}`, {
                        population,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }
            else if(table === "Disease"){
                if(!pathogen || !description || !id){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/Disease/${info}`, {
                        pathogen, description, id,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }
            else if(table === "Discover"){
                if(!cname || !first_enc_date){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/Discover/${info}`, {
                        cname, first_enc_date,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }

            else if(table === "Users"){
                if(!name || !surname || !salary || !phone || !cname){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/Users/${info}`, {
                        name, surname, salary, phone, cname,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }

            else if(table === "PublicServant"){
                if(!department){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/PublicServant/${info}`, {
                        department,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }

            else if(table === "Doctor"){
                if(!degree){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/Doctor/${info}`, {
                        degree,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }

            else if(table === "Specialize"){
                if(!id){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/Specialize/${info}`, {
                        email,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }

            else if(table === "Record"){
                if(!cname || !disease_code || !total_deaths || !total_patients){
                    toast.error("Empty values!");
                }
                else{
                    axios.put(`http://localhost:4000/api/put/Record/${info}`, {
                        cname, disease_code, total_deaths, total_patients,
                    })
                    .then(()=> {
                        setState({  id: "", description: "", cname: "", population: "", disease_code: "",
                        pathogen: "", first_enc_date:"", email: "", name: "", surname: "", salary: "",
                        phone: "", department: "", degree: "", total_deaths: "", total_patients: "",})
                    })   
                    .catch((err) => toast.error(err.response.data));
                    toast.success("Success");
                    setTimeout(() => navigate("/"), 300);
                }
            }
        };

        const handleInputChange = (e) => {
            const {name, value} = e.target;
            setState({...state, [name]: value});
        };

        const handleForm = () => {
            return (

            <>
                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "DiseaseType" ? '' : 'none', }} onSubmit={handleEdit}>
                    <label htmlFor='description'>Description</label>
                    <input type="text" id="description" name="description" placeholder='description' value={description} onChange={handleInputChange} />
                    <input type="submit" value="Save" />
                    <Link to = "/">
                            <input type = "button" value="Go Back"/>
                    </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "Country" ? '' : 'none', }} onSubmit={handleEdit}>
                    <label htmlFor='population'>Population</label>
                    <input type="number" id="population" name="population" placeholder='Population' value={population} onChange={handleInputChange} />
                    <input type="submit" value="Save" />
                    <Link to = "/">
                        <input type = "button" value="Go Back"/>
                    </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "Disease" ? '' : 'none', }} onSubmit={handleEdit}>
                    <label htmlFor='population'>Pathogen</label>
                    <input type="text" id="pathogen" name="pathogen" placeholder='Pathogen' value={pathogen} onChange={handleInputChange} />
                    <label htmlFor='population'>Description</label>
                    <input type="text" id="description" name="description" placeholder='Description' value={description} onChange={handleInputChange} />
                    <label htmlFor='population'>ID</label>
                    <input type="number" id="id" name="id" placeholder='ID' value={id} onChange={handleInputChange} />
                    <input type="submit" value="Save" />
                    <Link to = "/">
                        <input type = "button" value="Go Back"/>
                    </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "Discover" ? '' : 'none', }} onSubmit={handleEdit}>
                    <label htmlFor='cname'>Country</label>
                    <input type="text" id="cname" name="cname" placeholder='Country' value={cname} onChange={handleInputChange} />
                    <label htmlFor='cname'>History(Date)</label>
                    <input type="date" id="first_enc_date" name="first_enc_date" placeholder='History(Date)' value={first_enc_date} onChange={handleInputChange} />
                    <input type="submit" value="Save" />
                    <Link to = "/">
                        <input type = "button" value="Go Back"/>
                    </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "Users" ? '' : 'none', }} onSubmit={handleEdit}>
                        <label htmlFor='name'>Name</label>
                        <input type="text" id="name" name="name" placeholder='Name' value={name} onChange={handleInputChange} />
                        <label htmlFor='surname'>Surname</label>
                        <input type="text" id="surname" name="surname" placeholder='Surname' value={surname} onChange={handleInputChange} />
                        <label htmlFor='salary'>Salary</label>
                        <input type="number" id="salary" name="salary" placeholder='Salary' value={salary} onChange={handleInputChange} />
                        <label htmlFor='phone'>Phone</label>
                        <input type="number" id="phone" name="phone" placeholder='Phone' value={phone} onChange={handleInputChange} />
                        <label htmlFor='cname'>Country</label>
                        <input type="text" id="cname" name="cname" placeholder='Country' value={cname} onChange={handleInputChange} />
                        <input type="submit" value="Save" />
                        <Link to = "/">
                            <input type = "button" value="Go Back"/>
                         </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "PublicServant" ? '' : 'none', }} onSubmit={handleEdit}>
                        <label htmlFor='email'>Department</label>
                        <input type="text" id="department" name="department" placeholder='Department' value={department} onChange={handleInputChange} />
                        <input type="submit" value="Save" />
                        <Link to = "/">
                            <input type = "button" value="Go Back"/>
                        </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "Doctor" ? '' : 'none', }} onSubmit={handleEdit}>
                        <label htmlFor='email'>Degree</label>
                        <input type="text" id="degree" name="department" placeholder='Degree' value={degree} onChange={handleInputChange} />
                        <input type="submit" value="Save" />
                        <Link to = "/">
                            <input type = "button" value="Go Back"/>
                        </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "Specialize" ? '' : 'none', }} onSubmit={handleEdit}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' value={email} onChange={handleInputChange} />
                        <input type="submit" value="Save" />
                        <Link to = "/">
                            <input type = "button" value="Go Back"/>
                        </Link> 
                </form>

                <form style={{ maxWidth: "400px", margin: "auto", alignContent: "center", display: table === "Record" ? '' : 'none', }} onSubmit={handleEdit}>
                        <label htmlFor='cname'>Country</label>
                        <input type="text" id="cname" name="cname" placeholder='Country' value={cname} onChange={handleInputChange} />
                        <label htmlFor='disease_code'>Disease Code</label>
                        <input type="text" id="disease_code" name="disease_code" placeholder='Disease code' value={disease_code} onChange={handleInputChange} />
                        <label htmlFor='salary'>Total Deaths</label>
                        <input type="number" id="total_deaths" name="total_deaths" placeholder='Total Deaths' value={total_deaths} onChange={handleInputChange} />
                        <label htmlFor='phone'>Total Patients</label>
                        <input type="number" id="total_patients" name="total_patients" placeholder='Total Patients' value={total_patients} onChange={handleInputChange} />
                        <input type="submit" value="Save" />
                        <Link to = "/">
                            <input type = "button" value="Go Back"/>
                         </Link> 
                </form>

                </>

            )
        }
    return (
        <div>
            {handleForm()}
        </div>
    )
}
export default Edit