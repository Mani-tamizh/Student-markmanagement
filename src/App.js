import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [marks, setMarks] = useState([0, 0, 0, 0, 0]);

  const handleMarksChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = parseFloat(value) || 0;
    setMarks(newMarks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
    const percentage = (totalMarks / 500) * 100;

    const newStudent = {
      studentName,
      studentId,
      courseName,
      marks,
      percentage
    };

    setStudents([...students, newStudent]); // Add new student to the list

    // Clear input fields for the next entry
    setStudentName('');
    setStudentId('');
    setCourseName('');
    setMarks([0, 0, 0, 0, 0]);
  };

  return (
    <div className="App scroll">
      <h1 className='scroll'>Student Result Management</h1>
      <form onSubmit={handleSubmit} className='scroll'>
        <label className='scroll'>
          Student Name:&nbsp;
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            className='scroll'
          />
        </label>
        <br />
        <label className='scroll'>
          Student ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className='scroll'
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='scroll'>
          Course Name:&nbsp;
          <input className='scroll'
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <br />
        {marks.map((mark, index) => (
          <label key={index} className='scroll'>
            Subject {index + 1} Marks:&nbsp;
            <input className='scroll'
              type="number"
              value={mark}
              onChange={(e) => handleMarksChange(index, e.target.value)}
              required
            />
            <br />
          </label>
        ))}
        <button type="submit" className='scroll'>Submit</button>
      </form>

      <h2 className='scroll'>All Students Results</h2>
      {students.map((student, index) => (
        <div key={index} className="student-result scroll">
          <p className='scroll'>Student Name: {student.studentName}</p>
          <p>Student ID: {student.studentId}</p>
          <p>Course Name: {student.courseName}</p>
          <p>Marks: {student.marks.join(', ')}</p>
          <p>Percentage: {student.percentage.toFixed(2)}%</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
