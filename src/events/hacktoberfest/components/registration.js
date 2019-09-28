import React from 'react'
import dataFetch from "../../../utils/dataFetch"


const query=`
  mutation submitApplication($name: String!, $email: String!, $phone: String!, $formData: JSONString!){
  submitApplication(
    name: $name, 
    email: $email,
    phone: $phone,
    formID: 1
    formData: $formData
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
      phone: '',
      gender: '',
      roll: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleRollChange = this.handleRollChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }
  handleRollChange(event) {
    this.setState({ roll: event.target.value });
  }

  register = async() => {
    const { name, email, phone, gender, roll } = this.state;
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const phoneRegex = /^\d{10}$/;
    if( name === "" || roll === "" || phone === "" || email === "" || gender === "") {
      console.log("Please Fill All the Fields")
    } else if(emailRegex.test(email) === false) {
      console.log("Enter Proper Email")
    } else if(phoneRegex.test(phone) === false) {
       console.log("Enter Proper Phone")
    } else {
      const json = { 'gender': gender, "rollNo": roll }
      const variables = { name, email, phone, formData: JSON.stringify(json) }
      console.log(variables)
      const response = await dataFetch({ query, variables });
      if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
        console.log(response)
      }
    }
  }

  render() {
    return (
      <section className="mx-4" id="registration-form">
        <div className="row">
          <div className="col-md-6" />
          <div className="col-md-6 mb-md-0 mb-5">
            <h2 className="my-4 text-light">Register Now</h2>
            <form
              className="form-group"
              onSubmit={e => {
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
                    <input type="text" placeholder="Enter Roll Number" name="Roll No" className="form-control" onChange={this.handleRollChange} />
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
                <div className="col-sm-6 p-0">
                  <div className="m-2">
                    <select className="form-control text-light" onChange={this.handleGenderChange}>
                      <option value="" selected disabled hidden>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 form-check">
                  <div className="m-2 text-light">
                    <input type="checkbox" className="form-check-input" id="undertaking" />
                    <label className="form-check-label" htmlFor="undertaking">
                      By submitting this application, I agree to the <a href="#">Code of Conduct</a> & <a href="#">Privacy Policy</a> of the organizers.
                    </label>
                  </div>
                </div>
                <div className="col-12 p-0 text-center text-md-right">
                  <div className="m-2">
                    <button type="submit" className="button btn-block px-4">Register</button>
                  </div>
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
