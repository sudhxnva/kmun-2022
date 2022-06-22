import * as React from "react"
import { CommitteesStyles } from "./CommitteeStyles"
import "./Committee.css"
import CommitteeCard from "./CommitteeCard"

const Committees = ({ committees }) => {
  const crisisCommittees = committees.filter((c) => c.crisis)
  const nonCrisisCommittees = committees.filter((c) => !c.crisis)

  return (
    <CommitteesStyles className="section">
      <div className="container">
        <h1>COMMITTEES</h1>

        <h2>Crisis</h2>
        {crisisCommittees.map((committee) => (
          <CommitteeCard data={committee} key={committee.id} />
        ))}

        <h2>Non-Crisis</h2>
        {nonCrisisCommittees.map((committee) => (
          <CommitteeCard data={committee} key={committee.id} />
        ))}
      </div>
    </CommitteesStyles>
  )
}

export default Committees
