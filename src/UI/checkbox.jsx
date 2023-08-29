"use client";

export default function Checkbox({
  label,
  action = (e) => e.preventDefault(),
  editable = false,
  value,
}) {

  const checkBoxOnChange = (e) =>{
    action(e.target.checked)
  } 

  if (editable) {
    return (
      <>
        <label>{`${label}: `}</label>
        <input className="dark:[color-scheme:dark]" type="checkbox" value={value} onChange={checkBoxOnChange} />
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
