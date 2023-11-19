import React from 'react';
import './testimonial.css';
import cassandraWarrenImage from '../assets/images/testimonial/cassandra-warren.png';
import amandaTullingImage from '../assets/images/testimonial/Amanda-Tulling.png';
import jackMcDogglasImage from '../assets/images/testimonial/Jack-McDogglas.png';

const Testimonial = () => (
  <section className="testimonial">
    <div className="container">
      <div className="section-title">
        <p>Testimonial</p>
        <h2>What Our Client Says</h2>
      </div>

      <div className="reviews">
        {/* Review Box 1 */}
        <div className="reviewbox">
          <div className="starrating">
            {/* Star icons */}
            {Array.from({ length: 5 }, (_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}

            <div className="review">
              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
              </p>
            </div>

            <div className="reviewer">
              <img src={cassandraWarrenImage} alt="cassandra-warren-business-manager-dorfus" />
              <div className="insidetext">
                <h4>Cassandra Warren</h4>
                <p>Business Manager, Dorfus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Review Box 2 */}
        <div className="reviewbox">
          <div className="starrating">
            {Array.from({ length: 5 }, (_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}

            <div className="review">
              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
              </p>
            </div>

            <div className="reviewer">
              <img src={amandaTullingImage} alt="Amanda-Tulling-Senior-Developer-Square" />
              <div className="insidetext">
                <h4>Amanda Tulling</h4>
                <p>Senior Developer, Square</p>
              </div>
            </div>
          </div>
        </div>

        {/* Review Box 3 */}
        <div className="reviewbox">
          <div className="starrating">
            {Array.from({ length: 5 }, (_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}

            <div className="review">
              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
              </p>
            </div>

            <div className="reviewer">
              <img src={jackMcDogglasImage} alt="Jack-McDogglas-KeyAccountManager-Gobona" />
              <div className="insidetext">
                <h4>Jack McDogglas</h4>
                <p>Key Account Manager, Gobona</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="center-content">
        <a className="btn-black" href="projects.html">
          All Reviews <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Testimonial;
