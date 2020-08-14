import React from 'react';
import cat from '../../assets/images/card-cat.jpeg';
import './ImageComposition.styles.sass';
import Button from '../Button/Button';

const ImageComposition = () => {
  return (
    <>
      <section className="container">
        <div className="left-half">
          <article>
            <h1>Super Size Me</h1>
            <p>
              Director Morgan Spurlocks social experiment in fast-food
              gastronomy sees him attempting to subsist uniquely on food from
              the McDonalds menu for an entire month. In the process his weight
              balloons, his energy level plummets and he experiences all sorts
              of unexpected -- and terrifying -- sid e effects. H e also
              examines the corporate giants growing role in the lives of
              American consumers and explores its methods of indoctrinating
              young people and its contribution to Americas obesity epidemic.
            </p>
          </article>
          <Button>Learn More</Button>
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
