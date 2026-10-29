import { contactPageContent } from "@/config/content/contact-page";

const { map } = contactPageContent;

export function ContactMapSection() {
  const src = `https://www.google.com/maps?q=${map.embedQuery}&output=embed`;

  return (
    <section className="bg-white pb-0" aria-label={map.title}>
      <div className="relative h-[min(28rem,70vh)] w-full overflow-hidden">
        <iframe
          title="Green Planet Services — Melbourne Headquarters map"
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
