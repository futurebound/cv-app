export default function ResumePreview({ personalInfo, educationList }) {
  return (
    <div>
      <h2>Resume Preview</h2>
      <section className='resume-section'>
        <h3>Personal Info</h3>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
      </section>
      <section className='resume-section'>
        <h3>Education</h3>
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
    </div>
  )
}
