import React from 'react'
import dataFetch from "../../../utils/dataFetch"


const query=`
  mutation submitApplication($name: String!, $email: String!, $phone: String!){
  submitApplication(
    name: $name, 
    email: $email,
    phone: $phone,
    formID: 1
  )
  {
    id
  }
}
`;

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phoneNo: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePhoneChange(event) {
    this.setState({ phoneNo: event.target.value });
  }

  register = async() => {
    const variables = {name: this.state.name, email: this.state.email, phone: this.state.phoneNo }
    const response = await dataFetch({ query, variables });
    if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
      console.log(response)
    }
  }

  render() {
    return (
      <section className="mx-4" id="registration-form">
        <div className="row">
          <div className="col-md-6" />
          <div className="col-md-6 mb-md-0 mb-5">
            <h2 className="my-4 color-white">Register Now</h2>
            <form onSubmit={e => {
              this.register();
              e.preventDefault();
            }}>
              <div className="row">
                <div className="col-sm-6 p-0">
                  <div className="m-2">
                    <input type="text" placeholder="Enter Full Name" name="name" className="form-control" onChange={this.handleNameChange} />
                  </div>
                </div>
                <div className="col-sm-6 p-0">
                  <div className="m-2">
                    <input type="text" placeholder="Enter Roll Number" name="Roll No" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6 p-0">
                  <div className="m-2">
                    <input type="text" placeholder="Enter Email" name="email" className="form-control" onChange={this.handleEmailChange} />
                  </div>
                </div>
                <div className="col-sm-6 p-0">
                  <div className="m-2">
                    <input type="text" placeholder="Enter Phone" name="phoneno" className="form-control" onChange={this.handlePhoneChange} />
                  </div>
                </div>
                <div className="col-md-6 color-white">
                    <div className="row">
                      <div className="col-md-3" />
                      <div className="col-md-4">
                        <input type="radio" />Male
                      </div>
                      <div className="col-md-4">
                        <input type="radio" />Female
                      </div>
                    </div>
                </div>
                <div className="col-12 text-center text-md-right">
                  <button type="submit" className="button btn-block px-4 ">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
export default Registration
