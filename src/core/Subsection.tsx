import * as React from "react"

export const Subsection: React.FC<{
  title: React.ReactNode
  children: React.ReactNode
}> = ({ title, children }) => {
  return (
    <div className="subsection">
      <h3>{title}</h3>
      {children}
    </div>
  )
}
