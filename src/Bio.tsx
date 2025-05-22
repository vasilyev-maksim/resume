import * as React from "react"
import { MediumLink } from "./Links"

export const Bio: React.FC = () => {
  return (
    <p className="bio">
      I am a senior front-end developer with over 10 years of experience building complex web platforms of all sizes. I have over 7 years of expertise in React and TypeScript, as well as 4 years of backend development experience in Node.js, C#, and PHP. One of my most notable achievements is leading the successful implementation of a micro-frontend architecture from scratch for a major online banking platform. Additionally, I contribute as a technical writer on <MediumLink />, where I share insights on React and TypeScript.
    </p>
  )
}
