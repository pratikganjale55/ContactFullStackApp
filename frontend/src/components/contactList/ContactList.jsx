import React from 'react'
import "./conatctList.css" ;
import contactData from "../../data" ;
import rightArrow from "../images/icons8-wide-right-arrow-64 (2).png"
import { Link } from 'react-router-dom';
const ContactList = () => {

  return (
    <div>
      <main className="container">
      <div className="bg-light p-5 mt-3 rounded gradients">
      {
                        contactData.map((ele, index) => {
                                return <div className="list-group w-auto mt-2" key={index}>
                                            <Link to={`/contact/${ele.id}`} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                                                    <img src="https://filmshotfreezer.files.wordpress.com/2011/07/untitled-1.jpg" alt="twbs" width="40" height="40" className="rounded-circle flex-shrink-0"/>
                                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                                        <div>
                                                            <h5 className="mb-0">{ele.first_name} {ele.last_name}</h5>
                                                            
                                                        </div>
                                                    <img src={rightArrow} alt="rightArrow"/>
                                                    </div>
                                            </Link>
                                   </div>
                        })
                    }
      </div>
      </main>
    </div>
  )
}

export default ContactList
