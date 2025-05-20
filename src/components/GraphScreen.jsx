"use client";

export default function GraphScreen({ onNext }) {
  return (
    <>
      <div className="fixed top-4 left-16 z-50 mb-16 text-3xl font-semibold hidden md:block">
        slimkit
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white text-center max-w-lg mx-auto mt-20">
        {/* Image container*/}
        <div className="mb-8 max-w-md w-full bg-blue-50 rounded-xl p-6 shadow-sm">
          <img
            src="/module1_chart.png"
            alt="Weight vs Walking Chart"
            className="w-full"
            style={{ padding: "12px" }}
          />
        </div>

        {/* Description text */}
        <p className="text-lg sm:text-xl font-semibold max-w-md mx-auto leading-relaxed">
          Another great benefit is that{" "}
          <span className="font-bold text-blue-600">
            you will start feeling better after working out with Walking app for
            a couple of days
          </span>
        </p>

        {/* Continue button */}
        <button
          onClick={onNext}
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-500 text-yellow-300 font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition w-full max-w-xs text-2xl"
        >
          Continue
        </button>
      </div>
    </>
  );
}
