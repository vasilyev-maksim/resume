import * as React from "react"
import { EducationItem } from "./core/EducationItem"
import { Section } from "./core/Section"

export const Education: React.FC = () => {
  return (
    <Section title="Education">
      <EducationItem
        institution={{
          name: "Lomonosov Moscow State University",
          href: "http://lomonosov.university/",
        }}
        location="Baku, Azerbaijan"
        degree="Bachelor's degree"
        faculty="Applied Mathematics"
        dates={{
          from: "2010",
          to: "2014",
        }}
      />
    </Section>
  )
}
