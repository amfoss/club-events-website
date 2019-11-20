import React from "react"

const Schedule = () => {
  return (
    <section id="schedule" className="h-100">
      <h2 className="text-center pt-4">Event Schedule</h2>
      <div className="row mt-4 p-4">
        <div className="col-md-1"/>
        <div className="col-md-5 col-sm-12">
          <table className="table lead table-hover text-center">
            <thead>
            <tr>
              <th className="text-center">Time</th>
              <th className="text-center">Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>08:00AM</td>
              <td>Arrival and Check-in</td>
            </tr>
            <tr>
              <td>09:00AM</td>
              <td>Presentation about MLH!</td>
            </tr>
            <tr>
              <td>9:15AM</td>
              <td>Workshop on "Add an FAQ Bot to Your Webpage with Microsoft Azure"</td>
            </tr>
            <tr>
              <td>10:45AM</td>
              <td>Clearing any doubts</td>
            </tr>
            <tr>
              <td>11:00AM</td>
              <td>Introduction to Hackathon,Problem Statements released</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-5">
          <table className="table lead table-hover text-center">
            <thead>
            <tr>
              <th className="text-center">Time</th>
              <th className="text-center">Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>11:15AM</td>
              <td>Hack Begins.</td>
            </tr>
            <tr>
              <td>12:00PM</td>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>3:00PM</td>
              <td>A fun activity</td>
            </tr>
            <tr>
              <td>8:30PM</td>
              <td>Hack Ends!</td>
            </tr>
            <tr>
              <td>8:30PM</td>
              <td>Final Pitching session. </td>
            </tr>
            <tr>
              <td>9:30PM</td>
              <td>Awards and closing ceremony</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Schedule