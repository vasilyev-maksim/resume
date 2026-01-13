import * as React from "react"
import { JobItem } from "../core/JobItem"
import { Link } from "../core/Link"

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
        "Refactored and improved the billing module of an online trading platform:",
        [
          "Designed contract and made an integration with a new gateway for deposit payments, which increased payment completion rate by 20%.",
          "Migrations: class-components => react hooks, reach-router => react-router, got rid of redux",
          "Introduced service layer & dependency injection into components using context",
          "Made integration between the billing module and the platform more clean and intuitive",
        ],
        <>
          Engineered features and made improvements to startup project (
          <Link label={"VAIZ"} href={"https://vaiz.com/"} />) for managing
          projects, tasks and documentation:
        </>,
        [
          "Developed a number of extensions for tiptap.js editor, which allowed to collaborate on documents, add free form drawings, 3d models preview, Swagger API docs, etc.",
          "Implemented tree view with drag and drop support for hierarchical list of documents",
          "Comments and preferences module",
        ],
      ]}
    />
  )
}
