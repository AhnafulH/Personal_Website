import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the external link icon
import aws_ccp from '@/public/images/aws_ccp.png';

const BadgeCard = () => {
  return (
    <div className="mt-20 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4">
      <Image 
        src={aws_ccp} 
        alt="AWS Certified Cloud Practitioner Badge" 
        width={80} 
        height={80} 
        className="rounded"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          AWS Certified Cloud Practitioner
        </h2>
        <a 
          href="https://www.credly.com/badges/6eaf0da7-814f-41d0-9941-df6525de7ae2/public_url" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Credly <FaExternalLinkAlt className="inline ml-2" />
        </a>
      </div>
    </div>
  );
};

export default BadgeCard
