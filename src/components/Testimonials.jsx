import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [reviews, setReviews] = useState([
    { author: 'Elena', content: 'An effortless lift—my gaze feels undeniably poised.', rating: 5 },
    { author: 'Marisol', content: 'Quiet luxury in a cluster. The finish is immaculate.', rating: 5 },
    { author: 'Ava', content: 'They wear like a whisper and look like a legacy.', rating: 5 },
  ])

  return (
    <section className="bg-white/60">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl tracking-widest text-gray-900 mb-8">Testimonials</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.176 0l-2.802 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-gray-700">{r.content}</blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
