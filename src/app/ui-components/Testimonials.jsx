export default function Testimonial({ quote, author }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <p className="text-lg italic mb-4">&quot;{quote}&quot;</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}
