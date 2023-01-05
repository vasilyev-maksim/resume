import * as React from "react"
import { JobItem } from "../core/JobItem"

export const SmartSolutions: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Smart Solutions",
        link: "https://smartsolutions.az/",
      }}
      location="Azerbaijan"
      position="Full-stack Engineer"
      dates={{
        from: "August 2015",
        to: "August 2017",
      }}
      techStack={[
        "HTML5 & CSS3",
        "JavaScript",
        "TypeScript",
        "angular",
        "react",
        "rxjs",
        "Bootstrap",
        "C#",
        "ASP.NET Core",
        "ASP.NET Web Forms",
        "Entity Framework",
        "MSSQL",
        "SNMP protocol",
      ]}
    />
  )
}
