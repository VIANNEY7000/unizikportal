import React from 'react'
import './Results.css'

const Results = () => {
  const data = [
    { subject: 'Mathematics', score: 85, grade: 'A', remark: 'Excellent' },
    { subject: 'English', score: 78, grade: 'B', remark: 'Good' },
    { subject: 'Chemistry', score: 65, grade: 'C', remark: 'Fair' },
  ]

  return (
    <div className="results">
      <h1>Student Results</h1>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Score</th>
            <th>Grade</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.score}</td>
              <td>{item.grade}</td>
              <td>{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Results