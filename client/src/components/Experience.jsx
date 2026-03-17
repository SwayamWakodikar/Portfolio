import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Backend Developer Intern",
      company: "Tech Systems Solutions",
      duration: "Summer 2024",
      location: "Remote",
      description: [
        "Architected and maintained RESTful microservices using Node.js and Express",
        "Optimized database queries and API response times by 30% through effective indexing and caching",
        "Implemented secure JWT-based authentication and authorization flows across distributed services",
        "Contributed to CI/CD pipeline automation for automated testing and deployment"
      ],
      type: "work"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      company: "Various Projects",
      duration: "2023 - Present",
      location: "Remote",
      description: [
        "Contributed to backend performance optimizations and bug fixes in open-source repositories",
        "Participated in system design discussions and collaborated on infrastructure-as-code (IaC) templates",
        "Improved documentation for API endpoints and system architectures",
        "Mentored new contributors on best practices for backend development"
      ],
      type: "work"
    },
    {
      id: 3,
      title: "B.Tech in Electronics and Communication Engineering",
      company: "Pimpri Chinchwad College of Engineering (PCCOE)",
      duration: "2023 - 2027",
      location: "Pune, India",
      description: [
        "Relevant Coursework: Data Structures, Operating Systems, Database Management Systems, Computer Networks",
        "Focused on bridge between hardware and software, including Embedded Systems and Digital Logic",
        "Active member of the Technical Coding Club and System Design Study Group",
        "Consistently maintaining a strong academic record in core engineering subjects"
      ],
      type: "education"
    }
  ]

  return (
    <div className="w-full min-h-screen py-20 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-green-700 dark:to-green-900 bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-700 dark:text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-300 dark:from-green-300 dark:via-green-500 dark:to-green-300 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-600 dark:bg-green-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform md:-translate-x-1/2 z-10"></div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                >
                  <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-700 dark:text-green-700 font-semibold text-lg">
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

                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
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
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-cyan-600 dark:text-green-600 mt-1.5">▸</span>
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
