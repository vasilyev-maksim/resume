import * as React from "react"
import { BulletedList } from "./core/BulletedList"
import { Section } from "./core/Section"

export const Languages: React.FC = () => {
  return (
    <Section title="Languages">
      <BulletedList
        bullets={["English (B2)", "Russian (Native)", "Azerbaijani (B1)"]}
      />
    </Section>
  )
}
