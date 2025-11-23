import React, { useState, useEffect } from "react";
import '../App.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
            title: "Contact Center",
            description: "Professional contact center solutions for seamless customer interactions"
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
            title: "Virtual Agent",
            description: "AI-powered virtual agents to enhance your communication experience"
        },
        {
            image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
            title: "Video Conferencing",
            description: "Crystal clear video calls with advanced features and HD quality"
        },
        {
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
            title: "Team Collaboration",
            description: "Work together seamlessly with real-time collaboration tools"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className="navHeader">
                    <div className="logo">
                        <span className="logoZ">Z</span>
                        <span className="logoV">V</span>
                        <span className="logoText">Call</span>
                    </div>
                </div>
                <div className='navlist'>
                    <Link to={"/home"}>Join as Guest</Link>
                    <Link to={"/auth?mode=signup"}>Register</Link>
                    <Link className="btn navCTA" to={"/auth"}>Login</Link>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className="heroLeft">
                    <h1><span className="accent">Connect</span> with your loved ones</h1>
                    <p>Experience seamless video communication with advanced features designed for modern teams and individuals</p>
                    <br />
                    <Link className="btn" to={"/auth"}>Get Started</Link>
                </div>
                
                <div className="heroRight">
                    <div className="imageCarousel">
                        <div className="carouselContainer">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`carouselSlide ${index === currentSlide ? 'active' : ''}`}
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    <img src={slide.image} alt={slide.title} />
                                    <div className="slideOverlay">
                                        <h3>{slide.title}</h3>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carouselBtn prev" onClick={prevSlide} aria-label="Previous slide">
                            ‹
                        </button>
                        <button className="carouselBtn next" onClick={nextSlide} aria-label="Next slide">
                            ›
                        </button>
                        <div className="carouselIndicators">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="featuresSection">
                <div className="featuresContainer">
                    <h2 className="featuresTitle">Why Choose <span className="accent">ZV Call</span>?</h2>
                    <div className="featuresGrid">
                        <div className="featureCard">
                            <div className="featureIcon">📞</div>
                            <h3>HD Video Quality</h3>
                            <p>Experience crystal-clear video calls with industry-leading HD quality that brings you closer to your team and loved ones.</p>
                        </div>
                        <div className="featureCard">
                            <div className="featureIcon">🔒</div>
                            <h3>Secure & Private</h3>
                            <p>Your conversations are protected with end-to-end encryption and advanced security measures to ensure complete privacy.</p>
                        </div>
                        <div className="featureCard">
                            <div className="featureIcon">🌐</div>
                            <h3>Global Reach</h3>
                            <p>Connect with anyone, anywhere in the world with our reliable infrastructure and low-latency connections.</p>
                        </div>
                        <div className="featureCard">
                            <div className="featureIcon">⚡</div>
                            <h3>Lightning Fast</h3>
                            <p>Ultra-fast connection speeds ensure smooth, lag-free video calls even on slower internet connections.</p>
                        </div>
                        <div className="featureCard">
                            <div className="featureIcon">👥</div>
                            <h3>Group Meetings</h3>
                            <p>Host meetings with multiple participants seamlessly, with advanced controls and collaboration features.</p>
                        </div>
                        <div className="featureCard">
                            <div className="featureIcon">🎨</div>
                            <h3>Customizable</h3>
                            <p>Personalize your experience with customizable settings, backgrounds, and meeting controls tailored to your needs.</p>
                        </div>
                    </div>
                    <div className="featuresDescription">
                        <h3>About ZV Call</h3>
                        <p>
                            ZV Call is a cutting-edge video communication platform designed to bridge distances and bring people together. 
                            Whether you're connecting with family, collaborating with colleagues, or hosting virtual events, ZV Call provides 
                            a seamless and intuitive experience. Our platform combines advanced technology with user-friendly design, offering 
                            features like HD video quality, secure encryption, virtual agents, and contact center solutions. Join millions of 
                            users worldwide who trust ZV Call for their communication needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}