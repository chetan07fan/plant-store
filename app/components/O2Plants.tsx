export default function O2Plants() {
  return (
    <section className="bg-[#0a0f0a] py-20 border-t border-green-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#111] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center border border-green-900">
          
        
          <div className="relative">
            <img 
              src="/images/Aglaonema.png" 
              alt="O2 Plant"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-green-400 text-sm font-medium tracking-widest">O₂ COLLECTION</span>
              <h2 className="text-4xl font-bold text-white mt-3 leading-tight">
                Our Best O2 Plants
              </h2>
            </div>

            <div>
              <h3 className="text-white text-2xl font-medium mb-4">
                We Have Small And Best O2 Plants Collection's
              </h3>
              <p className="text-white/70 leading-relaxed">
                Oxygen-producing plants, often referred to as "O2 plants", are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>
            </div>

            <button className="border border-green-600 text-green-400 hover:bg-green-900 px-8 py-3.5 rounded-2xl font-medium transition-all">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}