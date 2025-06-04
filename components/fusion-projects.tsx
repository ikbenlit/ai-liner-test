const projects = [
  {
    title: "Project Synthesis",
    description: "Merging classic AI algorithms with matrix consciousness protocols.",
    status: "FUSION_ACTIVE",
    progress: 95,
    progressGradient: "from-[#2E9BDA] via-[#00ff41] to-[#ff0080]",
    statusColor: "text-[#00ff41]",
    category: "HYBRID",
  },
  {
    title: "Reality Bridge",
    description: "Creating seamless transitions between terminal and matrix realities.",
    status: "TESTING",
    progress: 78,
    progressGradient: "from-[#F5B041] via-[#ff0080] to-[#00bfff]",
    statusColor: "text-[#F5B041]",
    category: "BRIDGE",
  },
  {
    title: "Dual Consciousness",
    description: "AI systems capable of operating in both classic and matrix modes.",
    status: "DEVELOPMENT",
    progress: 62,
    progressGradient: "from-[#E74C3C] via-[#00ff41] to-[#2E9BDA]",
    statusColor: "text-[#ff0080]",
    category: "AI_CORE",
  },
  {
    title: "Fusion Protocol",
    description: "Universal communication standard for cross-reality data exchange.",
    status: "RESEARCH",
    progress: 34,
    progressGradient: "from-[#00bfff] via-[#F5B041] to-[#E74C3C]",
    statusColor: "text-[#00bfff]",
    category: "PROTOCOL",
  },
]

export default function FusionProjects() {
  return (
    <section className="py-16 border-t border-[#333]" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./fusion_projects
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Active development bridging classic terminal and matrix realities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a]/80 p-6 hover:border-[#2E9BDA] transition-all duration-300 relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] animate-fusion-scan"></div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#2E9BDA] group-hover:text-[#00ff41] transition-colors">
                {project.title}
              </h3>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 border rounded ${project.statusColor} border-current`}>
                  {project.status}
                </span>
                <div className="text-xs text-[#666] mt-1">{project.category}</div>
              </div>
            </div>

            <p className="text-[#666] mb-6 group-hover:text-[#999] transition-colors">{project.description}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#2E9BDA]">Fusion Progress</span>
                <span className="text-[#ff0080]">{project.progress}%</span>
              </div>
              <div className="w-full bg-black h-3 border border-[#333] overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${project.progressGradient} shadow-[0_0_15px_rgba(46,155,218,0.5)] transition-all duration-1000`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <a href="#" className="inline-flex items-center text-[#2E9BDA] hover:text-[#00ff41] transition-colors">
                ./access_project <span className="ml-2">{"→"}</span>
              </a>
              <div className="text-xs text-[#333] group-hover:text-[#00ff41] transition-colors">
                {"["}FUSION_ID: {String(index + 1).padStart(3, "0")}
                {"]"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
