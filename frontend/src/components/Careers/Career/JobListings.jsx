"use client";
import { useState } from "react";

export default function JobListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const jobs = [
    { title: "Trade Finance", category: "Accounts", location: "CBD Belapur Navi Mumbai" },
    { title: "Supervisor Electrical", category: "Project", location: "Kolhapur, Palghar, Ratnagiri, Vasai" },
    { title: "Store Incharge", category: "Project", location: "Maharashtra" },
    { title: "Head – HR", category: "HR", location: "CBD Belapur Navi Mumbai" },
    { title: "Head- Business Development", category: "Business Development", location: "CBD Belapur Navi Mumbai" },
    { title: "Contracts Manager", category: "Business Development", location: "CBD Belapur Navi Mumbai" },
    { title: "Strategy Head", category: "Business Development", location: "CBD Belapur Navi Mumbai" },
    { title: "Estimation Engineer", category: "Project", location: "CBD Belapur Navi Mumbai" },
    { title: "Chief Operating Officer", category: "Project", location: "CBD Belapur Navi Mumbai" },
    { title: "Planning Engineer", category: "Project Planning", location: "CBD Belapur Navi Mumbai" },
  ];

  return (
    <div className="min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Jobs</h1>
      <div className="bg-white rounded-md shadow-sm mx-auto px-8 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/4 p-2 border border-gray-300 rounded-md"
          />
          <select className="w-full md:w-1/4 p-2 border border-gray-300 rounded-md">
            <option>All Job Category</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
          </select>
          <select className="w-full md:w-1/4 p-2 border border-gray-300 rounded-md">
            <option>All Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
          </select>
          <select className="w-full md:w-1/4 p-2 border border-gray-300 rounded-md">
            <option>All Job Location</option>
            <option>CBD Belapur Navi Mumbai</option>
            <option>Kolhapur</option>
            <option>Palghar</option>
            <option>Ratnagiri</option>
            <option>Vasai</option>
            <option>Maharashtra</option>
          </select>
        </div>
        {jobs.map((job, index) => (
          <div key={index} className="py-3 border-b border-gray-200 flex justify-between items-center space-x-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
              <div className="text-gray-500 flex space-x-2 mt-1">
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 3h14a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                  <span>{job.category}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 7a4 4 0 010-5.656l7.778 7.778a4 4 0 01-5.656 5.656l-2.343-2.343L3.172 7z" clipRule="evenodd" />
                  </svg>
                  <span>{job.location}</span>
                </span>
              </div>
            </div>
            <a href="#" className="text-blue-600 text-sm whitespace-nowrap">More Details →</a>
          </div>
        ))}
      </div>
      <button className="mt-8 text-blue-600 hover:underline mx-auto block">Load more</button>
    </div>
  );
}
