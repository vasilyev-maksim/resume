import * as React from "react"
import { JobItem } from "../core/JobItem"
import { Link } from "../core/Link"

export const Risk: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "R.I.S.K.",
        link: "https://www.risk.az/",
      }}
      location="Azerbaijan"
      position="Senior Full-stack Engineer"
      dates={{
        from: "August 2017",
        to: "August 2018",
      }}
      techStack={[
        "HTML5 & CSS3",
        "TypeScript",
        "vue.js",
        "Bootstrap",
        "C#",
        "ASP.NET Core",
        "Entity Framework",
        "Oracle DB",
        "RabbitMQ",
        "SignalR",
        "CentOS",
        "Nginx",
        "ELK stack",
        "LINQPad (my love ♥)",
      ]}
      bullets={[
        <>
          Participated in the development of a system that helped more than 5000
          families in need to purchase affordable apartments (
          <Link label="MIDA" href="https://mida.gov.az/en/" /> - State Housing
          Development Agency of the Republic of Azerbaijan)
        </>,
        "Carried out load testing with subsequent optimization of the infrastructure, code and database, which allowed the system to withstand peak loads (about 20K requests simultaneously)",
        "Set up load balancers and proxies using Nginx and CentOS servers",
        "Set up ELK stack for storing logs and collecting data for analytics",
      ]}
    />
  )
}
