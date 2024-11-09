import React from 'react';

export default function HRInitiatives() {
  return (
    <div className="max-w-4xl bg-white rounded-lg p-8 mx-auto px-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">Salient HR Initiatives:</h1>
      
      <ul className="space-y-6">
        <li>
          <h2 className="text-md font-semibold text-blue-900 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-900 mr-2"></span>
            Get together / Picnic / Sports / Cultural Meets / Festival Celebration / Movie show / Birthday wishes:
          </h2>
          <p className="text-gray-700 mt-2">
            To promote a sense of belonging among our teams and to create an environment where employees feel at home is our aim. Moreover, these activities are also undertaken to facilitate recreation for our team. Special occasions call for special celebrations and to enjoy our team members&apos; birthdays we bring on the celebrations with birthday cakes and snacks for all every month.
          </p>
        </li>

        <li>
          <h2 className="text-md font-semibold text-blue-900 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-900 mr-2"></span>
            Helping employees through welfare trust:
          </h2>
          <p className="text-gray-700 mt-2">
            All employees contribute towards LPTE welfare trust along with the regular contributions from management. The basic purpose of this trust is to assist employees in their need of hour.
          </p>
        </li>

        <li>
          <h2 className="text-md font-semibold text-blue-900 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-900 mr-2"></span>
            Best employee performance awards:
          </h2>
          <p className="text-gray-700 mt-2">
            Every year we call in nominations from our employees to state their achievements and to nominate themselves as &apos;Best Employee&apos;. This activity is undertaken to promote a sense of healthy competition and to acknowledge the efforts of thousands of our team members. Along with these, awards for Best Site and Site with best safety conditions are also presented.
          </p>
        </li>

        <li>
          <h2 className="text-md font-semibold text-blue-900 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-900 mr-2"></span>
            Long service award:
          </h2>
          <p className="text-gray-700 mt-2">
            At LPTE we cherish and value the long-term association of our team members and to appreciate their commitment and contributions we present them with the Long Service Awards as a token of our gratitude.
          </p>
        </li>

        <li>
          <h2 className="text-md font-semibold text-blue-900 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-900 mr-2"></span>
            Learning and Development:
          </h2>
          <p className="text-gray-700 mt-2">
            To cater to the ever-growing needs of the industry we have set up a state-of-the-art learning centre at CBD-Belapur. LPTE Learning Centre caters to the learning and development needs of our team and moreover helps us build a highly skilled and well-informed workforce. A good blend of skill development, behavioural, and functional programs provide a platform for growth. In addition to this, we cater to such development needs through experts at our various project sites and regional offices also.
          </p>
        </li>
      </ul>
      <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
        <div className="flex items-center">
          <span className="material-icons mr-2 text-blue-900">business_center</span>
          Business Development
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2 text-blue-900">timeline</span>
          Project
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2 text-blue-900">assessment</span>
          Estimation
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2 text-blue-900">event</span>
          Project Planning
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2 text-blue-900">account_balance</span>
          Account & Finance
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2 text-blue-900">shopping_cart</span>
          Procurement
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2 text-blue-900">people</span>
          Human Resource and Admin
        </div>
      </div>
    </div>
  );
}
