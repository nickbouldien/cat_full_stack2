
import React, { Component } from 'react'

class CatAdd extends Component{
  constructor(props){
    super(props)
    this.state = {
      cat : {
        color: '',
        breed: '',
        habitat: 'Indoor',
        gender: 'Male',
        personality: '',
        age: ''
      },
      message : ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let success;

    const params = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state)
        }
    fetch('http://localhost:4000/create-cat', params)
      .then((response)=>{
        success = response.ok
        return response.json()
      })
      .then((body)=>{
        if (success){
          console.log("success!", body)
        }
        else {
          console.log("failure!", body)
        }
      })
      //.catch(
  }
  handleChange(e){
    let target = e.target
    this.state.cat[target.name] = target.value
    this.setState(this.state.cat)
  }

  render(){

    return (
      <div className="App">
        <div className="App-header">
          <img src="http://pngimg.com/uploads/cat/cat_PNG1631.png" className="App-logo" alt="logo" />
          <h2>Add a cat!</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-2 col-xs-offset-5">

              <form onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="color">Color</label>
                <input
                  onChange={this.handleChange.bind(this)}
                  value={this.state.cat.color}
                  name="color"
                  type="text"
                />

                <label name="breed">Breed</label>
                <input
                  type="text"
                  name="breed"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.cat.breed}
                  placeholder='Tabby'
                />

                <label htmlFor="gender">Gender</label>
                <select
                  value={this.state.cat.gender}
                  onChange={this.handleChange.bind(this)}
                  name="gender"
                  >
                  <option value="Male" >Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                <label htmlFor="habitat">Habitat</label>
                <select
                  name="habitat"
                  value={this.state.cat.habitat}
                  onChange={this.handleChange.bind(this)}
                  >
                  <option value="Indoor" >Indoor</option>
                  <option value="Outdoor" >Outdoor</option>
                  <option value="Feral" >Feral</option>
                </select>

                <label htmlFor="personality">Personality</label>
                <input
                  type="text"
                  name="personality"
                  value={this.state.cat.personality}
                  onChange={this.handleChange.bind(this)}
                />

                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  name="age"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.cat.age}
                />
                <br />
                <br />
                <input className="btn btn-default" type="submit" value="Submit" />
              </form>

            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default CatAdd