export const metadata = {
  title: "Photos",
};

const galleryItems = [
  { title: "Vue", description: "A clean UI foundation for modern interfaces." },
  { title: "Windows", description: "A practical desktop-inspired layout reference." },
  { title: "TypeScript", description: "A typed approach for scalable app development." },
];

export default function PhotosPage() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-semibold">My Photos</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {galleryItems.map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 text-4xl">📷</div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}