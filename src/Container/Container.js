import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useStateValue } from '../StateProvider'
export default function Container() {

  const {toggle} = useStateValue()

  const steps = [
    {
      no:1,
      step:'STEP 1',
      info:'YOUR INFO'
    },
    {
      no:2,
      step:'STEP 2',
      info:'SELECT PLAN'
    },
    {
      no:3,
      step:'STEP 3',
      info:'ADD-ONS'
    },
    {
      no:4,
      step:'STEP 4',
      info:'SUMMARY'
    }
  ]

    return (
    <div className="container-step">

        <div className="steps">

      {steps.map(item => 
        <div className="steps-No">
        <button style={toggle === item.no ? {background:'hsl(206, 94%, 87%)'} : {background:'transparent'}}>{item.no}</button>
        <div>
        <span>{item.step}</span>
        <p>{item.info}</p>
        </div>
      </div>
          )}

        </div>

    </div>
  )
}
