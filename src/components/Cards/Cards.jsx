import React from 'react';
import HeroImg from "../../assets/img/img1.png";

export default function Cards() {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-10 md:p-20">
      {/* Card 1 */}
      <div className="bg-gradient-to-r from-teal-200 to-teal-500 text-white rounded-lg shadow-lg p-8 md:p-12 w-full sm:w-80 md:w-96">
        <div className="flex flex-col items-center">
          <img
            src={HeroImg}
            alt="Card Image 1"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-8"
          />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center">මුල සිට සරලව සිංහලෙන්</h2>
          <p className="text-sm md:text-lg font-medium text-center leading-relaxed">
            ඔබගේ සෑම ගැටලුවකටම පිලිතුරු ලැඛෙන විදියට, උදාහරණ සහිතව සාකච්ඡා කිරීම.
            වීඩියෝ, පිංතූර, ලිපි සහ Zoom තාක්ෂණයෙන්, ගෙදර ඉදන් වුනත් ඉගෙන ගත හැකි වීම.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-r from-rose-400 to-red-500 text-white rounded-lg shadow-lg p-8 md:p-12 w-full sm:w-80 md:w-96">
        <div className="flex flex-col items-center">
          <img
            src={HeroImg}
            alt="Card Image 2"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-8"
          />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center">දෙස් විදෙස් උපක්‍රම</h2>
          <p className="text-sm md:text-lg font-medium text-center leading-relaxed">
            පොඩියට නෙමෙයි ලොකුවට කරන්න.. ඔබ ලග ඇති පුංචි දේවල් වලින් පවා
            ශ්‍රී ලංකාව තුළම පමණක් නොවෙයි, ලොව සෑම රටක්ම, ජාත්‍යන්තරයට යා හැකි
            බව සාර්ථක විය හැකි බව ඔබට ඉගෙන ගත හැක.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg p-8 md:p-12 w-full sm:w-80 md:w-96">
        <div className="flex flex-col items-center">
          <img
            src={HeroImg}
            alt="Card Image 3"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-8"
          />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center">ඔබක් සාර්ථක වෙන්න</h2>
          <p className="text-sm md:text-lg font-medium text-center leading-relaxed">
            පාඨමාලාව සාර්ථකව උනන්දුවෙන් කරගෙන යන අය සදහා.. විශේෂ අවධානය,
            සාර්ථක වීමට උපදෙස්, උපකරණ සහ සාර්ථක මැහුම් කරුවන් හමුවීම් සහ
            අනුග්‍රාහකයින් සම්බන්ධ කරවීම.
          </p>
        </div>
      </div>
    </div>
  );
}
