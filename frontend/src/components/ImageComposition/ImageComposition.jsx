import React from 'react';
import cat from '../../assets/images/card-cat.jpeg';
import './ImageComposition.styles.sass';

const ImageComposition = () => {
  return (
    <>
      <section className="container">
        <div className="left-half">
          <article>
            <h1>Super Size Me</h1>
            <p>
              Director Morgan Spurlock's social experiment in fast-food
              gastronomy sees him attempting to subsist uniquely on food from
              the McDonald's menu for an entire month. In the process his weight
              balloons, his energy level plummets and he experiences all sorts
              of unexpected -- and terrifying -- side effects. He also examines
              the corporate giant's growing role in the lives of American
              consumers and explores its methods of indoctrinating young people
              and its contribution to America's obesity epidemic.
            </p>
          </article>
          <button>Learn More</button>
        </div>
        <div className="right-half">
          <article>
            <img src={cat} alt="hello" className="cat" />
          </article>
        </div>
      </section>
    </>
  );
};

export default ImageComposition;
