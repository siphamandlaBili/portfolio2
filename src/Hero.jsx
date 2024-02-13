import hero from './assets/hero.svg';

const Hero = () => {
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Portfolio Projects </h1>
                <p>
                    Welcome to my Web Projects Portfolio,
                    where I showcase my latest developments. 
                    Leveraging the power of Contentful CMS,
                    I ensure that my content remains fresh and up-to-date. 
                    Explore my diverse range of projects and 
                    witness the seamless integration of creativity and functionality.</p>
            </div>
            <div className="img-container">
                <img src={hero} alt="" className='img'/>
            </div>
        </div>
    </section>
}

export default Hero