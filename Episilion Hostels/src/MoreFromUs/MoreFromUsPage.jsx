import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import './MoreFromUsPage.css';



export function MoreFromUsPage({ navlink, setNavLink }) {


    return (

        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />


            <section class="more-from-us-section js-more-from-us-section">
                <h3>Get More From Us</h3>

                <div class="projects-cards"></div>
            </section>

            <SiteFooter />
        </>
    )
}