import React from "react";
import "./Hero.css";
import hero1 from "../Assets/pg_1.png";
import hero2 from "../Assets/pg_2.png";
import hero3 from "../Assets/pg_3.png";
// import down1 from '../Assets/pg_4.png'
// import down2 from '../Assets/pg_5.png'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <head>
          <title>Pure CSS Vertical Menu</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@2.0.6/build/pure-min.css"
          />
        </head>

        <body>
          <div className="outerdiv">
            <div class="displaymenu">
              <ul class="pure-menu-list">
                <li class="pure-menu-item">
                  <a href="#" class="pure-menu-link">
                    DIY Robots & Parts
                  </a>
                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Robot Car
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Walking Robot
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        A1 Robot
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Robot Parts
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#" class="pure-menu-link">
                    DIY Learning Kits
                  </a>

                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Age 3+
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Age 10+
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Age 16+
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#" class="pure-menu-link">
                    Hardware Projects
                  </a>
                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Arduino Module
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Wireless Module
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Camera Module
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Raspberry pi Module
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Solar Module
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#" class="pure-menu-link">
                    Software Projects
                  </a>
                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        AI/ML Project
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        React & Angular
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Mobile App
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        College Software
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Business Software
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Management Software
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#" class="pure-menu-link">
                    Electronic Components
                  </a>
                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Microcontroller
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Sensors
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Cable & Connectors
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Motors & Drivers
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Batteries
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Display Module
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#" class="pure-menu-link">
                    Drone & Parts
                  </a>
                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Drones
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Parts
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#" class="pure-menu-link">
                    Home & Outdoor
                  </a>
                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Home Decor
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Home Automation
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#" class="pure-menu-link">
                    PCB & 3D Model
                  </a>
                  <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        PCB
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        3D Parts
                      </a>
                    </li>
                    <li class="pure-menu-item">
                      <a href="#" class="pure-menu-link">
                        Casing & Enclosures
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" class="viewall">
                    View All
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </body>
      </div>

      <div className="hero-mid">
        <div className="first-img">
          <img src={hero1} alt="" />
        </div>
        <div className="second-img">
          <img src={hero2} alt="" />
          <img src={hero3} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <div className="card">
          <div className="heading">
            <h1>Happy Club</h1> <br />
          </div>
          <div className="description">
            <p>
              Collect coupons from stores and <br /> apply to get special
              discount form stores{" "}
            </p>
          </div>{" "}
          <br />
          <div className="box1">
            <h2>Free Delivery</h2>
            <p>
              For <span> WEBOTRICKS </span>
            </p>
            <p className="code">Code:dhinchakpooja</p>
          </div>
          <br />
          <div className="box1">
            <h2>10% Off</h2>
            <p>
              For <span> ALL SHOPS </span>
            </p>
            <p className="code">Code:dollychaiwala</p>
          </div>
          <br />
          <div className="box1">
            <h2>10% Off</h2>
            <p>
              For <span> WEBOTRICKS </span>
            </p>
            <p className="code">Code:inkipinkiponki</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
