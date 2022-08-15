import { FetchEvent } from "next/dist/server/web/spec-compliant/fetch-event";
import { useEffect } from "react";

import { useState } from "react";
import { Relatorio } from "../../@types/Relatorio";
import { getAPIClient } from "../../services/axios";

export function useRelatorio() {
  const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);
  const { api, AuthHeader } = getAPIClient();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/adocao", AuthHeader);
      setListaRelatorio(response.data);
    }
    return () => {
      fetchData()
    };
  }, [AuthHeader, api]);

  return { listaRelatorio };
}
