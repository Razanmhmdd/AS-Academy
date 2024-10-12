import React from 'react';

export default function CourseDetails2() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Box Container with Shadow and Outline */}
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-orange-600">
          BRIDAL DRESS DESIGN MASTERCLASS
          </h1>
          <p className="text-lg text-gray-700">
            Casual and Party Wear for Kids
          </p>
        </div>

        {/* Description Section */}
        <div className="mb-6 text-lg leading-relaxed text-gray-800">
          <p>🤔කාලයක් තිස්සෙම ඇඳුම් මැහුවත් සාරි ජැකට් එක තවම හරියට එන්නෙ නැද්ද?</p>
          <p>🤔වටිනා රෙදි වර්ග කපද්දී බය හිතෙනවද?</p>
          <p>🤔ඔයාට ඔයාවම ෂුවර් නෑ වගේද?</p>
          <p>🤔හැම තැනම ගිහිල්ල ඉගෙනගත්තත් සාරි ජැකට් එක තවම හරියට අහුවුනේ නැද්ද?.</p>
          <p>🤔අනෙක් ඇඳුම් වලට වඩා සාරි ජැකට් මහන එක අමාරුයි කියලා හිතෙනවද?</p>
          <p>🤔ඇඟේ ගානටම අලවලා වගේ තියෙන සාරි ජැකට් එකක් මහන එක හීනයක්ද?</p>
          <p>🤔කොච්චර මහන්සි වෙලා මැහුවත් “නීට් ” නැති නිසා හරියට මිලක් අයකරගන්න බැරිද?</p>
          <p>🤔ඔයාගේ සැලෝන් එකේ ඇඳුම් ටික මහගන්න තවමත් වටේ යනවද?</p>
          <p>🤔ඔයාගේ හිතේ තියෙන මෝස්තරය කවුරුත්ම මහලා දෙන්නැද්ද?</p>
          <p>🤔ලොකු ගනන් දීලා මහගන්න “ඔෆිස් හැට්ටෙ ” ඔයාටම මහගන්න තිබ්බනම් කියලා හිතෙනවද?
            එහෙනම් එන්න….
            මේ ඔයාගේ අවසාන සාරි ජැකට් පන්තිය බව නොඅනුමානයි ….
            ඉතාම විද්‍යානුකූල තාක්ෂණයක් යටතේ 100% වැරදි නිවැරදි කල ක්‍රමවේදයක් ඉක්මනින් ,ප්‍රායෝගිකව පුහුණු වෙන්න…</p>
          <p>♻️සියලුම පාඩම්වල “වීඩියෝ රෙකෝඩින් “
          ලබාදේ..</p>
          <p>♻️අයකිරීම 10 000/= ක් පමණි..</p>
          <p>♻️කාලය මාස එකයි…</p>
           
        </div>       
        {/* Apply Now Button */}
        <div className="text-center mt-10">
          <a
            href="#apply" // Change this link to the desired application page
            className="bg-secondary text-white py-3 px-6 rounded-lg font-bold transition duration-300 hover:bg-primary"
          >
           දැන්ම ලියාපදිංචි වෙන්න
          </a>
        </div>
        
      </div>
    </div>
  );
}
