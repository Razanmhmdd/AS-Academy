import React from 'react';
import HeroImg from "../../assets/img/img1.png";

export default function Cards2() {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-10 md:p-20">
      {/* Card 1 */}
      <div className="bg-gradient-to-r from-teal-200 to-teal-500 text-white rounded-lg shadow-lg p-8 md:p-12 w-full sm:w-80 md:w-96 relative">
        <div className="absolute top-0 left-0 -mt-8 -ml-8">
          <img
            src={HeroImg}
            alt="Card Image 1"
            className="rounded-full w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center">දියුණු වීමට මැහුම්</h2>
          <p className="text-sm md:text-lg font-medium text-center leading-relaxed">
          බොහෝ දෙනා මැසීම විනෝදකාමී දෙයක් ලෙස සැලකුවත්. නිර්මාණකරුවෙකුට, දක්ෂයෙකුට වෘත්තීකයෙකුට, චින්තකයෙකුට, මතදාරියෙකුට සාර්ථක වීම සදහාම නිර්මාණය වී ඇති ස්ථානයකි.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-r from-rose-400 to-red-500 text-white rounded-lg shadow-lg p-8 md:p-12 w-full sm:w-80 md:w-96 relative">
        <div className="absolute top-0 left-0 -mt-8 -ml-8">
          <img
            src={HeroImg}
            alt="Card Image 2"
            className="rounded-full w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center">මැහුම් යනු ඩොලර් උල්පතක්</h2>
          <p className="text-sm md:text-lg font-medium text-center leading-relaxed">
          තවමත් ඔබ නරඹන්නෙක් පමණක් නම් එය මහත් අපරාධයකි. නිවැරදි මාවතේ යන අයෙක්ට මැසීම යනු ඩොලර් මුදල් මවන උල්පතක් මෙන්ම තම සිහින වලට යා හැකි ප්‍රධාන මාර්ගයකි
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg p-8 md:p-12 w-full sm:w-80 md:w-96 relative">
        <div className="absolute top-0 left-0 -mt-8 -ml-8">
          <img
            src={HeroImg}
            alt="Card Image 3"
            className="rounded-full w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center">කැමති දේ කරමින් දියුණු වෙන්න</h2>
          <p className="text-sm md:text-lg font-medium text-center leading-relaxed">
          ඔබ කුමන තත්වයක සිටියත් ඔබගේ නිර්මාණ කරුවා අවදිකරගන්න, හොදම දවස අදයි.. ආස දේවල් කරමින් සාර්ථක වෙන්න.
          </p>
        </div>
      </div>
    </div>
  );
}
