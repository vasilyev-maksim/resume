import * as React from "react"
import { Link } from "./core/Link"

export const MediumLink: React.FC = () => (
  <Link label="Medium" href="https://vasilyev-maksim.medium.com/" />
)
export const DevToLink: React.FC = () => (
  <Link label="Dev.to" href="https://dev.to/jeckhummer" />
)
export const LinkedInLink: React.FC = () => (
  <Link
    label="LinkedIn"
    href="https://www.linkedin.com/in/maksim-vasilyev-09099a77/"
  />
)
export const ResumeLink: React.FC = () => (
  <Link
    label="Online resume"
    href="https://vasilyev-maksim.github.io/resume/"
  />
)
