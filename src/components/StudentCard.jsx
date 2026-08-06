export default function StudentCard({
  profileImage,
  name,
  id,
  age,
  gender,
  address,
  university,
  department,
  year,
  cgpa,
  isGraduated,
  skills,
  contact,
  email,
}) {
  return (
    <article className='student-card'>
      {/* header section */}
      <header className='header'>
        <img src={profileImage} alt='profile-image' />
        <h1>{name}</h1>
        <p>{id}</p>
      </header>

      {/* Main */}
      <main className='main-container'>
        {/* Personal Info */}
        <section className='personal-info'>
          <h2>Personal Information</h2>
          <p>
            <span>Age</span>
            <strong>{age}</strong>
          </p>
          <p>
            <span>Gender</span>
            <strong>{gender}</strong>
          </p>
          <p>
            <span>Address</span>
            <strong>{address}</strong>
          </p>
        </section>

        {/* academic info */}
        <section className='academic-info'>
          <h2>Academic Information</h2>
          <p>
            <span>University</span>
            <strong>{university}</strong>
          </p>
          <p>
            <span>Department</span>
            <strong>{department}</strong>
          </p>
          <p>
            <span>Year</span>
            <strong>{year}</strong>
          </p>
          <p>
            <span>GPA</span>
            <strong>{cgpa.toFixed(2)}</strong>
          </p>
        </section>

        {/* Skills section */}
        <article className='skills'>
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </article>

        {/* contact */}
        <section className='contact'>
          <h2>Contact</h2>
          <a href={`tel:${contact}`}> {contact}</a> <br />
          <a href={`mailto:${email}`}> {email}</a>
        </section>

        {/* graduation status */}
        <section className='graduation-status'>
          <h2>Graduation Status</h2>
          <p className={isGraduated ? 'graduated' : 'not-graduated'}>
            {' '}
            {isGraduated ? 'Graduated' : 'Not Graduated'}{' '}
          </p>
        </section>
      </main>

      {/* footer */}
      <footer className='footer'>
        <p>&copy; 2026 John S. Fallah</p>
      </footer>
    </article>
  );
}
