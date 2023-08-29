"use client";

import Dropdown from "@/UI/dropdown";
import Loading from "@/app/loading";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function SelectClient({ setSelection }) {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [error, setError] = useState();

  const getClients = async () => {
    fetch("/api/clients")
      .then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            setClients(
              data.map((datum) => {
                return {
                  id: datum.id,
                  value: `${datum.f_name} ${datum.l_name}`,
                };
              })
            );
          });
        } else {
          res.json().then((e) => {
            console.log(e);
            setError(e);
          });
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChangeClient = (newClient) => {
    setSelection(newClient)
  }

  const clientListDisplay = () => {
    if (clients.length) {
      return (
        <Dropdown
          name="client"
          label={translations.fieldLabels.appointmentClient}
          list={clients}
          changeAction={handleChangeClient}
        />
      );
    } else return "error";
  };

  useEffect(() => {
    getClients();
  }, []);

  return <>{loading ? <Loading /> : clientListDisplay()}</>;
}
