"use client";

export default function ReviewScreen({ onNext }) {
  return (
    <>
      <div className="fixed top-4 left-16 z-50 mb-16 text-3xl font-semibold hidden md:block">
        slimkit
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center mt-20 px-6 py-12 bg-white max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10 max-w-3xl mx-auto">
          Get visible results in <br /> several weeks
        </h1>

        {/* Content container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-20 max-w-5xl w-full px-4">
          {/* Image part with arrow shadow */}
          <div className="relative flex-shrink-0 rounded-xl overflow-hidden max-w-md md:max-w-lg w-full shadow-md">
            <img
              src="/module2_image.jpg" // replace with your image path
              alt="Before and After"
              className="w-full h-auto object-cover"
            />
            {/* Arrow shadow overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{ mixBlendMode: "screen" }}
            />
          </div>

          {/* Text part */}
          <div className="flex flex-col justify-between max-w-xl w-full">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold">Patrick M: -4.7 kg</h2>
              {/* Star rating */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118l-3.39-2.463a1 1 0 00-1.176 0l-3.39 2.463c-.784.57-1.838-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-900">
              Because of COVID I fell into a routine where I’d put on a bunch of
              weight, and mentally and physically I was tired all the time. I’ve
              discovered this walking app and it’s been a life saver. I was
              amazed to see a weight loss of about 10 pounds in the first month
              of using it.
            </p>
          </div>
        </div>

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
