import { API_KEY } from "../Data/Const";
import { instance } from "./instance";

export async function getTrendingMovies() {
  const res = await fetch(
    instance.baseURL + "trending/movie/day?api_key=" + API_KEY
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTopRated() {
  const res = await fetch(
    instance.baseURL + "movie/top_rated?api_key=" + API_KEY
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getUpcoming() {
  const res = await fetch(
    instance.baseURL + "movie/upcoming?api_key=" + API_KEY
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
