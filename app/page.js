import Imageslider from "@/Components/Homecomponents/Imageslider";
import Trustedcomp from "@/Components/Homecomponents/Trustedcomp";
import Howworks from "@/Components/Homecomponents/Howworks";
import TimelineQR from "@/Components/Homecomponents/TimelineQR";
import Gamification from "@/Components/Homecomponents/Gamification";
import BussinessStat from "@/Components/Homecomponents/BussinessStat";
import Userreview from "@/Components/Homecomponents/Userreview";
import Pricingcard from "@/Components/Homecomponents/Pricingcard";
import FAQ from "@/Components/Homecomponents/FAQ";
import Loading from "@/Components/Aboutuscomponets/Loading";

export default function Home() {
  return (
    <main >
      <Imageslider/>
      <Trustedcomp />
      <Howworks />
      <TimelineQR />
      <Gamification />
      <BussinessStat />
      <Userreview />
      <Pricingcard />
      <FAQ />
    </main>
  );
}
