import React, { useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const stackRef = useRef(null);

  const moveCard = () => {
    if (stackRef.current) {
      const lastCard = stackRef.current.lastElementChild;
      if (lastCard && lastCard.classList.contains("card")) {
        lastCard.classList.add("swap");

        setTimeout(() => {
          lastCard.classList.remove("swap");
          stackRef.current?.insertBefore(
            lastCard,
            stackRef.current.firstElementChild
          );
        }, 1200);
      }
    }
  };

  useEffect(() => {
    const autoplayInterval = setInterval(moveCard, 4000);
    return () => clearInterval(autoplayInterval);
  }, []);

  const handleClick = (e) => {
    const card = e.target.closest(".card");
    if (card && card === stackRef.current?.lastElementChild) {
      card.classList.add("swap");

      setTimeout(() => {
        card.classList.remove("swap");
        stackRef.current?.insertBefore(
          card,
          stackRef.current.firstElementChild
        );
      }, 1200);
    }
  };

  return (
    <main>
      <div className="content">
        <h1>Rasoi Delights</h1>
        <h3>The Essence of Indian Sweetness</h3>
        <p>
          Welcome to Rasoi Delights, where every treat tells a story of
          tradition and flavor. Our patisserie reimagines Indian sweets, merging
          age-old recipes with contemporary flair. Dive into a world where each
          bite of our signature gulab jamuns, rich rasgullas, and innovative
          fusion desserts transports you to a vibrant celebration of Indian
          culture. Located in the heart of the city, Rasoi Delights is more than
          just a sweet shop; it’s a culinary journey inviting you to savor the
          magic of India’s beloved desserts.
        </p>
        <button className="btn">Explore More</button>
      </div>

      <div className="stack" ref={stackRef} onClick={handleClick}>
        <div className="card">
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a36d2695-58f8-4644-9e19-71988334e345"
            alt="Pastry 1"
          />
        </div>
        <div className="card">
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9f9148ad-74c2-4ebc-a769-bb90fec7b9a5"
            alt="Pastry 2"
          />
        </div>
        <div className="card">
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ff35104e-3a7e-458f-8077-7ea2780706fa"
            alt="Pastry 3"
          />
        </div>
        <div className="card">
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/060546fb-1cbb-428e-b48d-eae2711a0c83"
            alt="Pastry 4"
          />
        </div>
        <div className="card">
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7feb903b-33f7-4326-90eb-a4f54c86c68e"
            alt="Pastry 5"
          />
        </div>
        <div className="card">
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/417d1d6b-4100-4419-9e01-37561a354b80"
            alt="Pastry 6"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
