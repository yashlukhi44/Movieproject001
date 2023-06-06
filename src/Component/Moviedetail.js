import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";


const MovieDetail = () =>{

    let [data ,setItem] = useState([])
    let [Active , setActive] = useState(true)
    
    let {id} = useParams();
    
    useEffect(()=>{
        if(Active) {
            fetch('http://localhost:3001/movie/'+id,{
            }).then(res=>{
                res.json().then(record=>{
                    let datarecord = [record]

                    setActive(false);

                    setItem(datarecord);
                })
                .catch(err=>{
                    console.log(err)
                })
            }).catch(err=>{console.log(err)})
        }
    },[data])


    return(
        <div>
            <section>
            <div className="back-c">
                <div className="container d-flex ">
                    <img className="logo" src={require("../assets/images/bookmyshow-logo.png")}/>
                    <input type="search" placeholder="Search" className="ms-3 m-serch"/>
                </div>
                <div>
                    <NavLink to='/'><button className="btn btn-danger m-4"><i class="bi bi-arrow-left-short"></i></button></NavLink>
                </div>
            </div>
            {data.map((v,i)=>{
                    return(
                        <div className="back-img">
                            <div className="container">
                                <div className="d-flex text-color text">
                                <div >
                                    <img className="images mt-5" src={require("../assets/images/"+v.image)}/>
                                    <div className="br"> 
                                        <h6 className="">{v.schedule}</h6>
                                    </div>  
                                </div>
                                <div className="p-5 text mt-5">
                                    <h1>{v.title}</h1>
                                    <h5 className="mt-3"><i className="bi bi-star-fill"></i> {v.rating}/10</h5>
                                    <h4 className="mt-3 ">{v.type}<i class="bi bi-dot"></i>{v.language}</h4>
                                    <h4 className="mt-3">{v.duration}<i class="bi bi-dot"></i>{v.genre}<i class="bi bi-dot"></i>{v.certificate}<i class="bi bi-dot"></i>{v.date}</h4>
                                    <NavLink to={'/bookdetail/'+v.id}><button type="submit" className="btn btn-danger mt-3">Book Tickets</button></NavLink>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default MovieDetail;