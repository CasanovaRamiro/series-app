import Filters from "@/components/Filters";
import SeriesCard from "@/components/SeriesCard";
import api from "./api";
export default async function Home() {
  const series = await api.series.list();

  return (
    <main className="bg-stone-900">
      <Filters series={series} />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {series.titles?.map((e) => (
          <SeriesCard title={e} key={e.jawSummary.id} />
        ))}
      </div>
    </main>
  );
}
