import React from "react";
import { useState } from "react";
import {NavLink} from 'react-router-dom'
import '../assets/style.css'


const AddData = ()=>{

    let [state, setState] = useState({
        title : "",image:"",type:[],select1:[],language:[],select2: [],duration: "",certificate: "",date: "",rating: "",schedule: [],role:"",about:"",director:""
    })

    let [genre, setGenre] = useState([])
    let [type , setType] = useState([]);
    let [language , setLanguage] = useState([]);

    const handleInputData = (e) =>{
        var name = e.target.name;
        var value = e.target.value;

        if(name == 'select2' && e.target.checked == false){
            const index = genre.indexOf(e.target.value);
            genre.splice(index,1);
        }
        else if(name == 'select2' && e.target.checked == true){
            genre.push(e.target.value)
        }

        if(name == 'select1' && e.target.checked == false){
            const index = genre.indexOf(e.target.value);
            type.splice(index,1);
        }
        else if(name == 'select1' && e.target.checked == true){
            type.push(e.target.value)
        }

        if(name == 'select' && e.target.checked == false){
            const index = genre.indexOf(e.target.value);
            language.splice(index,1);
        }
        else if(name == 'select' && e.target.checked == true){
            language.push(e.target.value)
        }


        setState({
            ...state,[name] : value,genre,type,language
        })
    }

    const submitData=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3001/movie/",{
                method :"POST",
                body: JSON.stringify(state),
                headers: {
                        "Content-Type": "application/json"
                    }
            }).then(res=>{console.log("Add")
            }).catch(err=>{console.log(err)})
    }

    const loading = (e) =>{
        window.location.reload();
    }

    return(
        <div >
            <h1 className="display-4">Add Movie Data</h1>
        <form method="post"  onSubmit={(e)=>submitData(e)}>
            <table className="border border-3 back-color" align="center">
                <div className="p-3">
                <tr>
                    <td><label>Enter Title</label></td>
                    <td><input type="text" name="title" className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <tr>
                    <td><label>Enter img File</label></td>
                    <td><input type="type" name="image" className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <tr>
                    <td><label>Type</label></td>
                    <td className="form-control text-start">
                        <input type="checkbox" name="select1" value='2D/' onChange={(e)=>handleInputData(e)}/>2D
                        <input type="checkbox" name="select1" value='3D/' onChange={(e)=>handleInputData(e)}/>3D
                        <input type="checkbox" name="select1" value='4D/' onChange={(e)=>handleInputData(e)}/>4D
                        <input type="checkbox" name="select1" value='8D' onChange={(e)=>handleInputData(e)}/>8D
                    </td>
                </tr>
                <tr>
                    <td><label>Language</label></td>
                    <td className="form-control text-start">
                        <input type="checkbox" name="select" value='Hindi/' onChange={(e)=>handleInputData(e)}/>Hindi
                        <input type="checkbox" name="select" value='Gujarati' onChange={(e)=>handleInputData(e)}/>Gujarati
                        <input type="checkbox" name="select" value='English/' onChange={(e)=>handleInputData(e)}/>English
                    </td>
                </tr>
                <tr>
                    <td><label>Genre</label></td>
                    <td className="form-control text-start">
                        <input type="checkbox" name='select2' value='Action/' onChange={(e)=>handleInputData(e)} />Action
                        <input type="checkbox" name='select2' value='Drama/' onChange={(e)=>handleInputData(e)} />Drama
                        <input type="checkbox" name='select2' value='Horror/' onChange={(e)=>handleInputData(e)} />Horror
                        <input type="checkbox" name='select2' value='Romantic' onChange={(e)=>handleInputData(e)} />Romantic
                    </td>
                </tr>
                <tr>
                    <td><label>Duration</label></td>
                    <td><input type="text" name="duration" className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <tr>
                    <td><label>Certificate</label></td>
                    <td><input type="text" name="certificate"className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <tr>
                    <td><label>Release Date</label></td>
                    <td><input type="date" name="date" className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <tr>
                    <td><label>Rating</label></td>
                    <td><input type="text" name="rating" className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <tr>
                    <td><label>Schedule</label></td>
                    <td>
                        <select name="schedule" className="form-control form-select" onChange={(e)=>handleInputData (e)}>
                            <option>In Cinema</option>
                            <option>coming sooon</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label>About Movie</label></td>
                    <td><textarea type="text" name="about" className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <tr>
                    <td><label>Role</label></td>
                    <td>
                        <select name="role" className="form-control" onChange={(e)=>handleInputData (e)}>
                            <option>Akshay Kumar</option>
                            <option>Salman Khan</option>
                            <option>Rashmika mandana</option>
                            <option>Other</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label>Director Name</label></td>
                    <td><input type="text" name="director" className="form-control" onChange={(e)=>handleInputData (e)}/></td>
                </tr>
                <br/>
                <tr>
                    <td><label></label></td>
                    <td><input className="btn btn-outline-dark mx-1" type="submit" value="submit" onClick={(e)=>loading(e)}/></td>
                    <NavLink to='/'><button className="btn btn-outline-dark">Home Page</button></NavLink>
                </tr>
                </div>
            </table><br/>   
            </form>
        </div>
    )
}

export default AddData;