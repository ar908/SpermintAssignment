import React, { useState } from "react";
import Form from "./Form"

const Add = () => {
  const [lot, setLot] = useState("");
  const [position, setPosition] = useState("");
  const [optionType, setOptionType] = useState("");
  const [expiry, setExpiry] = useState("");
  const [strikeType, setStrikeType] = useState("");
  

  const [legs, setLegs] = useState([]);

  const handleAddLeg = () => {
    const id = Date.now();
    setLegs([
      ...legs,
      {
        id,
        lot,
        position,
        optionType,
        expiry,
        strikeType,
      },

    ]);
  };
  // const handleChange = (e) => {
  //   setISChecked(e.target.checked)
  // }


  const handleCancel = () => {
    setLegs(legs.slice(0, legs.length - 1))
  };

  const handleDelete  = (id) => {
    const newLegs = legs.filter(leg => leg.id !== id)
    setLegs(newLegs)
  }
  const handleCopy  = (id) => {
    const newArr = []

    for(let leg of legs){
      newArr.push(leg)
      if(leg.id === id){
        const newId = Date.now()
        newArr.push({...leg, id: newId})
      }
    }
    setLegs(newArr)
  }
  
  

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>

        <label>
          Lots:

          <input type="number" value={lot} onChange={(e) => setLot(e.target.value)} />

        </label>
        <br />
        <label>
          Position:
          <select value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="">Select Position</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </label>
        <br />
        <label>
          Option Type:
          <select
            value={optionType}
            onChange={(e) => setOptionType(e.target.value)}
          >
            <option value="">Select Option Type</option>
            <option value="call">Call</option>
            <option value="put">Put</option>
          </select>
        </label>
        <br />
        <label>
          Expiry:
          <select value={expiry} onChange={(e) => setExpiry(e.target.value)}>
            <option value="">Select Expiry</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
        <br />
        {expiry === "weekly" && (
          <label>
            Strike Type:
            <select
              value={strikeType}
              onChange={(e) => setStrikeType(e.target.value)}
            >
              <option value="">Select Strike Type</option>
              <option value="simple">Simple</option>
              <option value="complex">Complex</option>
            </select>
          </label>

        )}


      </form>
      <br />
      <button onClick={handleAddLeg}>Add Leg</button>
      <button onClick={handleCancel}>Cancel</button>
      <br />
      <br />
      <h2>Legs:</h2>
      <ul>
        {
          legs.map((leg, index) => {
           
            return <Form data={leg} key={index} handleDelete={handleDelete} handleCopy={handleCopy} />
          }
          


        
        )}
      </ul>

      <div>

      </div>
    </div>
  );
};

export default Add;

