export const TMDB_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_API_URL,
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  //   const endpoint = query
  //     ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
  //     : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const url = query
    ? TMDB_CONFIG.BASE_URL! + `&s=${encodeURIComponent(query)}`
    : TMDB_CONFIG.BASE_URL! + "&s=spider";

  console.log(url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.Search;
};

export const fetchMovieDetails = async (movieId: string): Promise<any> => {
  //   try {
  //     const response = await fetch(
  //       `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
  //       {
  //         method: "GET",
  //         headers: TMDB_CONFIG.headers,
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch movie details: ${response.statusText}`);
  //     }

  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching movie details:", error);
  //     throw error;
  //   }
  return {};
};
