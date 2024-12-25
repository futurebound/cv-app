import { useState } from 'react'

import './App.css'
import PersonalInfoForm from './components/PersonalInfoForm'
import ResumePreview from './components/ResumePreview'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <>
      <div className='content'>
        <div className='input-container'>
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
        </div>
        <div className='display-container'>
          <ResumePreview personalInfo={personalInfo} />
        </div>
      </div>
    </>
  )
}

export default App
