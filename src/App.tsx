import * as React from "react";
// import { Item, Section } from "react-stately";
import "./styles.css";
import { Checkbox } from "./Checkbox";

export default function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "32rem"
    }}>
      {/* prettier-ignore */}
      <p style={{marginTop:'4rem',marginBottom:'8rem',color: 'rgb(75 85 99)'}}>This sandbox shows an example <strong><code>Checkbox</code></strong> component built with <a href="https://react-spectrum.adobe.com/react-aria/" rel="noreferrer" target="_blank" style={{color:'rgb(29 78 216)',textDecorationLine: 'underline'}}>React Aria</a> and <a href="http://tailwindcss.com/" rel="noreferrer" target="_blank" style={{color:'rgb(29 78 216)',textDecorationLine: 'underline'}}>Tailwind CSS</a> using the <code>useCheckbox</code> hook.</p>
      <Checkbox>Test</Checkbox>
    </div>
  );
}
