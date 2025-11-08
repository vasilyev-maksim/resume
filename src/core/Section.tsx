import * as React from "react"

export const Section: React.FC<{
  title: React.ReactNode
  children: React.ReactNode
}> = ({ title, children }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
