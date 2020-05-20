import React, { Component } from 'react';

export default class FormComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    changeHandler(e) {
        console.log(e.target.name)
    }

    onSubmit() {}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" name="firstname" className="form-control" onChange={this.changeHandler} />
                        <input type="text" name="lastname" className="form-control" onChange={this.changeHandler} />
                        <select className="form-control" name="place" onChange={this.changeHandler}>
                            <option value="office">office</option>
                            <option value="home">home</option>
                        </select>
                        <button type="button" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}