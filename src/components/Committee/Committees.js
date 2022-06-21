import * as React from "react"
import { CommitteesStyles } from "./CommitteeStyles"
import "./Committee.css"
import CommitteeCard from "./CommitteeCard"

const Committees = ({ committees }) => {
  return (
    <CommitteesStyles className="section">
      <div className="container">
        <h1>COMMITTEES</h1>

        <h2>Crisis</h2>
        {committees.map((committee) => (
          <CommitteeCard data={committee} />
        ))}

        <h2>Non-Crisis</h2>
        {committees.map((committee) => (
          <CommitteeCard data={committee} />
        ))}
      </div>
    </CommitteesStyles>
  )
}

export default Committees
