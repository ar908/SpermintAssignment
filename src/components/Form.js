import React, {useState} from 'react'
import { DeleteOutlined ,CopyOutlined} from '@ant-design/icons';


function Form({ data, handleDelete, handleCopy }) {
  const [check1,setCheck1]= useState(false)
  const [check2,setCheck2] =useState(false)

 
  return (
    <form onSubmit={(e) => e.preventDefault()}>
    <label>
          Lots:
         
            <input type="number" value={data.lot} />
          
        </label> 
        <button onClick={()=>handleCopy(data.id)}> <CopyOutlined  style={{ fontSize: '16px', color: '#08c' }}/></button>
        <br/>
       
      <label>
        Position:
        <select value={data.position} >
          <option value="">Select Position</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </label>
      <br />
      <label>
        Option Type:
        <select
          value={data.optionType}
        >
          <option value="">Select Option Type</option>
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>
      </label>
      <br />
      <label>
        Expiry:
        <select value={data.expiry} >
          <option value="ac">Select Expiry</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
      <br />

      <label>
        Strike Type:
        <select
          value={data.strikeType}
        >
          <option value="">Select Strike Type</option>
          <option value="simple">Simple</option>
          <option value="complex">Complex</option>
        </select>
      </label>
<br/>

      <label>Select Strike Criteria:</label>
      <select>
        <option value="StrikeType">Strike Type</option>
        <option value="PremiumRange">Premium Range</option>
      </select>
      <br />
      <label type="checkbox">Simple Momentum Type:</label>
      <input type="checkbox" checked={check1} onChange={()=> setCheck1(!check1)}/>
        <select disabled={!check1}>
          <option value="PointsUp" >Points Up </option>
          
          <option value="PointsDown">Points Down</option>
        </select>
        <input type="number" disabled={!check1}/>
        <br/>
        <label >Trail SL Type:</label>
        <input type="checkbox"  checked={check2} onChange={()=> setCheck2(!check2)}/>
<select disabled={!check2}>
<option value="Points">Points</option>
<option value="Percentage">Percentage</option>
</select>

<input type="number" disabled={!check2}/>
<input type="number" disabled={!check2}/>
<button onClick={()=> handleDelete(data.id)}> <DeleteOutlined  style={{ fontSize: '16px', color: '#08c' }}/></button>




<div>
      <button type="submit">Final Submit</button></div>
    </form>
   
  )
}

export default Form