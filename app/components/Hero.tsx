export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0f0a] flex items-center pt-20 overflow-hidden">
     
      <div className="absolute inset-0 flex justify-end items-center opacity-30 pointer-events-none">
        <img 
          src="/images/Big Plant.jpg" 
          alt="Background" 
          className="h-[85%] object-contain mr-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
       
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Earth’s Exhale
          </h1>
          
          <p className="text-xl text-white/70 max-w-md">
            “Earth Exhale” symbolizes the purity and vitality of the Earth’s natural environment and its essential role to sustaining life.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl text-white font-medium">
              Buy Now
            </button>
            <button className="border border-white/50 hover:border-white px-8 py-4 rounded-2xl text-white font-medium flex items-center gap-2">
              ▶️ Live Demo
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}