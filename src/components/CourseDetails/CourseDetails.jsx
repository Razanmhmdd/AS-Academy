import React from 'react';

export default function CourseDetails() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Box Container with Shadow and Outline */}
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-orange-600">
            ළමා ඇදුම් නිර්මාණ පාඨමාලාව
          </h1>
          <p className="text-lg text-gray-700">
            Casual and Party Wear for Kids
          </p>
        </div>

        {/* Description Section */}
        <div className="mb-6 text-lg leading-relaxed text-gray-800">
          <p>🦄 කාලය මාස දෙකයි. සෙනසුරාදා දින රෑ 7 සිට.. (ඔන්ලයින් සහභාගි වීම අනිවාර්ය නැති අතර, සියලුම පාඩම් වල වීඩියෝව ලබා දෙන නිසා පහසු වෙලාවක ඉගෙනගන්න)</p>
          <p>🦄 උපතේ සිට අවුරුදු 18 දක්වා ළමුන් සදහා ඇදුම් නිර්මාණ</p>
          <p>🦄 මුලසිටම උගන්වන සම්පූර්ණ පාඨමාලාවකි.. කිසිදු මූලික දැනුමක් අවශ්‍ය නැත.</p>
          <p>🦄 සියලුම පාඩම් වල වීඩියෝ රෙකෝඩින් ලබා දේ.</p>
          <p>🦄 ඔබට සිතැගි ආකාරයට pattern නිර්මාණය කර ගනිමින්, නිර්මාණාත්මක මෝස්තර සැකසීම සදහා ළමා ඇදුම් සදහාම වූ කොලර් වර්ග, අත් වර්ග, සාය කොටස කපන විවිධ ආකාර, සියල්ල ඉගැන්වේ..</p>
        </div>

        {/* Courses Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-secondary">සාමාන්‍ය ළමා ඇදුම් යටතේ:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
            <li>🦄 සාමාන්‍ය ගවුම්, කලිසම් කමිස</li>
            <li>🦄 පිජාමා, නිදන ඇදුම්</li>
            <li>🦄 ළමාසාරි, ජාතික ඇදුම, රෙද්ද සහ හැට්ටය</li>
            <li>🦄 සන්සූට්</li>
            <li>🦄 කොන්සට් සදහා ඇදුම් (සතුන්ගේ ඇදුම්)</li>
          </ul>
        </div>

        {/* Party Wear Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-secondary">මල් කුමරි ඇදුම් (party frocks) යටතේ:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
            <li>🦄 බක්‍රම් හා කැන් කැන් යෙදීම</li>
            <li>🦄 තට්ටු ආකාරයට සාය කැපීමේ ක්‍රම</li>
            <li>🦄 වාටි රැලි කිරීමේ ක්‍රම</li>
            <li>🦄 ලයිනින් කිරීමේ විශේෂ ක්‍රම</li>
            <li>🦄 දරුවන්ට හිතකර පරිදි ඇතුලත නිමාව සැකසීම.</li>
            <li>🦄 රෙදි වර්ග තෝරා ගැනීම.</li>
            <li>🦄 වර්ණ ගැලපීම.</li>
          </ul>
        </div>

        {/* Payment Section */}
        <div className="mb-8">
          <p className="text-lg text-gray-800">
            අයකිරීම <span className="font-bold">18,000/=</span> ක් පමණි.. සම්පූණ මුදල් ගෙවූ රිසිට්පත whatsapp එවා ඉක්මනින් කණ්ඩායමට එකතු වෙන්න. 
          </p>
          <p className="text-lg text-gray-800">බැංකු විස්තර ලබා ගැනීම සදහා whatsapp මැසේජ් කරන්න <span className="font-bold">0711244485</span></p>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-secondary text-white py-6 rounded-lg shadow-lg">
          <p className="text-xl font-bold mb-4">දෙසැම්බර් 1 දින ආරම්භ වන මුලසිට ඉගැන්වෙන ප්‍රායෝගික මැහුම් පන්තිය</p>
          <p className="text-lg">විස්තර දැනගැනීමට, “casual pattern making” හෝ “මැහුම් පන්තිය” ලෙස ටයිප් කර, මැසේජ් කරන්න <span className="font-bold">0711244485</span></p>
        </div>

        {/* WhatsApp Links */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">
            අපගේ පාඨමාලා පිළිබඳ තොරතුරු සහ නොමිලේ පාඩම් සදහා ලින්ක් ලබා ගැනීමට පහත WhatsApp සමූහයට එක්වන්න:
          </p>
          <a href="https://chat.whatsapp.com/IWNt1UK5ndDKeqipM3ndbH" className="text-secondary font-bold underline">
            WhatsApp Group Link
          </a>
        </div>

        {/* Video Section */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">ලමා ඇදුම් පාඨමාලාව හදුන්වාදීමෙ වැඩසටහන මෙම වීඩියෝවෙන් නරඹන්න:</p>
          <a href="https://youtu.be/7WoJa-P1x4U?si=sYAib29CIB7ftyhU" className="text-secondary font-bold underline">
            Watch Video on YouTube
          </a>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-10">
          <a
            href="#apply" // Change this link to the desired application page
            className="bg-primary text-white py-3 px-6 rounded-lg font-bold transition duration-300 hover:bg-secondary"
          >
            දැන්ම පාඨමාලාවට එකතු වෙන්න
          </a>
        </div>
        
      </div>
    </div>
  );
}
