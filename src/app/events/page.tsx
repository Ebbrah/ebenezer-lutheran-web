import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { MatukioPhotoAlbum } from "@/components/page-photos";
import { matukioAlbum } from "@/data/page-photos";

export const metadata: Metadata = {
  title: "Matukio",
  description:
    "Albamu ya picha za shughuli za Usharika wa Ebenezer — ibada, vikundi, na huduma.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Matukio"
        description="Picha za shughuli mbalimbali za Usharika — ibada, vikundi, uongozi, na huduma za kijamii."
      />

      <MatukioPhotoAlbum items={matukioAlbum} />
    </div>
  );
}
