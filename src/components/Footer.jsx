export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-4">
              NLISBuddy
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simplifying livestock compliance management for Australian producers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5 className="font-semibold mb-4">Product</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-primary transition">Features</a></li>
              <li><a href="#how" className="hover:text-primary transition">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition">Download</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition">About</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} NLISBuddy. All rights reserved.
          </p>
          <p>
            Built in Australia 🇦🇺
          </p>
        </div>

      </div>
    </footer>
  )
}
