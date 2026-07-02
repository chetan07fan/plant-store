const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "The plants arrived in perfect condition. My Monstera is thriving!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Rahul Verma",
    text: "Best quality plants and excellent packaging. Highly recommended.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Ananya Patel",
    text: "My snake plant is doing great. Love the care guide that came with it.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function CustomerReviews() {
  return (
    <section className="bg-[#111] py-20 border-t border-green-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-white/60 mb-16">Real stories from real plant lovers</p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#1a1f1a] p-8 rounded-3xl border border-green-900">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">{review.name}</p>
                  <div className="text-yellow-400">{'★'.repeat(review.rating)}</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                “{review.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}