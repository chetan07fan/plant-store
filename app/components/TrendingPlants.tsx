export default function TrendingPlants() {
  return (
    <section className="bg-[#0a0f0a] py-24 relative overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Big Plant.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Our Trendy plants
        </h2>
        <p className="text-center text-white/60 mb-16">Discover our most loved plants</p>

        <div className="space-y-8">
        
          <div className="bg-[#111]/90 backdrop-blur-[40px] border border-white/10 rounded-[32px] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="/images/RoseGold.png" 
                  alt="Plant" 
                  className="w-full rounded-3xl"
                />
              </div>
              <div>
                <h3 className="text-white text-3xl font-semibold mb-4">For Your Desks Decorations</h3>
                <p className="text-white/70 leading-relaxed text-[15px]">
                  I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                </p>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-green-400 text-4xl font-bold">Rs. 599/-</span>
                  <button className="border border-green-600 hover:bg-green-900 text-green-400 px-8 py-3.5 rounded-2xl text-sm transition-all">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>

     
          <div className="bg-[#111]/90 backdrop-blur-[40px] border border-white/10 rounded-[32px] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="md:order-2">
                <img 
                  src="/images/sansevieria.png" 
                  alt="Plant" 
                  className="w-full rounded-3xl"
                />
              </div>
              <div>
                <h3 className="text-white text-3xl font-semibold mb-4">For Your Desks Decorations</h3>
                <p className="text-white/70 leading-relaxed text-[15px]">
                  The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
                </p>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-green-400 text-4xl font-bold">Rs. 399/-</span>
                  <button className="border border-green-600 hover:bg-green-900 text-green-400 px-8 py-3.5 rounded-2xl text-sm transition-all">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}