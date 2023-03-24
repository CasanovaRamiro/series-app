"use client";

import { Title } from "@/types";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import SeriesCard from "./SeriesCard";

type Props = {
  titles: Title[];
};
function CardBoard({ titles }: Props) {
  const [series, setSeries] = useState(titles);
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [query, setQuery] = useState("");
  useEffect(() => {
    let filtered: Title[] =
      typeFilter === "all"
        ? titles
        : titles.filter((title) => title.jawSummary.type === typeFilter);

    filtered = filtered.filter((t) =>
      t.jawSummary.title.toLowerCase().includes(query.toLowerCase())
    );

    filtered =
      filter === "all"
        ? filtered
        : filtered.filter((title) => {
            return title.jawSummary.genres.some(
              (genre) => genre.name === filter
            );
          });
    setSeries(filtered);
  }, [filter, typeFilter, query]);
  return (
    <>
      <Filters
        titles={titles}
        setFilter={setFilter}
        setTypeFilter={setTypeFilter}
        setSeries={setSeries}
        query={query}
        setQuery={setQuery}
      />

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {series?.map((e) => (
          <SeriesCard title={e} key={e.jawSummary.id} />
        ))}
      </div>
    </>
  );
}

export default CardBoard;
