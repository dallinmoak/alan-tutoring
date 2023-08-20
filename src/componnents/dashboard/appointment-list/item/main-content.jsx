'use cilent'

import Card from "@/UI/card"
import Hyperlink from "@/UI/hyperlink";
import { translations } from "@/utils/translations";

export default function ItemMainContent({ appointment }){
  const {
    start,
    type,
    location,
    f_name,
    l_name,
  } = { ...appointment };

  const timeFormat = {
    hour: "numeric",
    minute: "numeric",
  };

  const appointmentType = (type) =>{
    const typeText=translations.fieldValues.appointmentType[type]
    if(type == "online"){
      return (
        <Hyperlink target="#">{typeText}</Hyperlink>
      )
    } else return typeText;
  }

  return(
    <Card type='inv'>
      <div className="flex justify-between text-xl">
        <div>
          {new Intl.DateTimeFormat("default").format(start)}
        </div>
        <div>
          {new Intl.DateTimeFormat("default", timeFormat).format(start)}
        </div>
      </div>
      <div className="flex">{`${translations.fieldLabels.appointmentType}:`}&nbsp;{appointmentType(type)}</div>
      {type == "in-person" ? <div>{`${translations.fieldLabels.appointmentLocation}: ${location}`}</div> : null}
      <div>{`${translations.fieldLabels.appointmentClient}: ${f_name} ${l_name}`}</div>
    </Card>
  )
}