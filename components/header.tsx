import Banner from "@/components/banner";

export const Header = () => {
  return (
    <header>
      <Banner
        subMessage="Upgrade to the latest version."
        mainMessage="Redot Engine is now stable!"
        link="https://www.redotengine.org/news/release-4-3-stable"
      />
      <div></div>
    </header>
  );
};
