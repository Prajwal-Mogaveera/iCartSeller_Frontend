import React from "react"
import { Link } from "react-router-dom"

function AddItem() {
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <h4 className="d-flex justify-content-center">Add Item</h4>
      </div>

      <div className="d-flex justify-content-around" style={{ marginTop: "150px" }}>
        <div style={{ display: "inline-grid" }}>
          <h5>Electronics</h5>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddMobile">
            Mobile
          </Link>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddLaptop">
            Laptop
          </Link>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddDesktop">
            Desktop
          </Link>
        </div>

        <div className="d-flex" style={{ height: "150px" }}>
          <div className="vr"></div>
        </div>

        <div style={{ display: "inline-grid" }}>
          <h5>Fashion</h5>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddFashion">
            Shirt
          </Link>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddFashion">
            Pant
          </Link>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddFashion">
            Footwear
          </Link>
        </div>

        <div className="d-flex" style={{ height: "150px" }}>
          <div className="vr"></div>
        </div>

        <div style={{ display: "inline-grid" }}>
          <h5>Home Appliances</h5>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddHomeAppliances">
            TV
          </Link>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddHomeAppliances">
            Washing Machine
          </Link>
          <Link className="link-unstyled" style={{ textDecoration: "none" }} to="/AddHomeAppliances">
            Refrigerator
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddItem
