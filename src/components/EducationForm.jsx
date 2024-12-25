import { useState } from 'react'

export default function EducationForm({ educationList, setEducationList }) {
  const [formData, setFormData] = useState({
    school: '',
    field: '',
    startDate: '',
    endDate: '',
  })

  const handleSubmit = () => {
    // copy old list, add new object, set state, clear form
    const updatedList = [...educationList]
    updatedList.push(formData)
    setEducationList(updatedList)
    setFormData({
      school: '',
      field: '',
      startDate: '',
      endDate: '',
    })
  }

  return (
    <>
      <h2>Education</h2>
      <section className='form-container'>
        <label>School Name</label>
        <input
          type='text'
          placeholder='University of Washington'
          value={formData.school}
          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
        />
        <label>Field of Study</label>
        <input
          type='text'
          placeholder='Computer Science and Engineering'
          value={formData.field}
          onChange={(e) => setFormData({ ...formData, field: e.target.value })}
        />
        <label>Start Date</label>
        <input
          type='text'
          placeholder='09/2017'
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
        />
        <label>End Date</label>
        <input
          type='text'
          placeholder='12/2022'
          value={formData.endDate}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
        />
        <button onClick={handleSubmit}>Add</button>
        {educationList.map((education, index) => (
          <div key={index}>
            <p>School: {education.school}</p>
            <p>Field of Study: {education.field}</p>
            <p>
              Dates of Study: {education.startDate} - {education.endDate}
            </p>
          </div>
        ))}
      </section>
    </>
  )
}
