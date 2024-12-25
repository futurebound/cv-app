// include general infomation including name, email and phone number
import { useState } from 'react'

export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  // input value state doesn't need to be lifted to app level
  const [formData, setFormData] = useState(personalInfo)

  const handleSubmit = () => {
    setPersonalInfo(formData)
  }

  return (
    <>
      <h2>Personal</h2>
      <section className='form-container'>
        <label>Name</label>
        <input
          label='Name'
          type='text'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Email</label>
        <input
          label='Email'
          type='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label>Phone Number</label>
        <input
          label='Phone'
          type='phone'
          value={formData.Phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <button onClick={handleSubmit}>Submit</button>
      </section>
    </>
  )
}
