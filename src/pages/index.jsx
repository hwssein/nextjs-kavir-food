import HomePageBanner from "@/components/template/HomePageBanner";
import HomePageBoxes from "@/components/template/HomePageBoxes";
import HomePageOrder from "@/components/template/HomePageOrder";
import HomePageRestriction from "@/components/template/HomePageRestriction";
import HomePageWhoWeAre from "@/components/template/HomePageWhoWeAre";
import { Typography } from "@mui/material";

function HomePage() {
  return (
    <>
      <HomePageBanner />
      <HomePageBoxes />
      <HomePageWhoWeAre />
      <HomePageOrder />
      <HomePageRestriction />
    </>
  );
}

export default HomePage;
