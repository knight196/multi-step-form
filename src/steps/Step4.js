import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import data from '../data'
import { useStateValue } from '../StateProvider'

export default function Step4({price,toggleTab}) {

  const [{plans,addOns},dispatch] = useStateValue()


  const month = plans?.month + addOns.reduce((a,v) => a = a+v.month,0)
  const year = plans?.yearly + addOns.reduce((a,v) => a = a+v.year,0)

  return (
    <div className="step-page">
      
      <div className="inner-container">


      <h5><b>Finishing up</b></h5>
      <p>Double-check everything looks OK before confirming.</p>

<div style={{background:'hsl(206, 94%, 87%)'}} className="rounded-2 p-3">

      <div className="d-flex justify-content-between align-items-center">
      <div>
        
      <p><b>{plans.title} {price ? <span>{plans.month} (Monthly)</span> : <span>{plans.yearly} (Yearly)</span>}</b></p>
      <Link onCick={e=>toggleTab(2)}>
      <small>Change</small>
      </Link>
      </div>
      <p><b>{price ? <span>£{plans.month}/mo</span> : <span>£{plans.yearly}/yr</span>}</b></p>
      </div>

      <hr></hr>

      <div className="add-ons">

        {addOns.map(item => 
        <div className="text-secondary d-flex justify-content-between align-items-center">
      <p>{item.serviceOne}</p>
      <p className="text-dark">{price ? <span>£{item.month}/mo</span> : <span>£{item.year}/yr</span>}</p>
        </div>
          )}


      </div>

</div>

<div className="d-flex justify-content-between align-items-center py-3 text-secondary">
  <p>Total {price ? '(month)' : '(yearly)'}</p>
  <p className="text-primary"><b>£{price ? <span>{month}/mo</span> : <span>{year}/yr</span>}</b></p>
</div>
      </div>
       
      <div className="buttons d-flex justify-content-between align-items-center my-2">
          <Link to='/Step3' onClick={e=>toggleTab(3)}>
    <button className="px-2 py-1 border-0 rounded-2">Go Back</button>
          </Link>
          <Link onClick={e=> toggleTab(5)}>
    <button className="px-3 py-2 bg-primary next text-white border-0 rounded-2">Confirm</button>
          </Link>
    </div>


    </div>
  )
}
