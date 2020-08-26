import React from "react";
import ReactDOM from "react-dom";
import Theme from "@quarkly/theme";

import MyComponent from "./MyComponent";

const theme = {
  breakpoints: {
    sm: [{ type: "max-width", value: 576 }],
    md: [{ type: "max-width", value: 768 }],
    lg: [{ type: "max-width", value: 992 }]
  },
  color: {
    dark: "#04080C",
    darkL1: "#0E1317",
    darkL2: "#191E22",
    grey: "#6F839F",
    greyD1: "#637897",
    greyD2: "#586D8E",
    light: "#F7FBFF",
    lightD1: "#EDF2F6",
    lightD2: "#E4E8EC",
    green: "#00875A",
    primary: "#0077CC",
    secondary: "#FFC400",
    orange: "#FF7C22",
    red: "#DE350B",
    purple: "#FD6DF9",
    indigo: "#9B6CFC"
  },
  size: {
    small: "5px",
    container: "150px"
  },
  transition: {
    backgroundInOut: "background-color 0.3s cubic-bezier(0, 0, 0.2, 1) 0s",
    heightInOut: "height 0.3s cubic-bezier(0, 0, 0.2, 1) 0s"
  },
  border: {
    dark: "--size-small solid --color-dark"
  },
  components: {
    box: {
      height: {
        default: "150px"
      }
    }
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Theme theme={theme}>
      <MyComponent />
    </Theme>
  </React.StrictMode>,
  rootElement
);
