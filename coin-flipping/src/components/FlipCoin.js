import React from "react";

const FlipCoin = () => {

  const tossCoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails";
  };

  const fiveHeads = () => {
    return new Promise((resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;
      while (headsCount !== 5 && attempts < 100) {
        attempts++;
        let result = tossCoin();

        console.log(`${result} was flipped`);
        if (result === "heads") {
          headsCount++;
        } else {
          headsCount = 0;
        }
        if (headsCount === 5) {
          resolve("5 heads in a row!");
        } else if (attempts > 100) {
          console.log(attempts);
          reject("You've hit your limit");
        }
      }
    });
  };

  fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log("When does this run now?");

  return (
    <div>
      <h3>You are getting closer to the goal</h3>
    </div>
  );
};

export default FlipCoin;
