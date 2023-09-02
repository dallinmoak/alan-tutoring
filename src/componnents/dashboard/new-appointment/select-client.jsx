"use client";

import Loading from "@/app/loading";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";
import Field from "./field";

export default function SelectClient({ setSelection }) {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [detailedClients, setDetailedClients] = useState([]);
  const [error, setError] = useState();

  const getClients = async () => {
    fetch("/api/clients")
      .then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            setDetailedClients(data);
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
    const detailsList = detailedClients.filter(
      (details) => details.id == newClient
    );
    const details = detailsList.length > 0 ? detailsList[0] : undefined;
    setSelection(newClient, details);
  };

  const clientListDisplay = () => {
    if (clients.length) {
      const fieldData = {
        required: true,
        type: 'dropdown',
        value: '',
        name: 'client',
        label: translations.fieldLabels.appointmentClient,
        list: clients,
        changeAction: handleChangeClient
      }
      return (
        <Field data={fieldData}/>
      );
    } else return "error";
  };

  useEffect(() => {
    getClients();
  }, []);

  return <>{loading ? <Loading /> : clientListDisplay()}</>;
}
