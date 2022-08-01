import * as React from "react";
import { Item, Section } from "react-stately";
import "./styles.css";
import { Checkbox } from "./Checkbox";

export default function App() {
  return (
    <div className="flex flex-col items-center max-w-lg">
      {/* prettier-ignore */}
      <p className="mt-8 mb-16 text-gray-600">This sandbox shows an example <strong><code>Checkbox</code></strong> component built with <a href="https://react-spectrum.adobe.com/react-aria/" rel="noreferrer" target="_blank" className="text-blue-700 underline">React Aria</a> and <a href="http://tailwindcss.com/" rel="noreferrer" target="_blank" className="text-blue-700 underline">Tailwind CSS</a> using the <code>useCheckbox</code> hook.</p>
      <Checkbox>Test</Checkbox>
    </div>
  );
}
