import * as React from "react"
import { Section } from "../core/Section"
import { Ibit } from "./Ibit"
import { PashaBank } from "./PashaBank"
import { Profit } from "./Profit"
import { Risk } from "./Risk"
import { SmartSolutions } from "./SmartSolutions"
import { Reddit } from "./Reddit"

export const Experience: React.FC = () => {
  return (
    <Section header="Experience">
      <Reddit />
      <Ibit />
      <PashaBank />
      <Risk />
      <SmartSolutions />
      <Profit />
    </Section>
  )
}
