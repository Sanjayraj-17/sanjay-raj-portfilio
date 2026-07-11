"use client";

import React from "react";
import InfiniteMarquee from "./reactbits/InfiniteMarquee";

// Custom high-quality inline SVGs corresponding to Simple Icons style
const icons = {
  html5: (
    <svg className="w-5 h-5 fill-current text-[#E34F26]" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h11.438l-.208-2.625H5.823l.66 7.875h7.525l-.265 2.969-2.735.742-2.766-.75-.176-1.996H5.402l.332 3.75 6.273 1.696 6.233-1.688.67-7.348H8.531z" />
    </svg>
  ),
  css3: (
    <svg className="w-5 h-5 fill-current text-[#1572B6]" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.9 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 9.802l.219 2.621h9.3l-.33 3.655-3.8 1.025-3.8-1.025-.236-2.622H5.166l.441 5.093 6.37 1.72 6.33-1.72.846-9.522H6.59zM6.15 4.88l.176 2.622h11.372l.233-2.622H6.15z" />
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5 fill-current text-[#F7DF1E]" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.017-.992-1.778-2.228-2.24-1.225-.458-1.127-.855-1.127-1.21 0-.395.343-.572.705-.572.79 0 1.2.333 1.487.981l1.83-1.124C22.147 13.047 21 11.23 18.8 11.23c-2.621 0-4.321 1.65-4.321 4.225 0 2.64 1.83 3.517 4.1 4.399 2.26.852 1.896 1.258 1.896 1.737 0 .438-.396.729-.958.729-.868 0-1.427-.47-1.73-1.07l-1.914 1.13c.893 1.8 2.629 2.185 3.654 2.185 2.922 0 4.969-1.4 4.969-4.3l-.002-.007zm-11.517.433c-.276-.649-.691-1.017-1.399-1.017-.584 0-1 .313-1 .854 0 .51.48.749 1.127.998 1.152.448 2.858.962 2.858 3.504 0 2.517-1.921 4.137-4.538 4.137-2.697 0-4.37-1.37-5.008-3.078l1.87-1.112c.447.881.99 1.288 2.14 1.288 1.147 0 1.51-.54 1.51-1.071 0-.745-.584-1.018-1.38-1.341-1.5-.59-2.857-1.257-2.857-3.418 0-2.3 1.734-3.717 4.024-3.717 2.198 0 3.636.97 4.17 2.454l-1.906 1.11z" />
    </svg>
  ),
  react: (
    <svg className="w-5 h-5 fill-current text-[#61DAFB]" viewBox="0 0 24 24">
      <path d="M23.32 10.437a1.246 1.246 0 00-.592-.562c-.443-.22-1.018-.328-1.68-.328-.352 0-.726.03-1.11.088A18.89 18.89 0 0015.3 7.828c.453-.787.826-1.564 1.1-2.296.257-.694.382-1.3.364-1.782-.027-.723-.33-1.25-.853-1.488a1.272 1.272 0 00-1.176.01c-.482.26-.957.755-1.41 1.464-.326.51-.676 1.134-1.042 1.848a19.043 19.043 0 00-4.572 0c-.365-.714-.716-1.338-1.04-1.848-.454-.71-1.026-1.205-1.51-1.464a1.27 1.27 0 00-1.175-.01c-.524.238-.826.765-.853 1.488-.018.482.107 1.088.364 1.782.274.732.647 1.51 1.1 2.296A18.89 18.89 0 004.06 9.635a8.775 8.775 0 00-1.11-.088c-.663 0-1.238.107-1.68.328a1.246 1.246 0 00-.592.562 1.27 1.27 0 00-.012 1.175c.238.524.765.826 1.488.853.352.018.726-.012 1.11-.07a18.896 18.896 0 004.636 1.807c-.453.787-.826 1.564-1.1 2.296-.257.694-.382 1.3-.364 1.782.027.723.33 1.25.853 1.488.196.09.4.133.602.133a1.276 1.276 0 00.574-.143c.482-.26.957-.755 1.41-1.464.326-.51.676-1.134 1.042-1.848a19.043 19.043 0 004.572 0c.365.714.716 1.338 1.04 1.848.454.71 1.026 1.205 1.51 1.464.195.093.4.143.59.143a1.272 1.272 0 00.585-.143c.524-.238.826-.765.853-1.488.018-.482-.107-1.088-.364-1.782-.274-.732-.647-1.51-1.1-2.296a18.896 18.896 0 004.636-1.807c.384.058.758.088 1.11.07.723-.027 1.25-.33 1.488-.853a1.27 1.27 0 00.012-1.175zM12 14.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" />
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5 fill-current text-[#06B6D4]" viewBox="0 0 24 24">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  python: (
    <svg className="w-5 h-5 fill-current text-[#3776AB]" viewBox="0 0 24 24">
      <path d="M11.984 0c-3.148 0-5.118.188-6.19.467-.655.17-1.127.42-1.51.8-.465.46-.72 1.12-.767 2.124-.047 1.004.004 2.26.012 3.16v1.077h6.638v.853H3.535C2.5 8.48 1.566 9.387 1.196 10.457c-.37 1.07-.37 2.457-.37 3.568 0 1.11 0 2.497.37 3.567.37 1.07 1.304 1.977 2.339 1.977h2.247v-3.16c0-1.168.966-2.124 2.133-2.124h6.638c1.167 0 2.133.956 2.133 2.124v3.16h2.247c1.035 0 1.97-.907 2.34-1.977.37-1.07.37-2.457.37-3.567 0-1.11 0-2.497-.37-3.568-.37-1.07-1.305-1.977-2.34-1.977h-2.14v-2.07c0-1.168-.966-2.124-2.133-2.124H11.98zM9.014 2.215a.96.96 0 01.96.96.96.96 0 01-.96.96.96.96 0 01-.96-.96.96.96 0 01.96-.96zm5.972 15.688a.96.96 0 01.96.96.96.96 0 01-.96.96.96.96 0 01-.96-.96.96.96 0 01.96-.96z" />
    </svg>
  ),
  java: (
    <svg className="w-5 h-5 fill-current text-[#007396]" viewBox="0 0 24 24">
      <path d="M9.02 21.054c.036-.008.075-.015.11-.02a5.4 5.4 0 01.928-.088c1.558.026 3.109.43 4.6.93 1.705.57 3.56.963 5.342.963 1.488 0 2.827-.272 3.654-1.096.797-.797.947-1.928.947-2.909 0-2.585-2.016-4.66-4.66-5.836l-.37-.158c-1.353-.592-2.735-1.176-4.088-1.782l-.465-.21a30.932 30.932 0 01-3.694-1.9c-.394-.237-.775-.483-1.147-.745C9.4 7.683 8.71 6.848 8.71 5.761a2.8 2.8 0 01.442-1.485c.576-.897 1.57-1.42 2.653-1.42 1.258 0 2.378.7 3.1 1.758a5.9 5.9 0 01.764 2.122h2.955a8.766 8.766 0 00-1.173-3.66C16.326.973 14.545 0 12.516 0A5.95 5.95 0 007.41 2.875 5.8 5.8 0 006.31 5.81c0 2.474 1.485 4.3 3.125 5.485.452.327.915.626 1.393.9 1.15.656 2.33 1.25 3.5 1.83.6.3 1.2.6 1.8.91 2 .988 3.56 2.505 3.56 4.347 0 .49-.074 1.05-.476 1.455-.4.4-.95.534-1.597.534-1.255 0-2.58-.28-3.79-.696-1.58-.54-3.23-.97-4.9-1.002a7.3 7.3 0 00-1.58.15l-.26.06c-1.425.37-2.656 1.346-3.1 2.657a4.93 4.93 0 00.384 3.7c.72 1.272 2.053 2.012 3.655 2.012 1.1 0 2.18-.35 3.18-.9l-.865-2.21a5.4 5.4 0 01-.84.28 2.13 2.13 0 01-1.16 0c-.575-.175-.856-.63-.856-1.11a2.1 2.1 0 011.36-1.98z" />
    </svg>
  ),
  mysql: (
    <svg className="w-5 h-5 fill-current text-[#4479A1]" viewBox="0 0 24 24">
      <path d="M12.01 0C5.39 0 0 5.39 0 12.01S5.39 24 12.01 24s12.01-5.39 12.01-12.01S18.63 0 12.01 0zm5.955 17.06c-.466.86-1.48 1.47-2.485 1.637-.624.1-1.28.026-1.908-.182-.2-.066-.398-.158-.57-.272-.612-.405-1.137-.99-1.576-1.58-.456-.615-.815-1.3-.984-2.072-.116-.54-.15-.992-.095-1.423a2.956 2.956 0 01.378-1.11 2.96 2.96 0 011.11-.79c.62-.27 1.29-.27 1.91 0 .61.27 1.11.79 1.38 1.41.27.62.27 1.29 0 1.91-.27.62-.79 1.11-1.41 1.38-.62.27-1.29.27-1.91 0-.61-.27-1.11-.79-1.38-1.41l-1.905-.733c.31 1.08.89 2.056 1.7 2.766a5.536 5.536 0 003.504 1.162c1.077-.024 2.11-.532 2.793-1.344.68-.813.972-1.91.815-2.955-.157-1.045-.735-1.96-1.633-2.485a5.534 5.534 0 00-3.568-.372c-.895.22-1.724.71-2.33 1.38L8.14 7.02c.624-.623 1.48-1.077 2.486-1.282.915-.188 1.884-.1 2.794.254a6.565 6.565 0 013.396 3.518c.613 1.58.468 3.328-.394 4.793-.863 1.464-2.378 2.42-4.085 2.585a6.582 6.582 0 01-4.796-1.74l-.9.9c.732.732 1.636 1.28 2.656 1.564.912.25 1.884.28 2.794.08a7.585 7.585 0 004.88-3.633z" />
    </svg>
  ),
  mongodb: (
    <svg className="w-5 h-5 fill-current text-[#47A248]" viewBox="0 0 24 24">
      <path d="M12 .002c-1.57 0-3.418 3.567-4.148 5.76C6.772 9.006 6.326 12.35 6.877 15.6c.465 2.734 1.895 4.8 3.754 6.223.473.363.953.69 1.369.948v1.23h1.23v-1.23c.416-.258.896-.585 1.37-.948 1.858-1.424 3.288-3.49 3.753-6.223.55-3.25.105-6.594-1.047-9.838-.73-2.193-2.578-5.76-4.148-5.76zm-.615 3.016c.3-.59.93-.59 1.23 0 .54.913.916 2.054 1.23 3.195H10.15c.315-1.14.69-2.28 1.23-3.195zm-2.072 4.425h5.374c.264 1.155.39 2.37.377 3.568H8.937c-.013-1.2.113-2.413.376-3.568zm-.208 4.792h5.795c-.067 1.2-.27 2.37-.59 3.504H9.7c-.32-1.134-.523-2.3-.59-3.504zm.377 4.729h5.041c-.347 1.133-.912 2.193-1.637 3.078h-1.767c-.725-.885-1.29-1.945-1.637-3.078z" />
    </svg>
  ),
  git: (
    <svg className="w-5 h-5 fill-current text-[#F05032]" viewBox="0 0 24 24">
      <path d="M23.384 11.41L12.59.616a1.686 1.686 0 00-2.384 0l-2.07 2.07 3.217 3.217a3.25 3.25 0 014.28 4.28l3.216 3.216a3.245 3.245 0 011.666 5.86c.642.477.854 1.347.477 1.99a1.442 1.442 0 01-1.99.477 1.444 1.444 0 01-.477-1.99 3.254 3.254 0 01-1.67-4.48l-3.217-3.217v5.335a3.25 3.25 0 01.378 5.753A1.444 1.444 0 0112.59 24a1.444 1.444 0 01-1.444-1.444 3.252 3.252 0 012.133-3.048V11.233a3.252 3.252 0 01-2.133-3.048c0-.687.214-1.348.607-1.905L8.535 3.064 2.215 9.384a1.686 1.686 0 000 2.384L12.986 22.56a1.686 1.686 0 002.384 0L23.38 13.8a1.682 1.682 0 00.004-2.39z" />
    </svg>
  ),
  vscode: (
    <svg className="w-5 h-5 fill-current text-[#007ACC]" viewBox="0 0 24 24">
      <path d="M23.985 6.804a.6.6 0 00-.281-.462L19.467 3.65a.6.6 0 00-.7-.037L10.5 8.784 4.545 4.195a.6.6 0 00-.7-.037L.3.69A.6.6 0 000 1.2V22.8a.6.6 0 00.3.513l3.548 2.47a.6.6 0 00.7-.037l5.955-4.588 8.267 5.17a.6.6 0 00.7-.037l4.237-2.69a.6.6 0 00.281-.462V6.804zm-14.733 8.35L4.546 11.2l4.706-3.955v7.908zm1.2-9.155l8.267-5.17v18.31l-8.267-5.17V5.998z" />
    </svg>
  ),
  nodejs: (
    <svg className="w-5 h-5 fill-current text-[#339933]" viewBox="0 0 24 24">
      <path d="M12 0L2.4 5.5v11L12 22l9.6-5.5v-11L12 0zm0 3.25l7.15 4.125v8.25L12 19.75l-7.15-4.125v-8.25L12 3.25zM12 6.5A2.5 2.5 0 009.5 9a2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5zm0 1.25a1.25 1.25 0 011.25 1.25c0 .69-.56 1.25-1.25 1.25A1.25 1.25 0 0110.75 9c0-.69.56-1.25 1.25-1.25zm0 4.25a5 5 0 00-5 5H17a5 5 0 00-5-5zm0 1.25a3.75 3.75 0 013.75 3.75H8.25a3.75 3.75 0 013.75-3.75z" />
    </svg>
  ),
  ai: (
    <svg className="w-5 h-5 fill-current text-[#8B5CF6]" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14.5a1 1 0 11-2 0V11a1 1 0 012 0v5.5zm0-8a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  )
};

// Frontend and Tools
const row1Skills = [
  { name: "HTML5", level: "Advanced", icon: icons.html5 },
  { name: "CSS3", level: "Advanced", icon: icons.css3 },
  { name: "JavaScript", level: "Advanced", icon: icons.javascript },
  { name: "React", level: "Intermediate", icon: icons.react },
  { name: "Tailwind CSS", level: "Intermediate", icon: icons.tailwind },
  { name: "UI/UX Design", level: "Intermediate", icon: icons.html5 }, // Fallback to HTML5 icon or react icon
  { name: "Git & GitHub", level: "Advanced", icon: icons.git },
  { name: "VS Code", level: "Advanced", icon: icons.vscode },
  { name: "NPM / Node.js", level: "Intermediate", icon: icons.nodejs },
];

// Backend, Databases, and AI
const row2Skills = [
  { name: "Python", level: "Advanced", icon: icons.python },
  { name: "Java", level: "Intermediate", icon: icons.java },
  { name: "Data Structures", level: "Advanced", icon: icons.python },
  { name: "MySQL", level: "Advanced", icon: icons.mysql },
  { name: "MongoDB", level: "Intermediate", icon: icons.mongodb },
  { name: "DBMS", level: "Advanced", icon: icons.mysql },
  { name: "Generative AI", level: "Beginner", icon: icons.ai },
  { name: "Prompt Engineering", level: "Intermediate", icon: icons.ai },
  { name: "Model Tuning", level: "Beginner", icon: icons.ai },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6 relative w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-radial-[circle_at_center,rgba(0,240,255,0.02)_0%,transparent_70%] pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-accent rounded-full" />
        </div>

        {/* Scrolling Marquees */}
        <div className="space-y-8 w-full max-w-full">
          {/* Row 1: Frontend & Tools */}
          <div className="w-full">
            <h3 className="text-xs font-mono font-medium text-gray-500 uppercase tracking-widest mb-4 px-2">
              Frontend & Tools
            </h3>
            <InfiniteMarquee direction="left" speed="25s" className="py-3">
              {row1Skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-panel border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all shrink-0 select-none min-w-[200px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 font-sans">
                      {skill.name}
                    </h4>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </InfiniteMarquee>
          </div>

          {/* Row 2: Backend, Database & AI */}
          <div className="w-full">
            <h3 className="text-xs font-mono font-medium text-gray-500 uppercase tracking-widest mb-4 px-2">
              Backend, Database & AI
            </h3>
            <InfiniteMarquee direction="right" speed="25s" className="py-3">
              {row2Skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-panel border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all shrink-0 select-none min-w-[200px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 font-sans">
                      {skill.name}
                    </h4>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </InfiniteMarquee>
          </div>
        </div>
      </div>
    </section>
  );
}
