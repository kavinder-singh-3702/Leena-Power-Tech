// Create a new file in your Next.js project, e.g., components/OurTeam.js

import React from "react";

export default function OurTeam() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Team</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Leena Powertech has created infrastructure of the highest quality
          throughout the country. Our practices and working methods have been
          praised by many organizations. We owe our success to our philosophy
          of <span className="font-semibold">‘Believing in People’</span> and{' '}
          <span className="font-semibold">‘Going beyond oneself’</span>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a team of around 200+ people, working across different states
          in the country. Over the past 25 years, we have been led by our
          dynamic Chief Managing Director <span className="font-semibold">Mr.
          Amit Teckchandani</span> along with our Director of Finance,{' '}
          <span className="font-semibold">Mrs. Komal Teckchandani</span>.
          Supporting them we have a team of highly professional and experienced
          individuals who have fueled our progress over the years.
        </p>
      </div>
    </div>
  );
}
