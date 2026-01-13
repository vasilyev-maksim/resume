import * as React from "react"
import { BulletedList } from "./core/BulletedList"
import { Section } from "./core/Section"

export const SoftSkills: React.FC = () => {
  return (
    <Section title="Soft skills">
      <BulletedList
        bullets={[
          "Creativity & curiosity",
          "Fast and willing learner",
          "Critical & analytical thinking",
          "Problem solving",
          "Teamwork",
          "Leadership",
        ]}
      />
    </Section>
  )
}
