import * as React from "react"
import { Section } from "../core/Section"
import { Ibit } from "./Ibit"
import { PashaBank } from "./PashaBank"
import { Profit } from "./Profit"
import { Risk } from "./Risk"
import { SmartSolutions } from "./SmartSolutions"
import { Akvelon } from "./Akvelon"

export const Experience: React.FC = () => {
  return (
    <Section header="Experience">
      <Akvelon />
      <Ibit />
      <PashaBank />
      <Risk />
      <SmartSolutions />
      <Profit />
    </Section>
  )
}
