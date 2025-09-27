import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const imagePaths = [
  "/gallery/img-01.jpeg", // substitua pelo nome real do arquivo se necessário
  "/gallery/img-02.jpeg",
  "/gallery/img-07.jpeg",
  "/gallery/img-09.jpeg",
  "/gallery/img-03.jpeg",
  "/gallery/img-06.jpeg",
  "/gallery/img-05.jpeg",
  "/gallery/img-08.jpeg",
  "/gallery/img-04.jpeg",
];

// Mantém a alternância de tamanhos
const images = imagePaths.map((src, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return { src, width, height };
});

export function PhotosGallery() {
  return (
    <section id="photos">
      <div className="space-y-12 w-full py-12">
        {/*
        <BlurFade delay={0.25}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Galeria
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Momentos capturados
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Uma coleção de momentos e experiências que moldaram minha jornada
                profissional e pessoal.
              </p>
            </div>
            
          </div>
        </BlurFade>
        */}
        <div className="columns-2 gap-4 sm:columns-3 max-w-4xl mx-auto">
          {images.map((img, idx) => (
            <BlurFade key={img.src} delay={0.25 + idx * 0.05} inView>
              <Image
                className="mb-4 size-full rounded-lg object-cover"
                src={img.src}
                alt={`Foto da galeria ${idx + 1}`}
                width={img.width}
                height={img.height}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
