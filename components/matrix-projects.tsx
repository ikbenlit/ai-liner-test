const projects = [
  {
    title: "Project Zion",
    description: "Advanced AI consciousness transfer protocol for digital immortality.",
    status: "ACTIVE",
    progress: 100,
    progressColor: "from-[#00ff41] to-[#00ff41]",
    statusColor: "text-[#00ff41]",
  },
  {
    title: "Oracle.exe",
    description: "Predictive analytics system capable of seeing multiple future timelines.",
    status: "TESTING",
    progress: 85,
    progressColor: "from-[#ff0080] to-[#00ff41]",
    statusColor: "text-[#ff0080]",
  },
  {
    title: "Agent Smith",
    description: "Self-replicating security protocol for system protection and monitoring.",
    status: "CONTAINED",
    progress: 60,
    progressColor: "from-[#00bfff] to-[#ff0080]",
    statusColor: "text-[#00bfff]",
  },
  {
    title: "Red Pill Protocol",
    description: "Reality awakening system for consciousness liberation programs.",
    status: "CLASSIFIED",
    progress: 30,
    progressColor: "from-[#ff0080] to-[#00bfff]",
    statusColor: "text-[#ff0080]",
  },
]

export default function MatrixProjects() {
  return (
    <section className="py-16 border-t border-[#333]" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ff0080] mb-4 relative">
          ./active_projects
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Current operations in the digital realm and consciousness matrix
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a] p-6 hover:border-[#00ff41] transition-all duration-300 relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff0080] via-[#00ff41] to-[#00bfff] animate-matrix-scan"></div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#00bfff] group-hover:text-[#ff0080] transition-colors">
                {project.title}
              </h3>
              <span className={`text-xs px-2 py-1 border rounded ${project.statusColor} border-current`}>
                {project.status}
              </span>
            </div>

            <p className="text-[#666] mb-6 group-hover:text-[#999] transition-colors">{project.description}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#00ff41]">Progress</span>
                <span className="text-[#ff0080]">{project.progress}%</span>
              </div>
              <div className="w-full bg-black h-3 border border-[#333] overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${project.progressColor} shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all duration-1000`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <a href="#" className="inline-flex items-center text-[#00ff41] hover:text-[#ff0080] transition-colors">
                ./access_files <span className="ml-2">{"→"}</span>
              </a>
              <div className="text-xs text-[#333] group-hover:text-[#00ff41] transition-colors">
                {"["}ID: {String(index + 1).padStart(3, "0")}
                {"]"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
