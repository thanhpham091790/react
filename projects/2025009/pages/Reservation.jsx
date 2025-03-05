export default function Reservation() {
    return (
        <section className="reservation">
            <div className="container">
                <h2 className="heading"><span className="first-word">Reservation</span> Book your table</h2>
                <form className="form">
                    <input className="item" type="text" name="name" placeholder="Name" />
                    <input className="item" type="email" name="email" placeholder="Email" />
                    <input className="item" type="text" name="date" placeholder="mm/dd/yyyy" />
                    <input className="item" type="text" name="time" placeholder="Delivery Time" />
                    <input className="item" type="text" name="people" placeholder="People" />
                    <button className="item btn" type="submit">Find table</button>

                </form>
            </div>
        </section>
    );
}