import CardBoard from "@/components/CardBoard";
import api from "./api";
export default async function Home() {
  const series = await api.series.list();

  return (
    <main className="bg-stone-900">
      <CardBoard titles={series.titles} />
    </main>
  );
}
