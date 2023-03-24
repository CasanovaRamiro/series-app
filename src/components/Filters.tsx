"use client";
import { Title } from "@/types";

type Props = {
  titles: Title[];
  setFilter: any;
  setTypeFilter: any;
};
function Filters({ titles, setFilter, setTypeFilter }: Props) {
  let categories: string[] = [];
  titles.forEach((title) =>
    title.jawSummary.genres.forEach((genre) => categories.push(genre.name))
  );
  categories = [...new Set(categories)];

  return (
    <div className="flex-wrap flex  justify-around p-5">
      <select
        onChange={(e) => setTypeFilter(e.target.value)}
        id="Type"
        className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="all">All</option>
        <option value="show">Show</option>
        <option value="movie">Movie</option>
      </select>
      <select
        onChange={(e) => setFilter(e.target.value)}
        id="Genres"
        className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
