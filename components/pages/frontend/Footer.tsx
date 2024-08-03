import Link from "next/link";
import { useTranslation } from "next-i18next";
import footerData from "../../../../data/footer.json";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Your Site Name";
const FooterSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-7xl relative pt-6 lg:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-1">
            <Link
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              {siteName}
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              {t(footerData.footerNote)}{" "}
              <Link
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                href={footerData.footerNoteLink}
              >
                {t(footerData.footerNoteText)}
              </Link>
              {t(
                "analyze market movements, and prepare for trades with the latest news and insights from fellow traders."
              )}
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {footerData.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                  {t(section.title)}
                </h4>
                <div className="mt-3 grid space-y-3 text-sm">
                  {section.links.map((link, idx) => (
                    <p key={idx}>
                      <Link
                        className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                        href={link.url}
                      >
                        {t(link.name)}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              {`${footerData.copyright}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
