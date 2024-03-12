import Imageslider from "@/components/Homecomponents/Imageslider";
import Trustedcomp from "@/components/Homecomponents/Trustedcomp";
import Howworks from "@/components/Homecomponents/Howworks";
import TimelineQR from "@/components/Homecomponents/TimelineQR";
import Gamification from "@/components/Homecomponents/Gamification";
import BussinessStat from "@/components/Homecomponents/BussinessStat";
import Userreview from "@/components/Homecomponents/Userreview";
import Pricingcard from "@/components/Homecomponents/Pricingcard";
import FAQ from "@/components/Homecomponents/FAQ";
import Loading from "@/components/Aboutuscomponets/Loading";

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
