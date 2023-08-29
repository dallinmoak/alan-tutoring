"use client";

import { translations } from "@/utils/translations";

export default function Dropdown({ name, label, list, changeAction, value }) {
  const handleChange = (e) => {
    changeAction(e.target.value);
  };

  return (
    <div className="flex flex-col text-dark-shades-">
      <label className="text-light-shades-" htmlFor={name}>{label}</label>
      <select className="dark:[color-scheme:dark]" value={value} name={name} onChange={handleChange} defaultValue=''>
        <option value="" disabled>
          {translations.dropdownSelectPrompt}
        </option>
        {list.map((listItem) => {
          return (
            <option key={listItem.id} value={listItem.id}>
              {listItem.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
