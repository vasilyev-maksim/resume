import * as React from "react"
import { JobItem } from "../core/JobItem"

export const Freelance: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Freelance",
      }}
      location="Remote"
      position="Solo Front-end Engineer"
      dates={{
        from: "Feb 2025",
        to: "present",
      }}
      techStack={[
        "HTML5 & CSS3",
        "React.js",
        "TypeScript",
        "CSS modules, styled-components",
        "zustand",
        "Nuxt.js",
      ]}
      bullets={[
        "Full ownership of front-end development for 4 gaming and near-gaming projects (for Severstal, Rostelecom, Samokat, Promsvyazbank)",
        "Built highly customized UIs from zero without using components libraries to satisfy complex (but ambitious) design requirements",
        "Implemented tons of animations of widely ranging complexity",
        "Implemented game UI and integration between the UI layer and game engine.",
      ]}
    />
  )
}
