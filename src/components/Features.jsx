const features = [
  {
    title: "Instant Record Tracking",
    description: "Quickly access and manage livestock records."
  },
  {
    title: "Transfer Management",
    description: "Handle animal transfers seamlessly."
  },
  {
    title: "Audit Ready Reports",
    description: "Stay compliant with clear documentation."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-12">Features</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
