export default function Footer() {
  return (
    <footer className="bg-[#0a0f0a] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
        
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🌱</div>
              <span className="text-3xl font-semibold">FloraVision.</span>
            </div>
            
            <p className="text-white/70 leading-relaxed text-[15px] max-w-sm">
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </p>

            <div className="flex gap-8 mt-12 text-xl text-white/70">
              <span>FB</span>
              <span>TW</span>
              <span>LI</span>
            </div>
          </div>

    
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Quick Link's</h4>
            <div className="space-y-4 text-white/70">
              <p>Home</p>
              <p>Type's Of plant's</p>
              <p>Contact</p>
              <p>Privacy</p>
            </div>
          </div>

    
          <div>
            <h4 className="text-white text-lg font-medium mb-6">For Every Update.</h4>
            
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="flex-1 bg-transparent border border-white/40 focus:border-white px-6 py-4 rounded-2xl text-sm outline-none"
              />
              <button className="bg-white text-black px-10 rounded-2xl font-medium hover:bg-green-400 transition-colors">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-white/50 text-sm mt-16">
              FloraVision © all right reserve
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}