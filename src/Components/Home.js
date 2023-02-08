import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="my-5">
      <h3 className="d-flex justify-content-center ">Sell online to crores of customers</h3>
      <div className="d-flex justify-content-center my-5">
        <Link to="/AddItem">
          <button type="button" className="btn btn-primary">
            Add Item
          </button>
        </Link>
        <Link to="/ViewItem">
          <button type="button" className="btn btn-primary mx-5">
            View Item
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
