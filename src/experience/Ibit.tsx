import * as React from "react"
import { JobItem } from "../core/JobItem"

export const Ibit: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "IBIT",
        link: "https://ibitcy.com",
      }}
      location="Cyprus"
      position="Senior Frontend Engineer"
      dates={{
        from: "December 2021",
        to: "December 2022",
      }}
      techStack={[
        "HTML5 & CSS3",
        "CSS modules",
        "SASS",
        "TypeScript",
        "react",
        "redux",
        "react-router",
        "react-query",
        "react-spring",
        "framer-motion",
        "react-virtualized",
        "tiptap",
        "vite",
        "node",
        "express",
        "mongoose",
        "WebSocket",
      ]}
      bullets={[
        "Engineered features and made improvements to startup project for managing projects, tasks and documentation:",
        [
          "Developed the design and functionality of the comments module and integrated it into the existing architecture",
          "Developed a number of extensions for tiptap editor, which allowed to collaborate on documents, add free form drawings, 3d models preview, Swagger API docs, etc.",
          "Implemented tree view with drag and drop support for hierarchical list of documents",
          "Improved user preferences module",
        ],
        "Refactored and improved the billing module of an online trading platform:",
        [
          'Designed contract and made integration with a new "gateway" mechanism for deposit payments, which increased payment completion rate by 20%.',
          "Migration to react hooks from class-components",
          "Migration to react-router from reach-router",
          "Removed redux from the project",
          "Introduced service layer & dependency (service) injection into components using context",
          "Made integration between the billing module and the platform more clean and intuitive",
          "Wrote a documentation for the entire module",
        ],
      ]}
    />
  )
}
