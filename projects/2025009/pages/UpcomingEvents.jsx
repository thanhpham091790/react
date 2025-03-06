import Event from "../assets/upcoming-events/event.png";

export default function UpcomingEvents() {
    return (
        <section className="upcoming-events">
            <div className="container">
                <div className="text">
                    <h2 className="heading"><span className="first-word">Discover</span> Upcoming Events</h2>
                    <p className="para">From exclusive burger tastings and chef collaborations to community outreach
                        initiatives and
                        seasonal
                        celebrations,
                        there&apos;s always something special on the horizon at Burger Company. Be the first to know about
                        our
                        upcoming events,
                        promotions, and gatherings as we continue to bring joy and flavor to our cherished customers.
                        Join
                        us in creating
                        memorable moments and delicious memories together!</p>
                </div>
                <img src={Event} alt="Upcoming Events" />
            </div>
        </section>
    );
}