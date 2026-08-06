import StudentCard from './components/StudentCard';
import profileImage from './assets/image.png';
import './App.css';
export default function App() {
  return (
    <>
      <div className='student-card-grid'>
        {/* student 1 */}
        <StudentCard
          profileImage={profileImage}
          name='John S. Fallah'
          id={213093564}
          age={21}
          gender='Male'
          address={{
            street: '123 Main St',
            city: 'NewYork',
            country: 'USA',
          }}
          education={{
            university: 'Harvard University',
            department: 'Computer Science',
            year: 2026,
            cgpa: 4.0,
          }}
          isGraduated={true}
          skills={[
            'Programming',
            'Web Development',
            'Communication',
            'Problem Solving',
          ]}
          contact={{
            phone: '+91 842-388-6087',
            email: 'john@gmail.com',
          }}
        />

        {/* student 2 */}
        <StudentCard
          profileImage='https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1lcmljYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D'
          name='Mary Johnson'
          id={213093565}
          age={19}
          gender='Female'
          address={{
            street: 'Monroe St',
            city: 'NewYork',
            country: 'USA',
          }}
          education={{
            university: 'Stanford University',
            department: 'Information Technology',
            year: 2025,
            cgpa: 3.8,
          }}
          isGraduated={false}
          skills={[
            'Programming',
            'Web Development',
            'Communication',
            'Problem Solving',
          ]}
          contact={{
            phone: '+91 842-388-6087',
            email: 'mary@gmail.com',
          }}
        />
        {/* student 3 */}
        <StudentCard
          profileImage='https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg'
          name='Peter Brown'
          id={213093566}
          age={22}
          gender='Male'
          address={{
            street: '123 Main St',
            city: 'NewYork',
            country: 'USA',
          }}
          education={{
            university: 'Harvard University',
            department: 'Computer Science',
            year: 2026,
            cgpa: 4.0,
          }}
          isGraduated={true}
          skills={[
            'Programming',
            'Web Development',
            'Communication',
            'Problem Solving',
          ]}
          contact={{
            phone: '+91 908886087',
            email: 'peter@gmail.com',
          }}
        />
        {/* student 4 */}
        <StudentCard
          profileImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWq98dHvAKua7AQkycejdAvSQoLD-d_E73FP44rYqN3g&s=10'
          name='Paul K. Davies'
          id={213093567}
          age={25}
          gender='Male'
          address={{
            street: '123 Main St',
            city: 'NewYork',
            country: 'USA',
          }}
          education={{
            university: 'Harvard University',
            department: 'Computer Science',
            year: 2026,
            cgpa: 4.0,
          }}
          isGraduated={true}
          skills={[
            'Programming',
            'Web Development',
            'Communication',
            'Problem Solving',
          ]}
          contact={{
            phone: '+91 842-388-6087',
            email: 'paul@gmail.com',
          }}
        />
        {/* student 5 */}
        <StudentCard
          profileImage='https://www.gngmodels.com/wp-content/uploads/2025/05/DSC_5721-copy-a.jpg'
          name='Magret  Fallah'
          id={213093568}
          age={20}
          gender='Female'
          address={{
            street: '123 Main St',
            city: 'NewYork',
            country: 'USA',
          }}
          education={{
            university: 'Harvard University',
            department: 'Computer Science',
            year: 2026,
            cgpa: 3.9,
          }}
          isGraduated={true}
          skills={[
            'Programming',
            'Web Development',
            'Communication',
            'Problem Solving',
          ]}
          contact={{
            phone: '+91 842-388-6087',
            email: 'magret@gmail.com',
          }}
        />
      </div>
      <footer className='footer'>
        <p>&copy; 2026 John S. Fallah</p>
      </footer>
    </>
  );
}
