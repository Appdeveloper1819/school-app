import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddSchool = () => {
  const { register, handleSubmit, reset } = useForm();
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email_id", data.email_id);

      if (data.image[0]) formData.append("image", data.image[0]);

      const res = await fetch("http://localhost:5000/api/schools", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add school");

      await res.json();
      setSuccess("✅ School added successfully!");
      reset();
      setPreview(null);
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 p-10">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-12 border border-white/30">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
          Add New School
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="School Name"
              {...register("name", { required: true })}
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="City"
              {...register("city", { required: true })}
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
            <input
              type="text"
              placeholder="State"
              {...register("state", { required: true })}
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Contact"
              {...register("contact", { required: true })}
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email_id", { required: true })}
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* File Upload */}
          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-xl bg-blue-50/60 hover:bg-blue-50/80 transition cursor-pointer">
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={(e) =>
                setPreview(
                  e.target.files[0]
                    ? URL.createObjectURL(e.target.files[0])
                    : null
                )
              }
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="text-gray-700 font-medium cursor-pointer text-lg"
            >
              📂 Upload School Logo
            </label>
          </div>

          {/* Preview */}
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="preview"
                className="w-48 h-48 object-cover rounded-xl border shadow-md"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-5 rounded-xl font-semibold text-xl text-white shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-95 transition transform"
          >
            🚀 Save School
          </button>
        </form>

        {/* Messages */}
        {error && (
          <p className="mt-6 text-red-600 text-center font-semibold text-lg">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-6 text-green-600 text-center font-semibold text-lg">
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddSchool;
