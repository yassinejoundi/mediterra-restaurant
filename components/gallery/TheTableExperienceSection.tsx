import Image from "next/image";
import Link from "next/link";
import winePourImage from "../../src/assets/images/remote-image-021fb559677c.png";
import dinnerTableImage from "../../src/assets/images/remote-image-c67397882450.png";
import breadOlivesImage from "../../src/assets/images/remote-image-1805379d3150.png";

export function TheTableExperienceSection() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-8 mb-32 reveal-on-scroll">
      <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-accent font-label text-sm uppercase tracking-widest mb-4 block">Section 03</span>
      <h2 className="text-4xl font-serif text-espresso">The Table Experience</h2>
      <p className="text-taupe mt-4">Cinematic moments shared over candlelight. The clinking of crystal, the soft murmur of conversation, and the effortless grace of hospitality.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* Experience Item 1 */}
      <div className="group">
      <div className="aspect-square rounded-xl overflow-hidden bg-linen mb-6 relative">
      <Image className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Waiter pouring red wine at a candlelit table" data-alt="Cinematic shot of a waiter's hands elegantly pouring red wine into a delicate crystal glass at a candlelit table. The background is softly blurred, showing the warm, golden ambiance of a high-end restaurant with textured plaster walls and copper accents. The scene evokes a sense of premium, attentive service and quiet luxury." src={winePourImage} fill sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <p className="text-accent font-label text-xs uppercase tracking-widest">The Pour</p>
      </div>
      {/* Experience Item 2 */}
      <div className="group">
      <div className="aspect-square rounded-xl overflow-hidden bg-linen mb-6 relative">
      <Image className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Candlelit dinner table in a Moroccan riad" data-alt="A wide, atmospheric shot of a dinner table at night in a Moroccan riad. Multiple tall white candles are lit, their flames reflecting in polished silverware and wine glasses. The table is covered in a heavy, cream-colored linen cloth. A soft-focus view of a lush garden is visible through an archway in the distance. The mood is serene, romantic, and deeply immersive." src={dinnerTableImage} fill sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <p className="text-accent font-label text-xs uppercase tracking-widest">The Ambiance</p>
      </div>
      {/* Experience Item 3 */}
      <div className="group">
      <div className="aspect-square rounded-xl overflow-hidden bg-linen mb-6 relative">
      <Image className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Mediterranean table with bread and olives" data-alt="Close-up of a beautifully set Mediterranean table featuring handmade ceramic plates, a crusty loaf of bread in a wicker basket, and a small dish of dark olives. The scene is lit by warm, low-angled evening light, casting long, soft shadows across the textured linen tablecloth. Everything feels organic, artisanal, and inviting." src={breadOlivesImage} fill sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <p className="text-accent font-label text-xs uppercase tracking-widest">The Shared Bread</p>
      </div>
      </div>
      <div className="flex justify-center">
      <Link className="bg-wine text-ivory px-10 py-4 rounded-full font-label text-base uppercase tracking-widest hover:shadow-xl transition-all" href="/reservations">
                      Reserve a Table
                  </Link>
      </div>
      </section>
    </>
  );
}
