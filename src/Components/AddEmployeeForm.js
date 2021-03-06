import React, { useState } from 'react';



const AddEmployeeForm = ({onRouteChange}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     job_title: '',
  //     name:'',
  //     id: '',
  //     date_of_birth: '',

  //         }
  // }

const [name,setName] = useState('');
const [id,setId] = useState();
const [email,setEmail] = useState('');
const [job_title,setJob_title] = useState('');
const [date_of_birth,setDate_of_birth] = useState('')
const [department,setDepartment] = useState('')

const onNameChange = (event) => {
  setName(event.target.value)
}

const onIdChange = (event) => {
  setId(event.target.value)
}

const onEmailChange = (event) => {
  setEmail(event.target.value)
}

const onJobTitleChange = (event) => {
  setJob_title(event.target.value)
}

const onDOBChange = (event) => {
  setDate_of_birth(event.target.value)
}

const onDepartmentChange = (event) => {
  setDepartment(event.target.value)
}

const onSubmitEmployee = () => {
  fetch('http://localhost:3000/addemployee',{
    method:'put',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      email: email,
      id: id,
      name:name,
      job_title:job_title,
      date_of_birth:date_of_birth,
      department:department      
    })
  })
  .then(response => response.json())
  .then(alert("Employee added!!!"))
  .then(() => window.location.reload())
  }



        return (
  <article className="br3 white ba b--black-10 w-30 mv3 shadow-3 center">
        <main className="pa4 white-90">
          <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Add Employee</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="employee-id">Employee ID</label>
          <input onChange={onIdChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="employee-id"  id="employee-id" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
          <input onChange={onNameChange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input onChange={onEmailChange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="date-of-birth">Date of Birth</label>
          <input onChange={onDOBChange} className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="date" name="date-of-birth"  id="date-of-birth" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="job-title">Job Title</label>
          <input onChange={onJobTitleChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="job-title"  id="job-title" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="department">Department</label>
          <select onChange={onDepartmentChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" id="department" name="department">
          <option value="none" selected disabled hidden>Select your department</option>
            <option value="human resource">Human Resource</option>
            <option value="accounting">Accounting</option>
            <option value="management">Management</option>
            <option value="financial">Financial</option>
            <option value="billing">Billing</option>
            <option value="construction">Construction</option>
            <option value="information technology">Information Technology</option>
            <option value="insurance">Insurance</option>
          </select>
        </div>
       
      </fieldset>
      <div className="white-90">
        <input onClick={onSubmitEmployee} className="b mt3 ph3 pv2 input-reset ba b--white white-90 bg-transparent grow pointer f6 dib" type="submit" value="Add Employee" />
      </div>
    </div>
  </main>
  </article>
        );
  
}
  
export default AddEmployeeForm;