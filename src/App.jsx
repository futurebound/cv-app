import { useState } from 'react'

import './App.css'
import PersonalInfoForm from './components/PersonalInfoForm'

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
        <div className='display-container'></div>
      </div>
    </>
  )
}

export default App
