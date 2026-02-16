import Logo from "../assets/logo.png"; 
export default function Navbar() {
  return (
        <header className="fixed w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">NLISBuddy</h1>

            <nav className="hidden md:flex flex-1 justify-end gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-accent">Features</a>
            <a href="#how" className="hover:text-accent">How It Works</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
            <button className="bg-primary text-white px-5 py-2 rounded-xl hover:bg-accent transition">
              Download
            </button>
            </nav>

        </div>
        </header>

  )
}