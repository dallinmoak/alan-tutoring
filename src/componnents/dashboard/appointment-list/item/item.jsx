"use client";

import Card from "@/UI/card";
import ItemMainContent from "./main-content";
import ItemAdditionalContent from "./additional-contents";
import { useState } from "react";

export default function AppointmentListItem({ appointment }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <Card type="inv">
      <ItemMainContent appointment={appointment} />
      {expanded ? (
        <ItemAdditionalContent appointment={appointment} collapse={()=> setExpanded(false)}/>
      ) : (
        <div className="flex justify-end">
          <i
            onClick={handleExpand}
            className="symbol cursor-pointer rounded p-1 hover:bg-dark-shades-darker dark:hover:bg-light-shades-"
          >
            expand_all
          </i>
        </div>
      )}
    </Card>
  );
}
