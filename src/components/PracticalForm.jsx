import { useState } from 'react'

export default function PracticalForm({ practicalList, setPracticalList }) {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  })

  const [editIndex, setEditIndex] = useState(null)

  const handleSubmit = () => {
    // Changed from if (editIndex) to check if editIndex is not null
    if (editIndex !== null) {
      const editedList = [...practicalList]
      editedList[editIndex] = formData
      setPracticalList(editedList)
      setEditIndex(null)
    } else {
      setPracticalList([...practicalList, formData])
    }

    // clear form
    setFormData({
      company: '',
      title: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    })
  }

  const handleEdit = (index) => {
    setFormData(practicalList[index])
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const deletedList = practicalList.filter((_, i) => i !== index)
    setPracticalList(deletedList)
  }

  return (
    <>
      <h2>Practical Experience</h2>
      <section className='form-container'>
        <label>Company Name</label>
        <input
          type='text'
          placeholder='X Company'
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
        <label>Job Title</label>
        <input
          type='text'
          placeholder='High Templar'
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <label>Responsibilities</label>
        <textarea
          type='text'
          placeholder='Commanded the armada with devotion, increasing general respect by 30% YOY.'
          value={formData.responsibilities}
          onChange={(e) =>
            setFormData({ ...formData, responsibilities: e.target.value })
          }
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
        <button onClick={handleSubmit}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
        {practicalList.map((job, index) => (
          <div key={index}>
            <p>Company: {job.company}</p>
            <p>Job Title: {job.title}</p>
            <p>Responsibilities: {job.responsibilities}</p>
            <p>
              Dates of Job: {job.startDate} - {job.endDate}
            </p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </section>
    </>
  )
}
