import AboutBanner from "@/components/about/AboutBanner";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutStory from "@/components/about/AboutStory";
import ProjectCTA from "@/components/common/ProjectCTA";

export default function Page() {
    return (
        <div>
            <AboutBanner />
            <AboutStory/>
            <AboutPrinciples/>
            <ProjectCTA/>
        </div>
    )
}