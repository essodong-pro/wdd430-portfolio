import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 text-center transition-transform duration-300 hover:scale-105">

        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={128}
            height={128}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-brand mb-3">Tailwind CSS Practice</h1>

        {/* Description Paragraph */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
        </p>

        {/* Optional Action Link */}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 bg-brand text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}