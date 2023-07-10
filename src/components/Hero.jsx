const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>Step into a world of extraordinary footwear where style meets innovation, bringing your every stride to life with our captivating collection.</p>


                <div className="
            hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>

            </div>

            <div className="shopping">
                <p>
                    Also Available On
                </p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/daraz.png" alt="daraz-logo" />
                </div>

            </div>
           
            </div>
            <div className="hero-img">
                <img src="/images/hero.png" alt="hero-image" />
            </div>
        </main>

    );
}
export default Hero;