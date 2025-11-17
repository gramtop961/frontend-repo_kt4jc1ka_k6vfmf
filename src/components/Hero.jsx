export default function Hero({ takeover = false, onExplore }) {
  return (
    <section className={`relative overflow-hidden ${takeover ? 'bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900' : 'bg-[url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center'}`}>
      <div className={`absolute inset-0 ${takeover ? 'opacity-20' : 'bg-black/30'}`}></div>
      <div className="max-w-6xl mx-auto px-4 py-28 relative">
        <div className="max-w-2xl text-white">
          {takeover ? (
            <>
              <h1 className="font-serif text-4xl sm:text-5xl tracking-[0.18em]">Cosmic Elegance: Introducing the Limited Edition Celestial Gaze.</h1>
              <p className="mt-4 text-lg text-indigo-100">Discover muted jewel-toned accents that whisper of constellations and quiet wonder.</p>
              <button onClick={onExplore} className="mt-8 inline-block bg-rose-200/20 hover:bg-rose-200/30 text-rose-100 border border-rose-200/40 px-6 py-3 rounded-md backdrop-blur transition">Discover the Collection Before It Fades</button>
            </>
          ) : (
            <>
              <h1 className="font-serif text-4xl sm:text-5xl tracking-[0.18em]">Discover Your Undeniable Allure.</h1>
              <p className="mt-4 text-lg text-neutral-100">Cultivate a timeless radiance that whispers sophistication.</p>
              <button onClick={onExplore} className="mt-8 inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-md backdrop-blur transition">Explore the Collections</button>
            </>
          )}
        </div>
      </div>
      {takeover && (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
          </defs>
          <g stroke="url(#g)" strokeWidth="0.5">
            {Array.from({ length: 40 }).map((_, i) => (
              <line key={i} x1={Math.random()*100+'%'} y1={0} x2={Math.random()*100+'%'} y2={'100%'} />
            ))}
          </g>
        </svg>
      )}
    </section>
  )
}
