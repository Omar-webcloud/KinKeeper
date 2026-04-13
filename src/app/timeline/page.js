import Image from "next/image";
import Link from "next/link";
import { Clock3, ChartNoAxesColumn, ChevronDown } from "lucide-react";

export default function Timeline() {
  const timelineData = [
    { type: "Meetup", icon: "🤝", person: "Tom Baker", date: "March 29, 2026" },
    { type: "Text", icon: "/text.png", isImage: true, person: "Sarah Chen", date: "March 28, 2026" },
    { type: "Meetup", icon: "🤝", person: "Olivia Martinez", date: "March 26, 2026" },
    { type: "Video", icon: "/video.png", isImage: true, person: "Aisha Patel", date: "March 23, 2026" },
    { type: "Meetup", icon: "🤝", person: "Sarah Chen", date: "March 21, 2026" },
    { type: "Call", icon: "/call.png", isImage: true, person: "Marcus Johnson", date: "March 19, 2026" },
    { type: "Meetup", icon: "🤝", person: "Aisha Patel", date: "March 17, 2026" },
    { type: "Text", icon: "/text.png", isImage: true, person: "Olivia Martinez", date: "March 13, 2026" },
    { type: "Call", icon: "/call.png", isImage: true, person: "Lisa Nakamura", date: "March 11, 2026" },
    { type: "Call", icon: "/call.png", isImage: true, person: "Sarah Chen", date: "March 11, 2026" },
    { type: "Video", icon: "/video.png", isImage: true, person: "Marcus Johnson", date: "March 6, 2026" },
    { type: "Video", icon: "/video.png", isImage: true, person: "Ryan O'Brien", date: "February 24, 2026" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f8f8] px-4 pb-16 pt-4 md:px-12 md:pb-24 md:pt-3.5">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <Link href="/">
          <Image src="/logo.png" alt="KeenKeeper logo" width={141} height={32} priority />
        </Link>

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <Link
            href="/timeline"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <Clock3 size={13} strokeWidth={2.2} />
            Timeline
          </Link>
          <Link
            href="/stats"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </Link>
        </nav>
      </div>

      <section className="mx-auto mt-16 max-w-5xl">
        <h1 className="text-3xl font-bold text-[#1f2937] md:text-[34px]">Timeline</h1>
        
        <div className="mb-6 mt-6 flex w-full items-center justify-between rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-sm text-[#6b7280] sm:w-[260px]">
          <span>Filter timeline</span>
          <ChevronDown size={16} strokeWidth={2} />
        </div>

        <div className="flex flex-col gap-4">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-lg border border-[#f1f5f9] bg-white px-4 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:gap-5 sm:px-6"
            >
              {item.isImage ? (
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center drop-shadow-sm">
                  <Image src={item.icon} alt={item.type} width={28} height={28} className="object-contain" />
                </div>
              ) : (
                <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center text-[26px] drop-shadow-sm">{item.icon}</span>
              )}
              <div className="flex flex-col gap-0.5">
                <p className="text-[15px]">
                  <span className="font-bold text-[#475569]">{item.type}</span>{" "}
                  <span className="text-[#64748b]">with {item.person}</span>
                </p>
                <p className="text-[13px] font-semibold text-[#94a3b8]">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
