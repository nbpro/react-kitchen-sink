type ColorTemplate = {
  bg: string;
  shadowColor: string;
  fg: string;
  border: string;
  shadow: string;
  subText: string;
};

export const lineHeight = "1.5em";

export const borderRadius = "4px";

export const primary: ColorTemplate = {
  bg: "#48a007",
  border: "#006600",
  shadowColor: "#006600",
  fg: "white",
  shadow: "#006600 2px 2px 4px",
  subText: "#006600",
};

export const standard: ColorTemplate = {
  bg: "#eee",
  border: "#ccc",
  shadowColor: "#666",
  fg: "#666",
  shadow: "#eee 2px 2px 4px",
  subText: "#aaa",
};

export const plain: ColorTemplate = {
  bg: "white",
  border: "#ccc",
  shadowColor: "#666",
  fg: "#666",
  shadow: "#eee 2px 2px 4px",
  subText: "#aaa",
};

export const fg = "#333";

export const Link = {
  fontSize: "0.8em",
  marginTop: "4px",
  marginRight: "0.3em",
  borderRadius: "4px",
  padding: "0.2em 1em",
  cursor: "pointer",
  textDecoration: "none",
};

import 'antd/dist/antd.css';
