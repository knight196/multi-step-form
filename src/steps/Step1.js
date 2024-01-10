import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Container from '../Container/Container'

export default function Step1({toggleTab}) {

  const navigate = useNavigate()

  const [name,setname] = useState('')
  const [emailaddress,setemailaddress] = useState('')
  const [phonenumber,setphonenumber] = useState('')

  const email = /\S+@\S+\.\S+/

  const ContactNo = /^07\d{3}(\s)?\d{6}/

  function validate(){


    if( name === ''){
      alert('Please enter your name')
      }
    else if(!email.test(emailaddress)){
      if(emailaddress === ''){
        alert('Please enter your email address')
      }else{
        alert('Please enter a valid email address')
      }
    }else if(!ContactNo.test(phonenumber)){
      if(phonenumber === ''){
        alert('Please enter your phone number')
      }else{
        alert('Please enter a valid phone number')
      }
    }
    else{
      navigate('/Step2')
      toggleTab(2)
    }

  }

  useEffect(() => {
toggleTab(1)
  },[])

  return (<>

    <div className="step-page step1">

    <div className="inner-container">

    <h5>Personal Info</h5>
    <p>Please provide your name, email address, and phone number.</p>

        <h5>Name</h5>
        <input onChange={(e) => setname(e.target.value)} type="text" placeholder="e.g.Stephen King"/>
        <h5>Email Address</h5>
        <input type="text" onChange={(e) => setemailaddress(e.target.value)} placeholder="e.g.stephenking@lorem.com"/>
        <h5>Phone Number</h5>
        <input type="number" onChange={(e) => setphonenumber(e.target.value)} placeholder='.g.+1234567890'/>
    </div>
    
      
    <div className="buttons d-flex justify-content-end my-2">
    <button className="px-2 py-1 border-0 rounded-2 next" onClick={e=> validate()}>Next Step</button>
    </div>

    </div>
  </>
  )
}
