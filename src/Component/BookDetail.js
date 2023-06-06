import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const BookDetail = ()=>{

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
            <div className="back-c">
                <div className="container d-flex">
                    <img className="logo" src={require("../assets/images/bookmyshow-logo.png")}/>
                    <input type="search" placeholder="Search" className="ms-3 m-serch"/>
                </div>
                <div>
                    <NavLink to='/'><button className="btn btn-danger m-4"><i class="bi bi-arrow-left-short"></i></button></NavLink>
                </div>
            </div>
            {data.map((v,i)=>{
                return(
                <div >
                    <div className="bg-color">
                        <div className="d-flex text-white mx-3">
                            <h1>{v.title}</h1>
                            <h1>({v.type})-</h1>
                            <h1>{v.language}</h1>
                        </div>
                        <div className="d-flex text-white mx-3">
                            <p>{v.certificate} - </p>
                            <p>{v.genre}</p>
                        </div>
                    </div>
                    <div className="d-flex p-3">
                        <button className="btn btn-danger"><h4 className="hw bg">THU<br/>06<br/>APR</h4></button>
                        <button className="btn btn-outline-danger mx-2"><h4 className="hw bg">FRI<br/>07<br/>APR</h4></button>
                        <button className="btn btn-outline-danger"><h4 className="hw bg">SAT<br/>08<br/>APR</h4></button>
                        <button className="btn btn-outline-danger  mx-2"><h4 className="hw bg">SUN<br/>09<br/>APR</h4></button>
                    </div>
                   <div className="mx-4">
                        <div className="text"><hr/>
                            <h6><i className="bi bi-heart hoveer"></i> Cinepolis Imperial Square Mall, Surat</h6>
                            <a className=""><i class="bi bi-phone"></i> M-Ticket <i className="bi bi-cup-straw"></i> Food & Beverage</a>

                            <NavLink to={"/bookticket/"+v.id}><button className="btn btn-outline-success margin-button mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button></NavLink>
                            <NavLink to={"/bookticket/"+v.id}><button className="btn btn-outline-success mx-3 mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button></NavLink>
                            <NavLink to={"/bookticket/"+v.id}><button className="btn btn-outline-success mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button></NavLink>
                            <NavLink to={"/bookticket/"+v.id}><button className="btn btn-outline-success mx-3 mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button></NavLink>
                            <NavLink to={"/bookticket/"+v.id}><button className="btn btn-outline-success mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button><br/><br/></NavLink>

                            
                        </div><hr/>
                        <div className="text">
                        <h6><i className="bi bi-heart hoveer"></i> Inox VR Mall, Surat</h6>
                            <a className=""><i class="bi bi-phone"></i> M-Ticket <i className="bi bi-cup-straw"></i> Food & Beverage</a>                                

                            <button className="btn btn-outline-success margin-button mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button>
                            <button className="btn btn-outline-success mx-3 mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button>
                            <button className="btn btn-outline-success mtop"><p className="text-size">30:20PM<br/>DOlBY 7.1</p></button>
                        </div>
                   </div>
                </div>
            )
        })}
        </div>
    )
}

export default BookDetail;