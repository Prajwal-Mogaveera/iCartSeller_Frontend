import React, { useRef, useContext } from "react"
import VendorContext from "../../Context/Vendor/VendorContext"

function AddMobile() {
  const Context = useContext(VendorContext)

  const name = useRef(null)
  const desc = useRef(null)
  const price = useRef(null)
  const count = useRef(null)
  const img = useRef(null)

  const addItem = async e => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const desc = document.getElementById("desc").value
    const price = document.getElementById("price").value
    const count = document.getElementById("count").value
    const img = document.getElementById("img").value
    console.log(name, desc, price, count, img)

    Context.addMobile(name, desc, price, count, img)

    document.getElementById("name").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("price").value = ""
    document.getElementById("count").value = ""
    document.getElementById("img").value = ""
  }

  return (
    <div className="container my-5">
      <h5 className="d-flex justify-content-center">Add Mobile</h5>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" ref={name} className="form-control" id="name" placeholder="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea className="form-control" ref={desc} id="desc" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input type="number" className="form-control" ref={price} id="price" placeholder="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="count" className="form-label">
            Count
          </label>
          <input type="number" className="form-control" ref={count} id="count" placeholder="count" />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Image
          </label>
          <input type="text" className="form-control" ref={img} id="img" placeholder="imageURL" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={addItem}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddMobile
