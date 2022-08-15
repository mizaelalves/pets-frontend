import { FetchEvent } from "next/dist/server/web/spec-compliant/fetch-event";
import { useEffect } from "react";

import { useState } from "react";
import { Relatorio } from "../../@types/Relatorio";
import { getAPIClient } from "../../services/axios";

export function useRelatorio() {
  const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);
  const { api, AuthHeader } = getAPIClient();

  useEffect(() => {
    api.get("/adocao/", AuthHeader).then((response) => {
      setListaRelatorio(response.data);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { listaRelatorio };
}
