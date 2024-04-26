import React from 'react'

export default function Cards() {
  return (
    <div>
    <div className="card" style={{"width":"18rem","maxHeight":"460px","margin":"30px"}}>
    <img src="https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full" height="400" width="300" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Burger</h5>
        <p className="card-text">Delicious Burgers</p>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(10), (e,i) => {
                return(
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
    </div>
    </div>

    </div>
  )
}
