
import MostPopularBurger from "../assets/try-out-today/most-popular-burger.png";
import MostFunMoreTaste from "../assets/try-out-today/most-fun-more-taste.png";
import FreshChili from "../assets/try-out-today/fresh-chili.png";

export default function TryOutToday() {
    return (
        <section className="try-out-today">
            <div className="container">
                <div className="left-side">
                    <div className="most-popular-burger">
                        <img src={MostPopularBurger} alt="Most popular burger" />
                        <div className="text">
                            <p className="para">Try out today</p>
                            <h2 className="heading">Most Popular Burger</h2>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="most-fun-more-taste">
                        <img src={MostFunMoreTaste} alt="Most fun more taste" />
                        <div className="text">
                            <p className="para">Try out today</p>
                            <h2 className="heading">Most fun more taste</h2>
                        </div>
                    </div>
                    <div className="fresh-chili">
                        <img src={FreshChili} alt="Fresh and chili" />
                        <div className="text">
                            <p className="para">Try out today</p>
                            <h2 className="heading">Fresh & chili</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}