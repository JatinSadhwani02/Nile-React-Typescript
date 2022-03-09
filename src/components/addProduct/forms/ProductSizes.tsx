import React, { useState } from 'react'
import { SizeOption } from '../../helpers/SelectOptions'

const ProductSizes = () => {

  const [value, setValue] = useState(0);
  const [allValues, setAllValues] = useState<any>([])

  function addValue() {
    setAllValues((old: any) => [...old, value])
    setValue(0)
  }

  function removeData(index: number) {
    setAllValues(allValues.filter((elem:any,ind:number)=>{
      return ind!==index
    }))
  }

  return (
    <form className="std-card m-2">
      <p className='std-font2'>Add Product Sizes</p>
      <div className="row m-2">
        <label className="std-boldFont">Select or type a number defining the size :</label>
        <div className='input-group'>
          <input className="std-inputField" placeholder='value' value={value} onChange={(e: any) => { setValue(e.target.value) }}></input>
          <div className='std-btn std-btnOrange' onClick={() => { addValue() }}>+</div>
        </div>
      </div>
      <br />
      <div>
        <p className="std-boldFont std-font2">Added Sizes</p>
        {
          allValues.length > 0 ? <SizeOption available={allValues} edit={true} removeFunction={removeData} /> : <>Nothing to show yet</>
        }

      </div>
      <br />
      <div className="d-flex justify-content-center">
        <button
          className="std-btn std-btnOrange"
          style={{ width: "10rem" }}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default ProductSizes