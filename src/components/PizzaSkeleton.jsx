import React from "react";
import ContentLoader from "react-content-loader";

export default function PizzaSkeleton() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={491}
      viewBox="0 0 280 491"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="1" y="272" rx="3" ry="3" width="280" height="27" /> 
      <rect x="1" y="312" rx="3" ry="3" width="280" height="88" /> 
      <rect x="16" y="432" rx="3" ry="3" width="90" height="27" /> 
      <rect x="125" y="423" rx="25" ry="25" width="151" height="45" /> 
      <circle cx="138" cy="127" r="125" />
     </ContentLoader>
  )
}