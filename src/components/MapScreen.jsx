"use client";

export default function MapScreen({ onNext }) {
  return (
    <>
      <div className="fixed top-4 left-16 z-50 mb-16 text-3xl font-semibold hidden md:block">
        slimkit
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white max-w-3xl mx-auto text-center mt-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-8">You’re in good hands</h1>

        {/* World Map Image */}
        <img
          src="/map.png" // Replace with your image path
          alt="World map with user locations"
          className="mx-auto mb-8 max-w-full w-[350px]"
        />

        {/* User count and text */}
        <p className="text-4xl font-extrabold text-blue-600 mb-2">
          323, 301 happy users
        </p>
        <p className="text-3xl font-bold max-w-xl mx-auto leading-snug">
          reached their goals thanks to our Walking app
        </p>

        {/* Next button */}
        <button
          onClick={onNext}
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-500 text-yellow-300 font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition w-full max-w-xs text-2xl"
        >
          Next
        </button>
      </div>
    </>
  );
}
