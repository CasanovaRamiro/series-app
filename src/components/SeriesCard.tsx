import { Title, JawSummary } from "@/types";
type Props = {
  title: Title;
};
function SeriesCard({ title }: Props) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-stone-800 hover:scale-105 duration-100 cursor-pointer">
      <img
        className="w-full"
        src={title.jawSummary.backgroundImage.url}
        alt="Serie image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-200 ">
          {title.jawSummary.title}
        </div>
        <p className="text-gray-400 text-base">
          {title.jawSummary.contextualSynopsis.text}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {title.jawSummary.genres.map((genre) => (
          <span
            key={genre.id}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SeriesCard;
