import StudentCard from './components/StudentCard';
import profileImage from './assets/image.png';
import './App.css';
export default function App() {
  return (
    <>
      <StudentCard
        profileImage={profileImage}
        name='John S. Fallah'
        id='213093564'
        age='20'
        gender='Male'
        address='123 Main St, NewYork, USA'
        university='Harvard University'
        department='Computer Science'
        year={2026}
        cgpa={4.0}
        isGraduated={true}
        skills={[
          'Programming',
          'Web Development',
          'Communication',
          'Problem Solving',
        ]}
      />
    </>
  );
}
