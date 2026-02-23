import Image from "next/image";
import { AnnouncementType } from "@/api/type/announcement";

type Props = {
  data: AnnouncementType;
};

const AnnouncementCard = ({ data }: Props) => {
  return (
    <div className="py-6 md:pt-8 flex flex-col gap-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="relative w-full lg:w-[450px] h-[300px] rounded-xl overflow-hidden shadow-sm bg-muted">
          <Image
            src={data.imageSrc}
            alt={data.announcmentTitle}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {data.announcmentTitle}
          </h2>

          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
            {data.description}
          </p>

          {/* Related Info */}
          <div>
            <h4 className="text-sm font-semibold text-primary mb-3">
              Related Information
            </h4>

            <ul className="space-y-2 text-sm">
              {data.relatedInformation.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    {item.label}:
                  </span>
                  <span className="text-gray-700 dark:text-gray-400">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Details Section */}
      {data.details && (
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 bg-white dark:bg-gray-900 shadow-sm">
          <div className="flex flex-col gap-6">
            {data.details.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  {section.sectionTitle}
                </h3>

                {section.content && (
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;
