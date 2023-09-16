"use client";

import Checkbox from "@/UI/checkbox";
import Dropdown from "@/UI/dropdown";
import FormInput from "@/UI/input";

export default function Field({ data }) {
  const { type, name, label, value, defaultValue, changeAction, list, required, error} = {
    ...data,
  };
  if (type == "dropdown") {
    return (
      <Dropdown
        required={required}
        value={value}
        name={name}
        label={label}
        changeAction={changeAction}
        list={list}
        error={error}
      />
    );
  } else if (type == "text" || type == "datetime-local" || type == "number") {
    const inputData = {
      type: type,
      name: name,
      label: label,
      value: value,
      defaultValue: defaultValue,
      changeAction: changeAction,
      required: required,
      error: error,
    };
    return <FormInput info={inputData} />;
  } else if (type == "checkbox") {
    return <Checkbox label={label} action={changeAction} editable={true} value={value} />
  }
}
