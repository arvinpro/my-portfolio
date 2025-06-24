import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    // Animate progress bars based on data-width
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      if (width) {
        bar.style.width = width;
      }
    });
  }, []);

  return (
    <div id='skills' className="h-full min-h-screen">
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with regularly.
            </p>
          </div>

          {/* Skill Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'HTML5', icon: 'html5/html5-original.svg' },
              { name: 'CSS3', icon: 'css3/css3-original.svg' },
              { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
              { name: 'React', icon: 'react/react-original.svg' },
              { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-plain.svg' },
              { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
            ].map(({ name, icon }) => (
              <div
                key={name}
                className="group relative p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-full h-24 flex items-center justify-center">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
                    alt={name}
                    className="h-12 w-12 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-center font-medium text-gray-800 dark:text-gray-200">{name}</h3>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-400 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Skill Progress */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Skill Proficiency</h3>

            <div className="space-y-6">
              {[
                { label: 'Frontend Development', percent: '90%' },
                { label: 'UI/UX Design', percent: '75%' },
                { label: 'Backend Development', percent: '80%' },
              ].map(({ label, percent }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">{label}</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{percent}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className="progress-bar bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: '0%' }}
                      data-width={percent}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
