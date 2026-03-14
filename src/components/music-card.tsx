import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Music } from '@/lib/music-data';

type MusicCardProps = {
  music: Music;
};

export default function MusicCard({ music }: MusicCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={music.albumArt}
            alt={`${music.album} album art`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            data-ai-hint="album art"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Badge variant="default" className="mb-2 bg-accent text-accent-foreground">{music.genre}</Badge>
        <CardTitle className="text-xl font-bold font-headline mb-1 text-primary/90">{music.title}</CardTitle>
        <CardDescription className="text-foreground/80 font-semibold">{music.artist}</CardDescription>
        <p className="text-sm text-muted-foreground mt-1">{music.album} ({music.year})</p>
      </CardContent>
    </Card>
  );
}
