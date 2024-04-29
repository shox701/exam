import CartImage from "../assets/savat.svg"
import "./hero.scss"

const Hero = () => {
    return (
        <div className="hero-container">
            <nav>
                <h1 className="logo">Rivo</h1>
                <div className="text-content">
                    <ul className="nav-items">
                        <li className="item">home</li>
                        <li className="item">shop</li>
                        <li className="item">features</li>
                        <li className="item">contact</li>
                    </ul>
                    <div className="buttons">
                        <img src={CartImage} alt="" />
                        <button className="button">login</button>
                    </div>
                </div>
            </nav>

            <div className="hero-content">
                <div className="left-content">
                    <h1 className="title">Discover and Find Your Own Fashion!</h1>
                    <p className="text">Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                    <button className="explore">explore now</button>
                </div>
                <div className="right-content"></div>
            </div>
        </div>
    )
}
export default Hero