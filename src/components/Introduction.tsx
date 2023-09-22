import { useEffect, useState } from "react";

function Introduction() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  return (
    <div className="min-h-screen h-full w-full flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {loading ? (
        <div
          className={`text-white text-4xl flex items-center transition-all duration-1000  text-opacity-100 ${
            fade ? "" : "text-opacity-0"
          }`}
        >
          Introducing...{" "}
        </div>
      ) : (
        <div className="text-white text-4xl flex items-center">
          Melissa Ingles
        </div>
      )}
    </div>
  );
}

export default Introduction;
