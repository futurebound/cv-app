export default function ResumePreview({
  personalInfo,
  educationList,
  practicalList,
}) {
  return (
    <div>
      <h2>Resume Preview</h2>
      <section className='resume-section'>
        <h3>Personal Info</h3>
        <p>
          {personalInfo.name} | {personalInfo.email} | {personalInfo.phone}
        </p>
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
      <section className='resume-section'>
        <h3>Practical Experience</h3>
        {practicalList.map((job, index) => (
          <div key={index}>
            <p>Company: {job.company}</p>
            <p>Job Title: {job.title}</p>
            <p>Responsibilities: {job.responsibilities}</p>
            <p>
              Dates of Job: {job.startDate} - {job.endDate}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}
