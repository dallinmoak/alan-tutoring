"use client";

import Hyperlink from "@/UI/hyperlink";
import Checkbox from "@/UI/checkbox";
import { translations } from "@/utils/translations";

export default function ItemAdditionalContent({ appointment, collapse }) {
  const { start, end, topic, student_f_name, student_l_name, paid, price } = {
    ...appointment,
  };

  const intervalInMinutes = (istart, iend) => {
    return Math.round((iend - istart) / 1000 / 60);
  };

  const paidMsgClasses = {
    true: "text-success- dark:text-success-darker",
    false: "text-danger- dark:text-danger-darker",
  };

  return (
    <div className="bg-dark-shades- dark:bg-light-shades- p-1 rounded-lg">
      <div className="flex justify-between">
        <div className="px-1">
          {translations.fieldLabels.appointmentDuration(
            intervalInMinutes(start, end)
          )}
        </div>
        <div className="px-1">
          {
            <Hyperlink target="#" shade="lighter">
              {translations.fieldLabels.appointmentClientProfileLink}
            </Hyperlink>
          }
        </div>
      </div>
      <div className="flex justify-between">
        <div className="px-1">
          {`${translations.fieldLabels.appointmentStudentName}: ${student_f_name} ${student_l_name}`}
        </div>
        {topic ? (
          <div className="px-1">
            {`${translations.fieldLabels.appointmentTopic}: ${topic}`}
          </div>
        ) : null}
      </div>
      <div className="flex justify-between">
        <div className="px-1">
          {translations.fieldLabels.appointmentPrice(price)}
        </div>
        <div className="px-1">
          <div className="[&>span]:flex">
            <span className={paidMsgClasses[paid]}>
              <i className="symbol">{paid ? "done" : "close"}</i>
              {translations.fieldValues.appointmentPaid[paid]}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <i
          onClick={collapse}
          className="symbol cursor-pointer rounded p-1 hover:bg-dark-shades-lighter dark:hover:bg-light-shades-darker"
        >
          collapse_all
        </i>
      </div>
    </div>
  );
}
