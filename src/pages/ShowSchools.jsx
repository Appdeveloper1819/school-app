import React, { useEffect, useState } from "react";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/schools");
        if (!res.ok) throw new Error("Failed to fetch schools");
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        console.error("Error fetching schools:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">Loading schools...</p>
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600">
        <p className="text-2xl font-medium">No schools found.</p>
      </div>
    );
  }

  return (
    <div className="w-screen mx-auto mt-12 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
        Schools Directory
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((school) => (
          <div
            key={school.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            {school.image ? (
              <img
                src={`http://localhost:5000/uploads/${school.image}`}
                alt={school.name}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="h-48 w-full flex items-center justify-center bg-gray-200 text-gray-500 text-lg font-medium">
                No Image
              </div>
            )}

            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900">
                {school.name}
              </h3>
              <p className="text-gray-600 text-base">
                📍 {school.address}, {school.city}, {school.state}
              </p>
              <p className="text-gray-600 text-base">📞 {school.contact}</p>
              <p className="text-gray-600 text-base">✉️ {school.email_id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
