import React from 'react'
import Status from './status'

const HackerList = (props) => {

  return (
    <table className="ui selectable celled table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th>Specialty</th>
          <th>Secret Address</th>
          <th>Phone</th>
          <th>DOB</th>
          <th>Last Message</th>
        </tr>
      </thead>
      <tbody>
        {
          props.hackers.map(hacker => (
            <tr key={hacker._id}>
              <td>
                <Status status={hacker.status}></Status>
              </td>
              <td>{hacker.name}</td>
              <td>{hacker.specialty}</td>
              <td>{hacker.address}</td>
              <td>{hacker.phone}</td>
              <td>{hacker.dob}</td>
              <td>{hacker.statusMessage}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default HackerList
