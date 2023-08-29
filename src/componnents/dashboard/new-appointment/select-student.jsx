"use client";
import Dropdown from "@/UI/dropdown";
import Loading from "@/app/loading";
import NewAppointment from "@/app/teacher/new-appointment/page";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function SelectStudent({ client_id, changeAction, value }) {
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
    getStudents(client_id);
  }, [client_id]);

  if (loading) {
    return <Loading />;
  } else {
    return students.length ? (
      <Dropdown
        name="student"
        label={translations.fieldLabels.appointmentStudentName}
        list={students}
        changeAction={changeAction}
        value={value}
      />
    ) : null;
  }
}
