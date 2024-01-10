import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import data from '../data'
import {useStateValue} from '../StateProvider'

export default function Step3({price,toggleTab}) {
  
const [{addOns},dispatch] = useStateValue()

  const [item,setitem] = useState('')
  
  const [filtered,setfiltered] = useState([])


  const handleChange = e => {

    if(!e.target.checked){
      setitem(item.filter(item => item !== e.target.value))
    }else{
      setitem([...item, e.target.value])
    }

  }


  useEffect(() => {
    if(item.length === 0){
          setfiltered([])
    }else{
      setfiltered(data.Step3.filter(x => item.some(c => [x.serviceOne].flat().includes(c))))
    }

  },[item])


  useEffect(() => {
    dispatch({
      type:'set_addons',
      item:filtered
    })
  },[filtered])

  console.log(addOns)

  return (
    <div className="step-page">


<div className="inner-container">


      <h5 ><b>Pick add-ons</b></h5>

      <p>Add-ons help enhance your gaming experience.</p>
    
      {data.Step3.map(item => 
      <div className="checkbox">

      
      <input type="checkbox" value={item.serviceOne} onChange={handleChange}/>
     
      
      <div>
        <small>{item.serviceOne}</small>
        <br></br>
        <small>{item.serviceTwo}</small>
      </div>

      <p>{price ? <span>£{item.month}/mo</span> : <span>£{item.year}/yr</span>}</p>

      </div>
        )}

</div>
      
      <div className="d-flex justify-content-between align-items-center buttons">
          <Link to='/Step2' onClick={e=> toggleTab(2)}>
    <button className="px-2 py-1 border-0 rounded-2">Go Back</button>
          </Link>
          <Link to="/Step4" onClick={e=> toggleTab(4)}>
    <button className="px-2 py-1 next border-0 rounded-2">Next Step</button>
          </Link>
    </div>

    
    </div>
  )
}
