"use client";
import Field from "./field";
import Loading from "@/app/loading";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function SelectStudent({ data }) {
  const { client_id, changeAction, value, error } = { ...data };
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const getStudents = async (id) => {
    const urlString = `/api/students?client_id=${id}`;
    fetch(urlString)
      .then((res) => {
        if (res.status != 200) {
          res.json().then((e) => {
            console.log(e);
          });
        } else {
          res.json().then((data) => {
            setStudents(
              data.map((student) => {
                return {
                  id: student.id,
                  value: `${student.f_name} ${student.l_name}`,
                };
              })
            );
          });
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (client_id) {
      getStudents(client_id);
    }
  }, [client_id]);

  if(!client_id){
    return null;
  } else if (loading) {
    return <Loading />;
  } else {
    const fieldData = {
      type: "dropdown",
      name: "student",
      value: value,
      label: translations.fieldLabels.appointmentStudentName,
      list: students,
      changeAction: changeAction,
      required: true,
      error: error,
    };
    return students.length ? <Field data={fieldData} /> : null;
  } 
}
