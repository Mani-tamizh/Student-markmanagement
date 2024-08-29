import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [marks, setMarks] = useState([0, 0, 0, 0, 0]);
  const [result, setResult] = useState(null);

  const handleMarksChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = parseFloat(value) || 0;
    setMarks(newMarks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
    const percentage = (totalMarks / 500) * 100;
    setResult({ studentName, studentId, courseName, marks, percentage });
  };

  return (
    <div className="App">
      <h1>Student Result Management</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:&nbsp;
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Student ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Course Name:&nbsp;
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <br />
        {marks.map((mark, index) => (
          <label key={index}>
            Subject {index + 1} Marks:&nbsp;
            <input
              type="number"
              value={mark}
              onChange={(e) => handleMarksChange(index, e.target.value)}
              required
            />
            <br />
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>

      {result && (
        <div>
          <h2>Result</h2>
          <p>Student Name: {result.studentName}</p>
          <p>Student ID: {result.studentId}</p>
          <p>Course Name: {result.courseName}</p>
          <p>Marks: {result.marks.join(', ')}</p>
          <p>Percentage: {result.percentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default App;