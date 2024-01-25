// import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";

const fetchDataBank = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http
    .get(_key, { params: _params })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });

  return data.data;
};

const useBankDataQuery = (options) => {
  return useQuery([API_ENDPOINT.DATA_BANK, options], fetchDataBank);
};

export { fetchDataBank, useBankDataQuery };
