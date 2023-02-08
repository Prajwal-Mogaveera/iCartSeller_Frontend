import vendorContext from "./VendorContext"

const VendorState = props => {
  const host = "http://localhost:4040"

  const addMobile = async (name, desc, price, count, img) => {
    const response = await fetch(`${host}/api/electronics/mobile/addMobile`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZDYxYTI2MmE2OWNlZWRiMTlmMzNmIn0sImlhdCI6MTY3MjMwNzI4MX0.rKtgnnxBAHL_qZwqyet-njqN0BhVCrqSaz9mHU_JBQk"
      },
      body: JSON.stringify({ name: name, details: desc, price: price, count: count, image: img })
    })
    const json = await response.json()
    console.log(json)
  }

  const addLaptop = async (name, details, price, tag, image) => {
    const response = await fetch(`${host}/api/electronics/laptop/addLaptop`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZDYxYTI2MmE2OWNlZWRiMTlmMzNmIn0sImlhdCI6MTY3MjMwNzI4MX0.rKtgnnxBAHL_qZwqyet-njqN0BhVCrqSaz9mHU_JBQk"
      },
      body: JSON.stringify({ name, details, price, tag, image })
    })
    const json = await response.json()
    console.log(json)
  }

  const addDesktop = async (name, details, price, tag, image) => {
    const response = await fetch(`${host}/api/electronics/desktop/addDesktop`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZDYxYTI2MmE2OWNlZWRiMTlmMzNmIn0sImlhdCI6MTY3MjMwNzI4MX0.rKtgnnxBAHL_qZwqyet-njqN0BhVCrqSaz9mHU_JBQk"
      },
      body: JSON.stringify({ name, details, price, tag, image })
    })
    const json = await response.json()
    console.log(json)
  }

  return <vendorContext.Provider value={{ addMobile, addLaptop, addDesktop }}>{props.children}</vendorContext.Provider>
}

export default VendorState
