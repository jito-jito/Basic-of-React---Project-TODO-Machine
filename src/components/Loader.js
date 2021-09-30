import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={25}
    viewBox="0 0 400 25"
    backgroundColor="#b758ca"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="10" y="15" rx="3" ry="3" width="410" height="6" />
  </ContentLoader>
)

export { MyLoader }
