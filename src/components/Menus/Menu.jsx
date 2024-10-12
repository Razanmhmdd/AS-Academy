import React from 'react';
import { FaYoutube, FaImages, FaUsers, FaMoneyBillAlt } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaYoutube className="text-6xl text-red-600" />,
    text: 'මනාලිගවුම් මහන්න',
  },
  {
    id: 2,
    icon: <FaImages className="text-6xl text-blue-600" />,
    text: 'සාරිජැකට් මහන්න ඉගෙනගන්න',
  },
  {
    id: 3,
    icon: <FaUsers className="text-6xl text-yellow-500" />,
    text: 'දැනුම, ව්‍යාපාරය, කලාව, මතය සමාජ ගත කරමු',
  },
  {
    id: 4,
    icon: <FaMoneyBillAlt className="text-6xl text-green-500" />,
    text: 'මුදල් උපයා.. ක්ෂේත්‍රයේ සාර්ථක වෙමු',
  },
];

const App = () => {
  return (
    <div className="py-10 bg-gray-100 flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg"
          >
            {item.icon}
            <p className="mt-4 text-lg font-semibold text-gray-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
