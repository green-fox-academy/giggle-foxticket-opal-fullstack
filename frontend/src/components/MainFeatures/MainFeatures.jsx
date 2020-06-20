import React from 'react';
import './MainFeatures.style.scss';

const MainFeatures = () => {
  return (
    <>
      <div className="main-features"></div>
      <div>
        <h3>Everything is handled online</h3>
        <p>
          You can use hooks to handle loading states for your fetching
          operations. It is another state variable managed by a state hook. This
          means that if you wanted to implement a loading state in the last
          example, you’ll set the state variable and update the useFetch()
          function accordingly.
        </p>
      </div>
      <div>
        <h3>Cheaper than our competitors</h3>
        <p>
          The & in this case allows us to position .button directly next to
          pseudo classes without repetition in the authored code. If we left out
          the & from this example, basic nesting would put a space between them
          like this…
        </p>
      </div>
      <div>
        <h3>Excellent customer service</h3>

        <p>
          The example with the & isn’t anything different than the example
          without the &. Nesting without the & is shorthand for nesting with it.
          We can think of the & as a mechanism that allows us to place the
          parent selector wherever we need it in our child selector. It allows
          us to nest with alterations. Let’s look at some more examples.
        </p>
      </div>
    </>
  );
};

export default MainFeatures;
