import Image from "next/image";

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
        <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col space-y-4">
            <span className="text-gray-200 text-6xl font-light">01</span>
            <div className="flex items-center space-x-2">
              <span className="italic text-gray-500 text-sm">Brandpost</span>
              <span className="text-xs bg-red-100 text-red-500 px-2 rounded-full">
                Sponsored by Fortinet
              </span>
            </div>
            <h3 className="text-lg font-bold">
              Guarding against AI-powered threats requires a focus on cyber awareness
            </h3>
            <p className="text-sm text-gray-500">By Rob Rashotte</p>
            <p className="text-sm text-gray-500">16 Dec 2024 • 5 mins</p>
            <span className="text-xs border border-gray-300 px-2 py-1 rounded">
              Cloud Security
            </span>
            <Image
              src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734376240/chran1_kgdvmk.jpg"
              alt="AI Cyber Security"
              width={300}
              height={200}
              className="object-cover w-full"
            />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col space-y-4">
            <span className="text-gray-200 text-6xl font-light">02</span>
            <span className="italic text-gray-500 text-sm">Podcast</span>
            <h3 className="text-lg font-bold">
              CSO Executive Sessions: Guardians of the Games - How to keep the Olympics cyber safe
            </h3>
            <p className="text-sm text-gray-500">07 Aug 2024 • 17 mins</p>
            <span className="text-xs border border-gray-300 px-2 py-1 rounded">
              CSO and CISO
            </span>
            <Image
              src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734376240/chran1_kgdvmk.jpg"
              alt="Olympic Cybersecurity"
              width={300}
              height={200}
              className="object-cover w-full"
            />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col space-y-4">
            <span className="text-gray-200 text-6xl font-light">03</span>
            <span className="italic text-gray-500 text-sm">Video</span>
            <h3 className="text-lg font-bold">
              CSO Executive Sessions: Open Source Institute’s Eric Nguyen on supply chain risks
            </h3>
            <p className="text-sm text-gray-500">14 Nov 2024 • 15 mins</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs border border-gray-300 px-2 py-1 rounded">
                Critical Infrastructure
              </span>
              <span className="text-xs border border-gray-300 px-2 py-1 rounded">
                IT Governance
              </span>
              <span className="text-xs border border-gray-300 px-2 py-1 rounded">
                Supply Chain
              </span>
            </div>
            <Image
              src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734376240/chran1_kgdvmk.jpg"
              alt="Supply Chain Security"
              width={300}
              height={200}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowMoreLayout;
