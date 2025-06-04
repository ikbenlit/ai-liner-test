const projects = [
  {
    title: "NeuralSense AI",
    description: "Advanced neural network for sentiment analysis with 98.7% accuracy.",
    progress: 100,
    progressColor: "bg-[#2E9BDA]",
  },
  {
    title: "DataStream Processing",
    description: "Real-time data processing pipeline handling 10TB+ daily.",
    progress: 75,
    progressColor: "bg-[#F5B041]",
  },
  {
    title: "SecureAI Platform",
    description: "Enterprise-grade security for AI implementations.",
    progress: 50,
    progressColor: "bg-[#E74C3C]",
  },
  {
    title: "AITrainer Module",
    description: "Self-improving AI training system for continuous learning.",
    progress: 25,
    progressColor: "bg-[#2E9BDA]",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 border-t border-[#333]" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#F5B041] mb-4">./projects</h2>
        <p className="text-[#999] max-w-2xl mx-auto">Our latest AI innovations and ongoing development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#1a1a1a] p-6 hover:border-[#2E9BDA] transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-[#F5B041]">{project.title}</h3>
            <p className="text-[#999] mb-4">{project.description}</p>

            <div className="mb-2 text-sm text-[#2E9BDA]">Progress: {project.progress}%</div>
            <div className="w-full bg-[#0a0a0a] h-2 mb-4">
              <div className={`h-full ${project.progressColor}`} style={{ width: `${project.progress}%` }}></div>
            </div>

            <a href="#" className="inline-flex items-center text-[#2E9BDA] hover:text-[#F5B041] transition-colors">
              ./view_details <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
