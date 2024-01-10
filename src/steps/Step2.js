import {Link,useNavigate} from 'react-router-dom'
import data from '../data'
import {useState,useEffect} from 'react'
import {useStateValue} from '../StateProvider'


export default function Step2({price, pricing,toggleTab}) {

  const navigate = useNavigate()

  const [{plans},dispatch] = useStateValue()

  const [plan,setplan] = useState(
    {
      title:"Arcade",
      month: 9,
      yearly: 90,
    }
  )

  useEffect(() => {
    dispatch({
      type:'set_plans',
      item:plan
    })
  
  },[plan])


  return (
    <div className='step-page'>

      <div className="inner-container">
      <h5 ><b>Select your plan</b></h5>
      <p>You have the option of monthly or yearly billing.</p>

        <div className="plan">
        
        {data.Step2.map(item => 
        <div onClick={()=> setplan(item)} className={item.title === plans.title ? 'border-2 border-primary': 'border=dark'}>
          <div className="border-0 mb-4">
          <img src={`${item.image}`} alt="title"/>
          </div>
          <p1><b>{item.title}</b></p1>
          <br></br>
          <p>{price ? <span>£{item.month}/mo</span> : <span>£{item.yearly}/yr</span>}</p>
          <br></br>
          <p1>{price ? '': '2 months free'}</p1>
          </div>
          )}


        </div>

        <div className="slider-container">
          <span className="mx-2">Monthly</span>
          <label className="switch">
        <input type="checkbox" checked={price ? false : true} id="checkbox" onClick={e=> pricing()}/>
        <span className="slider round"></span>
      </label> 
          <span className="mx-2">Yearly</span>
        </div>

        </div>

        <div className="d-flex justify-content-between align-items-center buttons">
          <Link to='/' onClick={e=> toggleTab(1)}>
    <button className="px-2 py-1 border-0 rounded-2">Go Back</button>
          </Link>
          
    <button onClick={e=> toggleTab(3)} className="px-2 py-1 next border-0 rounded-2">Next Step</button>
          
    </div>

    </div>
  )
}
