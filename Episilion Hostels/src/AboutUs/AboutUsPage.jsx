import { PageHeader } from '../PageHeader/PageHeader'
import { SiteFooter } from '../SiteFooter/SiteFooter'
import './AboutUsPage.css'




export function AboutUsPage() {


    return (
        <>
            <PageHeader />

            <main className='about-main'>
                <section class="about-hero">
                    <h2 class="about-epeisilion-header">About Episilion</h2>
                    <p class="about-paragraph">Helping students find, safe, afforadable, and comfortable, hostels with ease</p>
                </section>

                <section class="about-project">
                    <h3>Who We Are</h3>
                    <p class="about-paragraph">
                        Episilion is a student-focused hostel discovery platform designed to simplify
                        The process of finding accommodation. We aim to connect students with verified,
                        Affordable, and quality hostels in just a few clicks.
                    </p>
                </section>

                <section class="mission-vision">
                    <div class="mission">
                        <h3>Our Mission</h3>
                        <p class="about-paragraph">
                            To make hostel searching simple, transparent, and stress-free for students.
                        </p>
                    </div>

                    <div class="”vision”">
                        <h3>Our Vision</h3>
                        <p class="about-paragraph">
                            To become the leading digital hostel marketplace for students nationwide.
                        </p>
                    </div>
                </section>

                <section class="”services”">
                    <h3>What We Offer</h3>
                    <ul class="about-paragraph">
                        <li>Hostel listings by gender</li>
                        <li>Price filtering</li>
                        <li>Verified hostel information</li>
                        <li>Direct contact with hostel management</li>
                    </ul>
                </section>

                <section class="team-section">
                    <h2 class="meet-the-team-header">Meet the Team</h2>
                    <div class="team-cards"></div>
                </section>

                <section class="cta">
                <h3>Join Us on Our Journey</h3>
                <p>We’re committed to making student accommodation easier and better.</p>
                <a href="hostels.html "class="btn">Browse Hostels</a>
                </section>
            </main >

        <SiteFooter />
        </>
    )
}