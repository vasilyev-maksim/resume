import * as React from "react"
import { JobItem } from "../core/JobItem"
import { Link } from "../core/Link"

export const PashaBank: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "PASHA Bank",
        link: "https://www.pashabank.az/lang,en/",
      }}
      location="Azerbaijan"
      position="Senior Frontend Engineer & TechLead"
      dates={{
        from: "August 2018",
        to: "October 2021",
      }}
      techStack={[
        "HTML5 & CSS3",
        "PostCSS",
        "TypeScript",
        "react",
        "redux",
        "react-router",
        "react-query",
        "react-motion",
        "react-hook-form",
        "styled-components",
        "SemanticUI",
        "ESLint",
        "jest",
        "react-testing-library",
        "enzyme",
        "webpack",
        "parcel",
        "node",
        "express",
        "WebSocket",
        "Socket.io",
        "CircleCI",
        "Jenkins",
        "Docker",
      ]}
      bullets={[
        "Micro-frontends architecture design and implementation",
        <>
          Built several bank products:{" "}
          <Link
            label="Business Online Bank"
            href="https://www.pashabank.digital/"
          />
          ,{" "}
          <Link
            label="Online SME Loans"
            href="https://sme.pashabank.az/en/business-loans"
          />
          , Online Factoring, Cross-sell
        </>,
        "Configured CI/CD pipelines for front-end apps",
        "Worked in agile teams of 6-9 people",
        "Created guidelines for front-end developers",
        "Mentored 10+ junior and medior developers",
        "Interviewed 30+ candidates for front-end vacancies",
        "Organized and gave a series of educational lectures for 20+ interns (20+ hours)",
        "Organized and conducted alignment meetings across all front-end engineers",
        <>
          Additional tooling development:{" "}
          <Link
            label="Code review schedule app"
            href="https://review-schedule.web.app/review-schedule/"
          />
          , custom ESLint rules, CLI utilities for code checks in CI/CD pipeline
        </>,
      ]}
    />
  )
}
