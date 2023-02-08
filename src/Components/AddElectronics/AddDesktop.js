import React, { useRef, useContext } from "react"
import VendorContext from "../../Context/Vendor/VendorContext"

function AddDesktop() {
  const Context = useContext(VendorContext)
  console.log(Context)
  console.log(VendorContext)

  const name = useRef(null)
  const details = useRef(null)
  const price = useRef(null)
  const count = useRef(null)
  const image = useRef(null)

  const add = e => {
    e.preventDefault()
    const nameVal = document.getElementById("name").value
    const detailsVal = document.getElementById("details").value
    const priceVal = document.getElementById("price").value
    const countVal = document.getElementById("count").value
    const imageVal = document.getElementById("image").value

    console.log(nameVal, detailsVal, priceVal, countVal, imageVal)

    console.log(Context)
    console.log(VendorContext)

    Context.addDesktop(nameVal, detailsVal, priceVal, countVal, imageVal)

    document.getElementById("name").value = ""
    document.getElementById("details").value = ""
    document.getElementById("price").value = ""
    document.getElementById("count").value = ""
    document.getElementById("image").value = ""
  }

  return (
    <div>
      <div className="container my-5">
        <h5 className="d-flex justify-content-center">Add Desktop</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" ref={name} className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <input type="details" ref={details} className="form-control" id="details" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input type="number" ref={price} className="form-control" id="price" />
          </div>
          <div className="mb-3">
            <label htmlFor="count" className="form-label">
              Count
            </label>
            <input type="number" ref={count} className="form-control" id="count" />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input type="text" ref={image} className="form-control" id="image" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={add}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddDesktop
