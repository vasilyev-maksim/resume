import * as React from "react"
import { JobItem } from "../core/JobItem"
import { Link } from "../core/Link"

export const Reddit: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Reddit",
        link: "https://reddit.com/",
      }}
      location="Remote"
      position="Senior Full-stack Engineer (Contractor)"
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
        "Go",
      ]}
      bullets={[
        "Led ongoing development of Reddit’s structured data (JSON-LD) generation mechanism to meet Google’s evolving SEO requirements, improving content visibility on Google Discover across millions of indexed pages",
        "Built full-stack features (Python/Go/GraphQL backend + Lit-based frontend) for Reddit’s Machine Translation project, enabling automated translation of posts and comments into multiple languages using ML models",
        <>
          Rebuilt the{" "}
          <Link
            label="Best of Reddit"
            href="https://www.reddit.com/posts/2025/global/"
          />{" "}
          page from scratch and implemented the updated UI/UX design.
        </>,
      ]}
    />
  )
}
