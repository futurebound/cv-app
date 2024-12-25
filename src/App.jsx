import { useState } from 'react'

import './App.css'
import EducationForm from './components/EducationForm'
import PersonalInfoForm from './components/PersonalInfoForm'
import PracticalForm from './components/PracticalForm'
import ResumePreview from './components/ResumePreview'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [educationList, setEducationList] = useState([])
  const [practicalList, setPracticalList] = useState([])

  return (
    <>
      <div className='content'>
        <section className='input-container'>
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EducationForm
            educationList={educationList}
            setEducationList={setEducationList}
          />
          <PracticalForm
            practicalList={practicalList}
            setPracticalList={setPracticalList}
          />
        </section>
        <section className='display-container'>
          <ResumePreview
            personalInfo={personalInfo}
            educationList={educationList}
            practicalList={practicalList}
          />
        </section>
      </div>
    </>
  )
}

export default App
