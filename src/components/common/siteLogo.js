import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
  <a href="#/">
    <FontAwesomeIcon icon={["fas", "bus-alt"]} className="mr-2" {...props} />
  </a>
);
