import {Routes,Route} from 'react-router-dom'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import Step5 from './steps/Confirmation'
import {useState} from 'react'
import data from './data'

export default function RootChange({toggleTab,toggle}) {

  const [price,setprice] = useState(true)

  const pricing = () => setprice(!price)


  return (
    <div>
      <div className={toggle === 1 ? 'd-block' : 'd-none'}>
        <Step1 toggleTab={toggleTab}/>
      </div>
      <div className={toggle === 2 ? 'd-block' : 'd-none'}>
        <Step2 toggleTab={toggleTab} price={price} pricing={pricing}/>
      </div>
      <div className={toggle === 3 ? 'd-block' : 'd-none'}>
        <Step3 toggleTab={toggleTab} price={price} />
      </div>
      <div className={toggle === 4 ? 'd-block' : 'd-none'}>
        <Step4 toggleTab={toggleTab} price={price}/>
      </div>
      <div className={toggle === 5 ? 'd-block' : 'd-none'}>
        <Step5 toggleTab={toggleTab}/>
      </div>
    </div>
  )
}
