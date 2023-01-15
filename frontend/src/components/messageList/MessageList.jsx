import React from 'react' ;
import { useEffect } from 'react';

import "./messageList.css"
import { useState } from 'react';
import axios from 'axios';

const MessageList = () => {
    const [messageData, setMessage] = useState([]) ;
   


    const getMessageData = () => {
        axios.get("http://localhost:5000/")
        .then((res) => setMessage(res.data) )   
        .catch((e) => {
            console.log(e)
        })
    }

    const handleSortByName = () => {
        axios.post("http://localhost:5000/sortName")
        .then((res) => setMessage(res.data))
        .catch((e) => {
            console.log(e)
        })
    }
    const handleSortByTime = () => {
        axios.post("http://localhost:5000/sortTime")
        .then((res) => setMessage(res.data))
        .catch((e) => {
            console.log(e)
        })
    }
    
    useEffect(() => {
           getMessageData()
    }, [])
  return (
    <>
    <div className="d-flex justify-content-between mt-3">
        <button type="button" className="btn btn-info" onClick={handleSortByName}>Sort By Name</button>
        <button type="button" className="btn btn-info" onClick={handleSortByTime}>Sort By Time</button>
    </div>
    <div className='messageContainer'>
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Contact Name</th>
                    <th>Message</th>
                    <th>OTP</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>{

                  messageData.map((ele, i) => {
                       return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{ele.name}</td>
                                <td width="40%">{ele.message}</td>
                                <td>{ele.otp}</td>
                                <td>{ele.time}</td>
                              </tr>
                   
                  })

                }
                
            </tbody>
        </table>
      
    </div>
    </>
  )
}

export default MessageList
