export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-12">
          How It Works
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-4">1</div>
            <h4 className="text-xl font-semibold mb-2">
              Enter Animal ID
            </h4>
            <p className="text-gray-600">
              Quickly scan or enter livestock details.
            </p>
          </div>

          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-4">2</div>
            <h4 className="text-xl font-semibold mb-2">
              Manage Transfers
            </h4>
            <p className="text-gray-600">
              Log and track animal movements easily.
            </p>
          </div>

          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-4">3</div>
            <h4 className="text-xl font-semibold mb-2">
              Stay Compliant
            </h4>
            <p className="text-gray-600">
              Generate audit-ready reports anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
