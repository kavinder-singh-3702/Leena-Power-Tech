import { ArrowRightIcon } from '@heroicons/react/solid';
export default function CompanyValues() {
    const values = [
      { title: 'Integrity', description: 'To be fair, honest, transparent, and ethical in our conduct.' },
      { title: 'Loyalty', description: 'Building mutually beneficial relationships both internally and externally that stand the test of circumstances and time.' },
      { title: 'Customer Satisfaction', description: 'Creating value for our customers and delivering solutions beyond their expectations.' },
      { title: 'Teamwork', description: 'Our company is full of amazing individuals, but it is only through teamwork that we achieve excellence.' },
      { title: 'Quality & Safety', description: 'We adhere to the highest standards of quality and ensure customers get the best service. All our work is carried out with safety as our main priority.' },
      { title: 'Innovative', description: 'To continuously try new things and take risks to break our barriers and provide our customers with the best solutions.' },
      { title: 'Performance', description: 'We strive to improve our performance and encourage individuals to push their comfort boundaries.' },
    ];
  
    return (
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Company Values:</h2>
        <ul className="space-y-6">
          {values.map((value, index) => (
            <li key={index} className="flex items-start space-x-4">
              <ArrowRightIcon className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  