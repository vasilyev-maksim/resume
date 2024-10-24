import * as React from "react"
import { JobItem } from "../core/JobItem"

export const Akvelon: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Akvelon",
        link: "https://akvelon.com/",
      }}
      location="Remote"
      position="Senior Full-stack Engineer"
      dates={{
        from: "May 2023",
        to: "present",
      }}
      techStack={[
        "HTML5 & CSS3",
        "CSS modules",
        "LESS",
        "TypeScript",
        "Lit",
        "GraphQL",
        "Python",
        "Node.js",
        "Go"
      ]}
      bullets={[
        "Worked as a contractor for one of the largest forum-based social networks in the U.S., with over 100 million daily active users as of 2024, where I focused mainly on SEO optimization while also contributing to UI development.",
        [
          "Made frequent updates to the LD+JSON structured data generation algorithm as requested by Google to enhance SEO metrics and improve content exposure on the Google Discover surface",
          "Made contributions (on both frontend and backend) to a Machine Translation project that translates content into multiple languages using ML models",
        ],
      ]}
    />
  )
}
