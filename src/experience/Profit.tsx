import * as React from "react"
import { JobItem } from "../core/JobItem"

export const Profit: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Professional IT",
        link: "https://profit.az/",
      }}
      location="Azerbaijan"
      position="Full-stack Engineer"
      dates={{
        from: "August 2014",
        to: "August 2015",
      }}
      techStack={[
        "HTML5 & CSS3",
        "JavaScript",
        "PHP",
        "Kohana",
        "Yii 2",
        "MySQL",
      ]}
    />
  )
}
