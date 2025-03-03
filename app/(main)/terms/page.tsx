import SectionHeader from "@/components/SectionHeader";
import TextFetcher from "@/components/TextFetcher";
import { Start } from "@/components/sections/landing/Start";

export default function Terms() {
  const termsUrl =
    "https://raw.githubusercontent.com/Redot-Experimental/policies/refs/heads/master/terms.txt";

  return (
    <div>
      <div className="relative flex w-full items-start justify-center bg-white bg-grid-black/[0.1] dark:bg-background dark:bg-grid-white/[0.1]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>
        <div className="relative z-20 px-5 pb-5 pt-10 lg:px-40">
          <SectionHeader section="terms" />
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-8 px-5 lg:px-40">
        <TextFetcher
          url={termsUrl}
          className="article prose max-w-none dark:prose-invert"
          loadingComponent={
            <div className="py-10 text-center">
              <svg
                className="mx-auto h-6 w-6 animate-spin text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          }
        />
      </div>
      <Start />
    </div>
  );
}
