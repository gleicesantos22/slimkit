"use client";

export default function Consent({ onContinue }) {
  return (
    <>
      <div className="fixed top-4 left-16 z-50 mb-16 text-3xl font-semibold hidden md:block">
        slimkit
      </div>
      <div className="h-screen w-full bg-white flex flex-col justify-center items-center px-6 text-center mt-20">
        <h1 className="text-2xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 text-6xl font-bold">
            27 million
          </span>
          <br />
          <span className="text-[17px] font-semibold">
            users have chosen Walking by Slimkit
          </span>
        </h1>

        <img
          src="/2.png"
          alt="Walking by Slimkit"
          className="w-48 h-auto mb-6"
        />

        <p className="text-xs text-gray-600 max-w-md mb-6">
          By pressing Continue I hereby agree to processing of my personal data.
          Nothing is shared without my permission.{" "}
          <span className="underline hover:cursor-pointer">Privacy Policy</span>{" "}
          and{" "}
          <span className="underline hover:cursor-pointer">
            Terms and Conditions
          </span>{" "}
          apply.
        </p>

        <button
          onClick={onContinue}
          className="bg-gradient-to-r from-blue-800 to-blue-500 text-yellow-300 font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition w-full max-w-xs text-2xl"
        >
          Continue
        </button>
      </div>
    </>
  );
}
