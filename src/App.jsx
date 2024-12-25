import { useState } from 'react'

import './App.css'
import EducationForm from './components/EducationForm'
import PersonalInfoForm from './components/PersonalInfoForm'
import ResumePreview from './components/ResumePreview'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [educationList, setEducationList] = useState([])

  return (
    <>
      <div className='content'>
        <div className='input-container'>
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EducationForm
            educationList={educationList}
            setEducationList={setEducationList}
          />
        </div>
        <div className='display-container'>
          <ResumePreview
            personalInfo={personalInfo}
            educationList={educationList}
          />
        </div>
      </div>
    </>
  )
}

export default App
