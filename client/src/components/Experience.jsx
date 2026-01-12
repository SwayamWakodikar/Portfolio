import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Tech Company Inc.",
      duration: "Summer 2024",
      location: "Remote",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with a team of 5 developers on agile projects",
        "Implemented RESTful APIs and optimized database queries",
        "Participated in code reviews and contributed to technical documentation"
      ],
      type: "work"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Startup XYZ",
      duration: "2023 - Present",
      location: "Remote",
      description: [
        "Built scalable web applications from scratch",
        "Integrated third-party APIs and payment gateways",
        "Improved application performance by 40% through optimization",
        "Mentored junior developers and conducted technical training sessions"
      ],
      type: "work"
    },
    {
      id: 3,
      title: "Bachelor's in Computer Science",
      company: "University Name",
      duration: "2021 - 2025",
      location: "City, Country",
      description: [
        "Relevant coursework: Data Structures, Algorithms, Database Systems",
        "Projects: Machine Learning models, Distributed Systems",
        "Dean's List: Fall 2022, Spring 2023",
        "Student Organizations: Coding Club, Tech Society"
      ],
      type: "education"
    }
  ]

  return (
    <div className="w-full min-h-screen py-20 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-linear-to-r from-green-700 to-green-900 bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-300 via-green-500 to-green-300 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-green-700 font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.type === 'work'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                          }`}
                      >
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-600 mt-1.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
