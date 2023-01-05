import * as React from "react"
import { BulletedList } from "./core/BulletedList"
import { Section } from "./core/Section"

export const HardSkills: React.FC = () => {
  return (
    <Section header="Hard skills">
      <BulletedList
        bullets={[
          "HTML5 & CSS3",
          "JavaScript, Typescript",
          "React.js + ecosystem (Redux, etc.)",
          "SASS, PostCSS, CSS Modules, styled-components",
          "Bundlers (Webpack, Parcel, Vite)",
          "Express.js, Node.js",
          "Micro-frontends",
          "OOP, SOLID, Patterns",
          "Unit & E2E Testing",
          "CI/CD (CircleCI, Heroku, Netlify)",
          "Agile, Scrum",
          "UX, Animations",
        ]}
      />
    </Section>
  )
}
