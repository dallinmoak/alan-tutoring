"use client";

import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function Dropdown({
  name,
  label,
  list,
  changeAction,
  value,
  required,
  error,
}) {
  const [localVal, setLocalVal] = useState(value);

  const handleChange = (e) => {
    setLocalVal(e.target.value);
    changeAction(e.target.value);
  };
  useEffect(() => {
    setLocalVal(value);
    changeAction(value);
  }, [value]);

  const selectInner = () => {
    const content = (
      <select
        className="h-8 bg-light-shades- dark:bg-dark-shades- border-b border-b-dark-shades- dark:border-b-light-shades- focus-visible:outline-none dark:[color-scheme:dark] divide-y divide-dashed w-full"
        value={localVal ? localVal : ""}
        name={name}
        onChange={handleChange}
      >
        <option className="hidden" value="" disabled>
          {translations.dropdownSelectPrompt}
        </option>
        {list.map((listItem) => {
          return (
            <option
              className="text-base text-dark-shades- dark:text-light-shades- not-italic"
              key={listItem.id}
              value={listItem.id}
            >
              {listItem.value}
            </option>
          );
        })}
      </select>
    );
    if (localVal) {
      return content;
    } else {
      return (
        <div className="[&>select]:w-full [&>select]:italic">{content}</div>
      );
    }
  };

  const requiredContent = <div className="text-danger-">*&nbsp;</div>;

  const selectOuter = () => {
    if (error?.state) {
      return (
        <>
          <div className="text-danger- text-sm">{error?.msg}</div>
          <div className="bg-danger- [&>*]:opacity-70">{selectInner()}</div>
        </>
      );
    } else {
      return selectInner();
    }
  };

  return (
    <div className="flex flex-col">
      <label
        className="text-dark-shades- dark:text-light-shades- flex"
        htmlFor={name}
      >
        {required ? requiredContent : null}
        {label}
      </label>
      {selectOuter()}
    </div>
  );
}
