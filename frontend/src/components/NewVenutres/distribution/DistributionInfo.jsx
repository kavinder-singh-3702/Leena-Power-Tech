
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <section className="space-y-6">
        <p className="text-sm">
          With an extensive experience spanning across <span className="font-bold">23 years</span> of experience in building and partnering with urban developers for electrical infra projects, we have been well positioned in the industry. LPTE with its end-to-end concept to commissioning model, has been a leading EPC contractor for urban electrical distribution projects.
        </p>
        <p className="text-sm">
          Providing electricity to every household in the country is a key policy initiative of the Government of India and we have been effectively partnering with both central and state governments in execution of several key power sector program in the country.
        </p>
        <p className="text-sm">
          We offer turnkey EPC services for urban infra electrification EPC projects encompassing civil works, erection, testing, and substation construction, amongst others by using technology systems (SCADA) to maintain effective distribution system. SCADA is a good credential. Something more about it. We were one of the first companies to successfully execute and commission a SCADA system.
        </p>
        <p className="text-sm">
          We have a team of highly skilled & experienced professionals with years of experience in the industry. We provide customers with an integrated solution with a single point of accountability, enabling better visibility and control over the project. LPTE has emerged as a highly-skilled and promising company by delivering world-class procurement, and construction services for various challenging urban electrification EPC projects as well as rural electrification projects across the country.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[
          "HT cable laying (1500 km)",
          "LT cable laying (1300 km)",
          "Around 150 Substations",
          "Urban and Rural area expertise",
          "Executed IPDS projects",
          "Underground cabling of more than 1500km",
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <FaArrowRight className="text-blue-500 text-sm" />
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
