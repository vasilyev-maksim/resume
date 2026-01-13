import * as React from "react"
import { BulletedList } from "./core/BulletedList"
import { Section } from "./core/Section"

export const HardSkills: React.FC = () => {
  return (
    <Section title="Hard skills">
      <BulletedList
        bullets={[
          "HTML5 & CSS3",
          "JavaScript, Typescript",
          "React.js (+ecosystem), Next.js",
          "Animations: react-spring, framer-motion, p5.js, native canvas",
          "Micro-frontends",
          "CSS Modules, styled-components, SASS, PostCSS, Tailwind.css",
          "Webpack, Parcel, Vite",
          "Node.js, Deno, Express.js, Nuxt.js",
          "All sorts of testing",
          "Docker, CircleCI, Heroku, Netlify, Deno deploy",
          "Telegram Bot API",
          "OOP, SOLID, Functional programming",
        ]}
      />
    </Section>
  )
}
