const topSelling = [
  {
    name: "Aglaonema plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "300",
    image: "/images/Aglaonema.png"
  },
  {
    name: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.",
    price: "380",
    image: "/images/plantain.png"
  },
  {
    name: "Cactus",
    desc: "It is known for their ability to thrive in and environments",
    price: "259",
    image: "/images/Cactus.png"
  },
  {
    name: "Swiss cheese Plant",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "400",
    image: "/images/monstera.png"
  },
  {
    name: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "450",
    image: "/images/sansevieria.png"
  },
  {
    name: "Agave plant",
    desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "359",
    image: "/images/agave.png"
  }
];

export default function TopSelling() {
  return (
    <section className="bg-[#0a0f0a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our Top Selling Plants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topSelling.map((plant, index) => (
            <div key={index} className="bg-[#111] rounded-3xl overflow-hidden border border-green-900 hover:border-green-600 transition-all group">
              
              <div className="h-72 relative">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">{plant.name}</h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-4">
                  {plant.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-green-400">Rs. {plant.price}/-</span>
                  <button className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-2xl flex items-center justify-center transition-all">
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}