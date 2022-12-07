import { instance } from "./instance";
import { API_KEY } from "../Data/Const";

export async function getMovieBySearch() {
  const res = await fetch(
    instance.baseURL + `/search/movie?api_key=${API_KEY}&query=The`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
