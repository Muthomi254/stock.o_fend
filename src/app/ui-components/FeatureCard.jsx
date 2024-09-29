

'use client';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="h-12 w-12 mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
