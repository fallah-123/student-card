export default function StudentCard({
  profileImage,

  name,
  id,
  age,
  gender,
  address,
  education,
  isGraduated,
  skills,
  contact,
}) {
  return (
    <article className='student-card'>
      {/* header section */}
      <header className='header'>
        <img src={profileImage} alt={`${name} Profile`} />
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
            <strong>
              {address.street}, {address.city}, {address.country}
            </strong>
          </p>
        </section>

        {/* academic info */}
        <section className='academic-info'>
          <h2>Academic Information</h2>
          <p>
            <span>University</span>
            <strong>{education.university}</strong>
          </p>
          <p>
            <span>Department</span>
            <strong>{education.department}</strong>
          </p>
          <p>
            <span>Year</span>
            <strong>{education.year}</strong>
          </p>
          <p>
            <span>GPA</span>
            <strong>{education.cgpa.toFixed(2)}</strong>
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
          <a href={`tel:${contact.phone}`}> {contact.phone}</a> <br />
          <a href={`mailto:${contact.email}`}> {contact.email}</a>
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
    </article>
  );
}
