import * as React from "react"
import { BulletedList } from "./core/BulletedList"
import { Phone } from "./core/Phone"
import { DevToLink, LinkedInLink, MediumLink, ResumeLink } from "./Links"

export const Contacts: React.FC = () => {
  return (
    <BulletedList
      className="contacts"
      bullets={[
        "Baku, Azerbaijan",
        <Phone countryCode="+994" number="107119139" />,
        {
          label: "vasilyev.maksim93@gmail.com",
          href: "mailto:vasilyev.maksim93@gmail.com",
        },
        <br />,
        <MediumLink />,
        <DevToLink />,
        <LinkedInLink />,
        <ResumeLink />,
      ]}
    />
  )
}
