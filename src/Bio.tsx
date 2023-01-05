import * as React from "react"
import { MediumLink } from "./Links"

export const Bio: React.FC = () => {
  return (
    <p className="bio">
      I'm a senior frontend developer with 8+ years of experience in creating
      complex web platforms of all sizes (6+ year using React and Typescript, 4
      years of backend development experience using Node.js, C# and PHP). My
      greatest accomplishment to date is the successful implementation of a
      micro-frontend architecture from scratch in a major online banking
      platform. Also, I am a technical writer on <MediumLink />, where I share
      my knowledge of React and TypeScript.
    </p>
  )
}
