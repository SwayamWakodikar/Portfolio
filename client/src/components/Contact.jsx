import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setStatus('')
      }, 3000)
    }, 1000)
  }

  return (
    <div className="w-screen min-h-screen py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent inline-block mb-4">
            Get In Touch
          </h2>
          <p className="text-indigo-200/60 mt-3 text-lg font-medium max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="relative p-8 lg:p-12 rounded-3xl bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-indigo-200/80 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-indigo-100 placeholder-indigo-200/30 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-indigo-200/80 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-indigo-100 placeholder-indigo-200/30 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-indigo-200/80 ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-indigo-100 placeholder-indigo-200/30 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl h-14 overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>
                    Message Sent!
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center font-medium animate-pulse">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
