"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ComplaintSchema } from "./ComplaintsTable";
import { useSession } from "next-auth/react";

interface ComplaintFormProps {
  onHandleFormSubmission: (data: ComplaintSchema) => void;
  complaint?: ComplaintSchema;
}

const ComplaintFormPage = ({
  onHandleFormSubmission,
  complaint,
}: ComplaintFormProps) => {
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { data: userData } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ComplaintSchema>();

  if (complaint) {
    setValue("title", complaint.title);
    setValue("category", complaint.category);
    setValue("location", complaint.location);
    setValue("urgency", complaint.urgency);
    setValue("description", complaint.description);
  }

  return (
    <div className="flex flex-col items-center p-5">
      {error && (
        <div
          id="dismiss-toast"
          className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
          role="alert"
        >
          <div className="flex p-4">
            <p className="text-sm text-gray-700">
              {error}
            </p>

            <div className="ms-auto">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 "
                data-hs-remove-element="#dismiss-toast"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <form
        className="space-y-3 w-full max-w-2xl p-5 bg-white shadow-lg rounded-lg"
        onSubmit={handleSubmit(async (data) => {
          try {
            setIsSubmitting(true);
            data.userEmailId = userData?.user?.email!;
            onHandleFormSubmission(data);
          } catch (error) {
            setIsSubmitting(false);
            setError("An unexpected error occurred. Try Again");
          }
        })}
      >
        <div className="w-full">
          <label
            htmlFor="title"
            id="titlefield"
            className="block text-lg font-medium mb-2 text-black"
          >
            Title
          </label>
          <input
            className="py-3 px-4 w-full border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-black"
            type="text"
            id="title"
            placeholder="Title"
            {...register("title", {
              required: "This field is required",
              minLength: { value: 1, message: "This field is required" },
              maxLength: { value: 255, message: "Title is too long" },
            })}
          />
          {errors.title && (
            <p className="text-sm text-red-600 mt-2">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="category" className="block text-lg font-medium mb-2 text-black">
            Category
          </label>
          <select
            id="category"
            className="py-3 px-4 w-full bg-gray-100 border-transparent rounded-lg text-black text-sm focus:border-blue-500 focus:ring-blue-500"
            {...register("category", { required: "This field is required" })}
          >
            <option value="">Select the category</option>
            <option value="CLASSROOM">CLASSROOM</option>
            <option value="LABORATORY">LABORATORY</option>
            <option value="RESTROOMS">RESTROOMS</option>
            <option value="LIBRARY">LIBRARY</option>
            <option value="CAFETERIA">CAFETERIA</option>
            <option value="OUTDOOR">OUTDOOR</option>
            <option value="TRANSPORT">TRANSPORT</option>
            <option value="HALLS">HALLS</option>
          </select>
          {errors.category && (
            <p className="text-sm text-red-600 mt-2">
              {errors.category.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="location" className="block text-lg text-black font-medium mb-2">
            Location
          </label>
          <textarea
            id="location"
            className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-black text-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            placeholder="Enter location"
            {...register("location", {
              required: "This field is required",
              minLength: { value: 1, message: "This field is required" },
            })}
          />
          {errors.location && (
            <p className="text-sm text-red-600 mt-2">
              {errors.location.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-lg text-black font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            className="py-3 px-4 block w-full text-black bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            rows={5}
            placeholder="Enter description"
            {...register("description", {
              required: "This field is required",
              minLength: { value: 1, message: "This field is required" },
            })}
          />
          {errors.description && (
            <p className="text-sm text-red-600 mt-2">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="urgency" className="block text-black text-lg font-medium mb-2">
            Urgency
          </label>
          <select
            {...register("urgency", { required: "This field is required" })}
            id="urgency"
            className="py-3 px-4 w-full text-black bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select the issue severity</option>
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
          {errors.urgency && (
            <p className="text-sm text-red-600 mt-2">
              {errors.urgency.message}
            </p>
          )}
        </div>
        <div className="flex justify-center space-x-3 mt-5">
          <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
            disabled={isSubmitting}
          >
            Submit{" "}
            {isSubmitting && (
              <div
                className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintFormPage;
