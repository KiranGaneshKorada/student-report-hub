"use client";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ComplaintSchema } from "../_helper_components/ComplaintsTable";
import { useSession } from "next-auth/react";

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage = ({ params: { id } }: IssueDetailPageProps) => {
  const {
    data: complaint,
    error,
    isLoading,
  } = useQuery<ComplaintSchema>({
    queryKey: ["complaint"],
    queryFn: () =>
      axios.get("/api/complaints/" + id).then((response) => response.data),
    retry: 3,
  });

  const { data } = useSession();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center p-5">
        <div className="space-y-3 w-full max-w-2xl p-5 bg-white shadow-lg rounded-lg animate-pulse">
          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Title</label>
            <div className="py-3 px-4 w-full border border-gray-200 rounded-lg bg-gray-200"></div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Category</label>
            <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium mb-2">Location</label>
            <div
              className="py-3 px-4 block w-full bg-gray-200 border-transparent rounded-lg"
              style={{ height: "72px" }}
            ></div>
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium mb-2">
              Description
            </label>
            <div
              className="py-3 px-4 block w-full bg-gray-200 border-transparent rounded-lg"
              style={{ height: "120px" }}
            ></div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Urgency</label>
            <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Status</label>
            <div className="py-3 px-4 w-full bg-gray-200 border-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="w-full max-w-2xl mt-5 p-5 bg-white shadow-lg rounded-lg animate-pulse">
          <p className="text-lg font-medium mb-2">Reported By:</p>
          <div className="py-3 px-4 border border-gray-200 rounded-lg bg-gray-200"></div>
        </div>

        <div className="flex space-x-3 mt-5">
          <div className="py-3 px-5 bg-gray-200 rounded-lg"></div>
          <div className="py-3 px-5 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!complaint || error) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center p-5">
      <form className="space-y-3 w-full max-w-2xl p-5 bg-white shadow-lg rounded-lg">
        <div className="w-full">
          <label
            htmlFor="title"
            id="titlefield"
            className="block text-lg font-medium mb-2"
          >
            Title
          </label>
          <input
            className="py-3 px-4 w-full border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            type="text"
            placeholder="Title"
            value={complaint?.title}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-lg font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            className="py-3 px-4 w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            value={complaint?.category}
            disabled
          >
            <option value="CLASSROOM">CLASSROOM</option>
            <option value="LABORATORY">LABORATORY</option>
            <option value="RESTROOMS">RESTROOMS</option>
            <option value="LIBRARY">LIBRARY</option>
            <option value="CAFETERIA">CAFETERIA</option>
            <option value="OUTDOOR">OUTDOOR</option>
            <option value="TRANSPORT">TRANSPORT</option>
            <option value="HALLS">HALLS</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="location" className="block text-lg font-medium mb-2">
            Location
          </label>
          <textarea
            className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            placeholder="Enter location"
            value={complaint?.location}
            readOnly
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-lg font-medium mb-2"
          >
            Description
          </label>
          <textarea
            className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            rows={5}
            placeholder="Enter description"
            value={complaint?.description}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="urgency" className="block text-lg font-medium mb-2">
            Urgency
          </label>
          <select
            id="urgency"
            className="py-3 px-4 w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            value={complaint?.urgency}
            disabled
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-lg font-medium mb-2">
            Status
          </label>
          <select
            id="status"
            className="py-3 px-4 w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            value={complaint?.status}
            disabled
          >
            <option value="OPEN">OPEN</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="CLOSED">CLOSED</option>
          </select>
        </div>
      </form>

      <div className="w-full max-w-2xl mt-5 p-5 bg-white shadow-lg rounded-lg">
        <p className="text-lg font-medium mb-2">Reported By:</p>
        <p className="py-3 px-4 border border-gray-200 rounded-lg">
          {complaint?.userEmailId}
        </p>
      </div>
      {data?.user?.email === complaint?.userEmailId && (
        <div className="flex space-x-3 mt-5">
          <button className="py-3 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Link href={`/complaints/${complaint?.id}/edit`}>Edit</Link>
          </button>
          <button
            className="py-3 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={async () => {
              try {
                await axios.delete("/api/complaints/" + complaint.id);
                router.push("/complaints");
                router.refresh();
              } catch (error) {
                notFound();
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default IssueDetailPage;
