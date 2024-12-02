import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer"

const App = () => (
    <main className="max-w-full max-h-full grid grid-cols-2
            bg-hero border-2 border-slate-gray">
        <div className="">
            <section className="">
                <Header />
            </section>
            <section className="">
                <Footer />
            </section>
        </div>   
        <div className="">
            <section>
                <Hero />
            </section>
        </div>
    </main>
);

export default App;
