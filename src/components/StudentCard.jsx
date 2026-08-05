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
}) {
  return (
    <>
      {/* header section */}
      <header className='header'>
        <img src={profileImage} alt='profile-image' />
        <h1>Name: {name}</h1>
        <p>ID: {id}</p>
      </header>

      {/* Main */}
      <main className='main-container'>
        {/* Personal Info */}
        <section className='personal-info'>
          <h2>Personal Information</h2>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Address: {address}</p>
        </section>

        {/* academic info */}
        <section className='academic-info'>
          <h2>Academic Information</h2>
          <p>University: {university}</p>
          <p> Department: {department}</p>
          <p>Year: {year}</p>
          <p>GPA: {cgpa.toFixed(2)}</p>
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
          <a href='tel: +91 842-388-6087'> +91 842-388-6087</a> <br />
          <a href='mailto: john@gmail'>john@gmail</a>
        </section>

        {/* graduation status */}
        <section className='graduation-status'>
          <h2>Graduation Status</h2>
          <p> {isGraduated ? 'Graduated' : 'Not Graduated'} </p>
        </section>
      </main>

      {/* footer */}
      <footer className='footer'>
        <p>&copy; 2026 John S. Fallah</p>
      </footer>
    </>
  );
}
