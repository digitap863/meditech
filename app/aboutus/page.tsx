import AboutBanner from "@/components/about/AboutBanner";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutStory from "@/components/about/AboutStory";
import HealthcareSectors from "@/components/about/HealthcareSectors";
import WhyMeditec from "@/components/about/WhyMeditech";
import WhyMeditecHero from "@/components/about/WhyMeditechHero";
import ProjectCTA from "@/components/common/ProjectCTA";

export default function Page() {
    return (
        <div>
            <AboutBanner />
            <AboutStory/>
            <WhyMeditec/>
            <WhyMeditecHero/>
            <HealthcareSectors/>
            <AboutPrinciples/>
            <ProjectCTA/>
        </div>
    )
}