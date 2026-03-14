import MusicCard from '@/components/music-card';
import { favoriteMusic } from '@/lib/music-data';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function MusicPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section id="music" className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 font-headline text-primary">
              My Favorite Music
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {favoriteMusic.map((music) => (
                <MusicCard key={music.id} music={music} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
