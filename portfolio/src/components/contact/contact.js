import React from 'react'
import "./contact.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    })

    const center = useMemo(() => ({lat: 33.69, lng: 73.04}), [])

    const form = useRef();

    const [ inputs , setInputs ] = useState({
        name : "", 
        email : "",
        subject : "",
        message: ""
    })

    const [ error , setError ] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]:value}))
        console.log(inputs)

    }

    const sendEmail = (e) => {
      e.preventDefault();

      if(inputs.name == "" || inputs.email.length == 0 || inputs.subject.length == 0 || inputs.message.length == 0 ){
        setError(true)
    }else{
        setError(false)
        emailjs.sendForm('service_nys9b65', 'template_s35rg7k', form.current, 'Te4TTb8XnwXS7aef3')
        .then((result) => {
            console.log(result.text);
            toast.success("Email Sent Successfully" , {
                position: "bottom-right"
            })
        }, (error) => {
            console.log(error.text);
        });
    }
    console.log(error)

       
    
      
    };
  


  return (
    <div className='contact' id="contact">
        <h1 className='c-heading'>Contact</h1>
        <div className='c-wrapper'>
            <div className='c-infoContainer'>
                <div className='c-infoWrapper'>

                    <div className='c-itemWrapper'>
                        <div className='c-itemsContainer'>
                            <div className='c-itemBackground'>
                                <LocationOnIcon className='c-icon'/>
                            </div>                    
                            <div className='c-itemsContainerText'>
                                <h2 className='c-itemHeading'>Location:</h2>
                                <span>Islamabad | Pakistan</span>
                            </div>
                        </div>
                    </div>
               
                    <div className='c-itemWrapper'>
                        <div className='c-itemsContainer'>
                            <div className='c-itemBackground'>
                                <EmailIcon className='c-icon'/>
                            </div>

                            <div className='c-itemsContainerText'>
                                <h2>Email:</h2>
                                <span>hafizusamamaqsood@gmail</span>
                            </div>
                        </div>
                    </div>

                    <div className='c-itemWrapper'>
                        <div className='c-itemsContainer'>
                            <div className='c-itemBackground'>
                                <CallIcon className='c-icon'/>
                            </div>
                            <div className='c-itemsContainerText'>
                                <h2>Phone:</h2>
                                <span>+92 332 6386638 </span>
                            </div>
                        </div>
                    </div>

                    <div className='c-googleMapsContainer'>
                        { isLoaded ? <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                            <Marker position={center}/>
                        </GoogleMap> : <h1>Maps not Functioning properly</h1>}
                    </div>
                </div>
            </div>

            <form ref={form} className='c-emailContainer'>
                <div className='c-nameAndEmailContainer'>
                    <div className='c-nameContainer'>
                        <label className='c-label'>Your Name</label>
                        <input className='c-input' type="text" name='name' value={inputs.name} onChange={handleChange}/>
                    </div>

                    <div className='c-emailInputContainer'>
                        <label className='c-label'>Your Email</label>
                        <input className='c-input' type="email" name='email' value={inputs.email} onChange={handleChange}/>
                    </div>
                </div>

                <div className='c-subjectContainer'>
                    <label className='c-label'>Subject</label>
                    <input className='c-input' type="text" name='subject' value={inputs.subject} onChange={handleChange}/>
                </div>

                <div className='c-messageContainer'>
                    <label className='c-label'>Message</label>
                    <textarea className='c-messageInput' type="text" name='message' value={inputs.message} onChange={handleChange}/>
                </div>

                {error ? <p className='c-errorMessage'>Please fill the required fields</p> : null}

                <div className='c-buttonContainer'>
                    <button className='c-button' onClick={sendEmail}>Send Message</button>
                    <ToastContainer/>
                </div>

            </form>   
                
        </div>
  
    </div>
  )
}

export default Contact