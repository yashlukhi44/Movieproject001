import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const BookTicket = () =>{

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
            {data.map((v,i)=>{
                return(
                    <div>
                        <div className="bg-color d-flex">
                            <div className="container text-white justify-content-start">
                                <h3 className="d-flex justify-content-start">{v.title} ({v.certificate})</h3>
                                <p className="d-flex justify-content-start">Cinepolis : Imperial Square Mall, Surat</p>
                            </div>
                            <div className="">
                                <NavLink to='/'><button className="btn btn-danger m-4">Book</button></NavLink>
                            </div>
                        </div>
                        <hr/>
                        <div className="d-flex mx-4">
                            <button className="btn btn-success ">3:20PM</button>
                            <button className="btn btn-outline-success mx-2">5:20PM</button>
                            <button className="btn btn-outline-success">7:20PM</button>
                            <button className="btn btn-outline-success mx-2">9:20PM</button>
                            <button className="btn btn-outline-success">11:20PM</button>
                        </div><br/>
                        <div className="container d-flex">
                            <div className="">
                                <p className="text-start">Premium-Rs 380.00</p>
                                <div className="d-flex justify-content-between box-1">
                                    <p className="m-3">J</p>
                                    <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>                                  
                                    <a href="#">05</a>
                                    <a href="#">06</a>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <a href="#">16</a>
                                    <a href="#">17</a>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>

                                </div>
                                <div className="d-flex justify-content-between box-1">
                                    <p className="m-3">I</p>
                                    <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <p className="text-start pt-2">Premium-Rs 260.00</p>
                                <div className="d-flex justify-content-between box-1">
                                    <p className="m-3">H</p>
                                    <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <div className="d-flex justify-content-between box-1">
                                <p className="m-3">G</p>
                                <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <div className="d-flex justify-content-between box-1">
                                <p className="m-3">F</p>
                                <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <div className="d-flex justify-content-between box-1">
                                <p className="m-3">E</p>
                                <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <div className="d-flex justify-content-between box-1">
                                <p className="m-3">D</p>
                                <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <div className="d-flex justify-content-between box-1">
                                <p className="m-3">C</p>
                                <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <p className="text-start pt-2">Premium-Rs 260.00</p>
                                <div className="d-flex justify-content-between box-1">
                                <p className="m-3">B</p>
                                <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                <div className="d-flex justify-content-between box-1">
                                <p className="m-3">A</p>
                                <a href="#">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">07</a>
                                    <a href="#">08</a>
                                    <a href="#">09</a>
                                    <a href="#">10</a>
                                    <a href="#">11</a>
                                    <a href="#">12</a>
                                    <a href="#">13</a>
                                    <a href="#">14</a>
                                    <a href="#">15</a>
                                    <div className="blank">
                                        <a href="#">01</a>
                                        <a href="#">01</a>
                                    </div>
                                    <a href="#">18</a>
                                    <a href="#">19</a>
                                    <a href="#">20</a>
                                    <a href="#">21</a>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    )
                })}
                </div>
    )
}

export default BookTicket;