import { Series } from "@/types";

const url =
  "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=10&limit_suggestions=10&lang=en";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8fd290f142msha910e016bf6105fp134a44jsnc9cf0818de6f",
    "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
  },
};
const api = {
  series: {
    list: async (): Promise<Series> => {
      let data = await fetch(url, options)
        .then((res) => res.json())
        // .then((json) => console.log(json))
        .catch((err) => console.error("error:" + err));
      return data as Series;
    },
  },
};
export default api;
