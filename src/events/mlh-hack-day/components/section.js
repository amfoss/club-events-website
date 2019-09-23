import React from "react"

const section = ({
     align, background, title, content
}) => {
  return (
    <div className="mlh-section" style={{ 'textAlign': align, 'backgroundColor': background }}>
      <h3>{title}</h3>
      <div>
        {content}
      </div>
    </div>
  )
}

export default section