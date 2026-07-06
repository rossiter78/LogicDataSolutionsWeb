import type { RecognitionCardData } from "@/lib/recognition";
import {
  IconArchive,
  IconChat,
  IconLoop,
  IconRebuild,
  IconSpark,
} from "@/components/icons";

const icons = {
  chat: IconChat,
  loop: IconLoop,
  archive: IconArchive,
  rebuild: IconRebuild,
  spark: IconSpark,
};

/*
  Leads with the visitor's problem in their own words; the underlying
  capability (card.hiddenCapability) is intentionally never rendered.
*/
export default function RecognitionCard({
  card,
}: {
  card: RecognitionCardData;
}) {
  const Icon = icons[card.icon];
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-ink-700 bg-ink-800 p-7 transition-colors hover:border-ink-600">
      <Icon className="h-8 w-8 text-red-bright" />
      <h3 className="font-display text-lg font-bold text-offwhite">
        {card.symptomHeadline}
      </h3>
      <p className="text-[0.95rem] leading-relaxed text-mist">{card.promise}</p>
    </div>
  );
}
