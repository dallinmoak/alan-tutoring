"use cilent";

import Hyperlink from "@/UI/hyperlink";
import { translations } from "@/utils/translations";

export default function ItemMainContent({ appointment }) {
  const { start, type, location, f_name, l_name, meeting_link, id } = {
    ...appointment,
  };

  const timeFormat = {
    hour: "numeric",
    minute: "numeric",
  };

  const appointmentType = (type) => {
    const typeText = translations.fieldValues.appointmentType[type];
    if (type == "online") {
      return (
        <Hyperlink target={meeting_link} internal={false} shade="darker">
          {typeText}
        </Hyperlink>
      );
    } else return typeText;
  };

  return (
    <>
      <div className="flex justify-between text-xl">
        <div>{new Intl.DateTimeFormat("default").format(start)}</div>
        <div>
          {new Intl.DateTimeFormat("default", timeFormat).format(start)}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex mr-4">
          {`${translations.fieldLabels.appointmentType}:`}&nbsp;
          {appointmentType(type)}
        </div>
        {type == "in-person" ? (
          <div>{`${translations.fieldLabels.appointmentLocation}: ${location}`}</div>
        ) : null}
      </div>
      <div>{`${translations.fieldLabels.appointmentClient}: ${f_name} ${l_name}`}</div>
    </>
  );
}
