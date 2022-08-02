import type { AriaCheckboxProps } from "@react-types/checkbox";
import React, { useRef } from "react";
import { useToggleState } from "@react-stately/toggle";
import { useCheckbox } from "@react-aria/checkbox";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import classNames from "clsx";
import "./styles.css"

export function Checkbox(props: AriaCheckboxProps) {
  let state = useToggleState(props);
  let ref = useRef<HTMLInputElement>(null);
  let { inputProps } = useCheckbox(props, state, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  let checkboxClassName = classNames(
    state.isSelected ? "bgIndigo group-active:bg-indigo-600" : "bgWhite",
    "selected",
    props.isDisabled
      ?  "borderGrayThree"
      : isFocusVisible || state.isSelected
      ? "indigoBorder group-active:border-indigo-600"
      : "borderGrayFive group-active:border-gray-600",
    "isVisible",
    isFocusVisible ? "shadowOutline" : "",
    "transitionVisible"
  );

  let labelClassName = classNames(
    props.isDisabled
      ? "textColor"
      : "textColorGray group-active:text-gray-800",
    "userSelect"
  );

  return (
    <label style={{ display: "flex", alignItems: "center" }} className="group">
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <div className={checkboxClassName} aria-hidden="true">
        <svg  style={{
            stroke: "currentColor",
            width: "0.75rem",
            height: "0.75rem"
          }} viewBox="0 0 18 18">
          <polyline
            points="1 9 7 14 15 4"
            fill="none"
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={state.isSelected ? 44 : 66}
            style={{
              transition: "all 400ms"
            }}
          />
        </svg>
      </div>
      <span className={labelClassName}>{props.children}</span>
    </label>
  );
}
