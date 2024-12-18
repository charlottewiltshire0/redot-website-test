import { FeaturesList } from "@/constants/featuresList";

export const FeaturesCard = ({ icon, label }: FeaturesList) => {
  return (
    <figure className="relative w-fit">
      <div className="flex flex-row items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded border border-rose-800 bg-rose-950 text-white">
          {icon}
        </div>
        <p className="text-sm font-medium">{label}</p>
      </div>
    </figure>
  );
};
