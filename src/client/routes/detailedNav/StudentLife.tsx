import { studentLife } from "routes/routes";

const StudentLife = () => {
  return (
    <div>
      <h2>VIE DE L'ÉTUDIANT</h2>
      <ul>
        <a href={studentLife.clubs}>Clubs</a>
        <a href={studentLife.noticeToStudents}>Avis aux Étudiants </a>
      </ul>
    </div>
  );
};

export default StudentLife;
