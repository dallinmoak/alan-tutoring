"use client";

export default function Checkbox({
  label,
  action = (e) => e.preventDefault(),
  editable = false,
  value,
}) {
  if (editable) {
    return (
      <>
        <label>{`${label}: `}</label>
        <input type="checkbox" onChange={action} />;
      </>
    );
  } else {
    return (
      <div className="flex">
        <label>{`${label}: `}</label>
        <i className="symbol">
          {value ? "check_box" : "check_box_outline_blank"}
        </i>
      </div>
    );
  }
}
