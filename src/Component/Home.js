import React from "react";
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../assets/style.css'


const Home = () =>{
    let [data, setItem] = useState([]);
    let [Active, setActive] = useState(true)
    

    useEffect(() => {
        if(Active) {
            fetch('http://localhost:3001/movie',{
            }).then(res => {
                res.json().then(record => {
                    setItem(record);
                    setActive(false)
                })
                .catch(err =>{
                    console.log(err);
                })
                
            }).catch(err => { console.log(err) })
        }
    },[data])

   
    return(
        <div>
            <h1>View Movie</h1>
            <div className=" p-2 color ">
            <section className='row'>
            {data.map((v,i)=>{
                    return(
                        
                        <div className='col-md-3'>
                        
                                <div className="container">
                                <NavLink to={'/detail/'+v.id}>
                                    <img className='img d-block' src={require ("../assets/images/"+v.image)} />
                                </NavLink>         
                                    <div className="mt-25"> 
                                        <h6 className="bg-dark px border border-dark"><i className="bi bi-star-fill"></i> {v.rating}/10</h6>
                                    </div>
                                    <h3 className="text">{v.title}</h3>
                                    <p className="text">{v.genre}</p>
                                </div>
                                </div>
                                
                        )
                    })}
                </section>
                <NavLink to={'/add'}><button className="btn btn-outline-dark">Add Data</button></NavLink>
            </div><br/>
        </div>
    )
}

export default Home;