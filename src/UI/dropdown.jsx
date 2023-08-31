"use client";

import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function Dropdown({ name, label, list, changeAction, value }) {
  const [localVal, setLocalVal] = useState(value);

  const handleChange = (e) => {
    setLocalVal(e.target.value);
    changeAction(e.target.value);
  };
  useEffect(()=>{
    setLocalVal(value);
    changeAction(value);
  },[value])

  const selectInner = (
    <select
      className="h-8 bg-light-shades- dark:bg-dark-shades- border-b border-b-dark-shades- dark:border-b-light-shades- focus-visible:outline-none dark:[color-scheme:dark] divide-y divide-dashed"
      value={localVal}
      name={name}
      onChange={handleChange}
      // defaultValue=""
    >
      <option className="hidden" value="" disabled>
        {translations.dropdownSelectPrompt}
      </option>
      {list.map((listItem) => {
        return (
          <option className="text-base text-dark-shades- dark:text-light-shades- not-italic" key={listItem.id} value={listItem.id}>
            {listItem.value}
          </option>
        );
      })}
    </select>
  );

  return (
    <div className="flex flex-col">
      <label
        className="text-dark-shades- dark:text-light-shades-"
        htmlFor={name}
      >
        {label}
      </label>
      {localVal ? (
        selectInner
      ) : (
        <div className="[&>select]:w-full [&>select]:italic">
          {selectInner}
        </div>
      )}
    </div>
  );
}