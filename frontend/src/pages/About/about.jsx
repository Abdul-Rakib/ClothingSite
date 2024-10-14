import React from "react";
import "./about.css";
import default1 from "../../assets/Images/default1.jpg";

const AboutPage = () => {
return (
    <>
        <div className="about-container">
                <div className="about-content">
                    <h3 className="fw-bold">Discover Thrift+New Clothing</h3><br></br>
                    <p>
                    Welcome to Thrift+New Clothing, your ultimate destination for both thrifted and brand-new fashion finds.
                    Our mission is to blend sustainability with style, offering a unique shopping experience that caters to all fashion enthusiasts.
                    </p>
                    <p>
                    At Thrift+New Clothing, we believe in the power of choice. Whether you're looking for pre-loved treasures or the latest trends, we've got you covered.
                    Our curated collections are designed to inspire and empower you to express your individuality without compromising on quality or ethics.
                    </p>
                    <p>
                    Join us in our journey to make fashion more sustainable and accessible. Explore our diverse range of products and become a part of our vibrant community today.
                    </p>
                </div>
                <div className="text-center">
                    <img className="about-img img-thumbnail" src={default1} alt="About Us" />
                </div>
        </div>
        </>
);
};

export default AboutPage;
