export default function ResumePreview({ personalInfo }) {
  return (
    <div>
      <h2>Resume Preview</h2>
      <section className='resume-section'>
        <h3>Personal Info</h3>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
      </section>
    </div>
  )
}
