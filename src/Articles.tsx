import * as React from "react"
import { BulletedList } from "./core/BulletedList"
import { Link } from "./core/Link"
import { Section } from "./core/Section"

export const Articles: React.FC = () => {
  return (
    <Section header="Articles">
      <BulletedList
        bullets={[
          <>
            <Link
              label="Flow-based API design with Typescript"
              href="https://medium.com/front-end-weekly/flow-based-api-design-with-typescript-ba146f549f14"
            />{" "}
            (published in{" "}
            <Link
              highlight
              label="Frontend Weekly"
              href="https://frontendweekly.co/"
            />
            )
          </>,
          <>
            <Link
              label="Build your resume in React + SSG!"
              href="https://dev.to/jeckhummer/build-your-resume-in-react-ssg-10i4"
            />{" "}
            (describes how the resume you are viewing was built 😄)
          </>,
          {
            label: "Discriminated unions in Typescript: Why is it so good?",
            href: "https://medium.com/front-end-weekly/discriminated-unions-in-typescript-why-is-it-so-good-6325681b2c3e",
          },
          {
            label: "Discriminated unions in Typescript: Use cases",
            href: "https://medium.com/pashabank/discriminated-unions-in-typescript-use-cases-c01a55afb492",
          },
        ]}
      />
    </Section>
  )
}
