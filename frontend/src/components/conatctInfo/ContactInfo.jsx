import React from 'react' ;
import { json, Link, useParams } from 'react-router-dom';
import "./contactInfo.css" ;
import sendIcon from "../images/icons8-send-64.png" ;
import data from "../../data" ;
import { useState } from 'react';
import { useEffect } from 'react';
import userIcon from "../images/icons8-user-50.png" ;
import phoneIcon from "../images/icons8-phone-64.png" ;

const ContactInfo = () => {
    const [indvidualData, setData] = useState([]) ;
    const [message, setMessage] = useState("") ;
    
    const {id} = useParams() ;

   const getFilterData = () => {
        const filterData = data.filter((ele) => ele.id == id)
       setData(...filterData)
    }
  

   const handleMessage = async() => {
  let d = new Date();
   
  let time = d.toLocaleTimeString();
  
    const payload = {
           name : `${indvidualData.first_name} ${indvidualData.last_name}` ,
           message,
           time
    }
    console.log(id)
    await fetch(`http://localhost:5000/sendotp/${id}`, {
        headers : {
            "Content-Type" : "application/json"
        },
        method : "POST" ,
        body : JSON.stringify(payload)
    }).then((res) => res.json())
    .then((data) => {
           if(data.message == "Type something..."){
              alert("Type something...")
            
           }else{
            alert("Message Send Successfully")
            
           }
    }).catch((e) => {
          console.log(e)
    })

   }
    useEffect(() => {

        getFilterData()

    }, [])
  return (
    <>
   
    <div>
     <div className="card w-50 m-auto mt-3 infoContainer">
              <div className="card-body">
                    <h5 className="card-title">
                        <span><img src={userIcon} alt="userName" width="40px" /></span><b>{indvidualData.first_name} {indvidualData.last_name}</b></h5>
                    <p className="card-text">
                    <span><img src={phoneIcon} alt="userPhone" width="40px"/></span>{indvidualData.phone_number}</p>
                    <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                         Send Message
                    </button>
                  </div>
              
               
        </div>
            
        
     
    </div>



{/* /// Message send Model // */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Message</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                    <div className="commentInput">
                        <textarea 
                        className="form-control z-depth-1" 
                        id="exampleFormControlTextarea6" 
                            rows="1" 
                            placeholder="Write something here..."
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <img src={sendIcon} alt="" onClick={handleMessage} />
                    </div>
            </div>
           
            </div>
        </div>
        </div>
</>
  )
}

export default ContactInfo
