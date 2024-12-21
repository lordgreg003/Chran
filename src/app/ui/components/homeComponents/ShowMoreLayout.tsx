import Image from "next/image";

// Example data, replace it with your actual data
const data = [
  {
    id: 1,
    type: "Brandpost",
    title: "Guarding against AI-powered threats requires a focus on cyber awareness",
    author: "Rob Rashotte",
    date: "16 Dec 2024",
    duration: "5 mins",
    tags: ["Cloud Security"],
    imageUrl: "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734376240/chran1_kgdvmk.jpg",
    sponsor: "Sponsored by Fortinet",
  },
  {
    id: 2,
    type: "Podcast",
    title: "CSO Executive Sessions: Guardians of the Games - How to keep the Olympics cyber safe",
    author: "John Doe",
    date: "07 Aug 2024",
    duration: "17 mins",
    tags: ["CSO and CISO"],
    imageUrl: "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734376240/chran1_kgdvmk.jpg",
    sponsor: "",
  },
  {
    id: 3,
    type: "Video",
    title: "CSO Executive Sessions: Open Source Institute’s Eric Nguyen on supply chain risks",
    author: "Jane Doe",
    date: "14 Nov 2024",
    duration: "15 mins",
    tags: ["Critical Infrastructure", "IT Governance", "Supply Chain"],
    imageUrl: "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734376240/chran1_kgdvmk.jpg",
    sponsor: "",
  },
];

const ShowMoreLayout = () => {
  return (
    <section className="py-10 px-6 md:px-20 lg:px-32 bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-6">Show me more</h2>
          <ul className="space-y-4 text-gray-500">
            <li className="text-black font-semibold italic cursor-pointer hover:underline">Latest</li>
            <li className="cursor-pointer hover:text-black transition hover:underline">Articles</li>
            <li className="cursor-pointer hover:text-black transition hover:underline">Podcasts</li>
            <li className="cursor-pointer hover:text-black transition hover:underline">Videos</li>
          </ul>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the data to generate cards */}
          {data.map((item, index) => (
            <div key={item.id} className="flex flex-col space-y-4 bg-white border rounded-lg shadow-lg overflow-hidden">
              <span className="text-gray-200 text-6xl font-light">{String(index + 1).padStart(2, "0")}</span>
              <div className="flex items-center space-x-2">
                <span className="italic text-gray-500 text-sm">{item.type}</span>
                {item.sponsor && (
                  <span className="text-xs bg-red-100 text-red-500 px-2 rounded-full">
                    {item.sponsor}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">By {item.author}</p>
              <p className="text-sm text-gray-500">{item.date} • {item.duration}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs border border-gray-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={300}
                height={200}
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowMoreLayout;
