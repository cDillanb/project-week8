// document variables
const killerPerkBtn = document.getElementById("rndm-killer-perks-button");
const rndmKillerBtn = document.getElementById("rndm-killer-button");
const survivorPerkBtn = document.getElementById("rndm-survivor-perks-button");

// URL
// const baseUrl = "http://localhost:4000";
const baseUrl = "https://project-week8.herokuapp.com/"

// functions
const catchErr = (err) => console.log(err);

const randomKillerPerks = () => {
  let perkNums = [];
  axios
    .get(`${baseUrl}/rkillerperks`)
    .then((res) => {
      const perks = res.data;
      const randomIndex = () => {
        let randomNum = Math.floor(Math.random() * perks.length);
        for (let i = 0; i < 100; i++) {
          if (perkNums.indexOf(randomNum) === -1) {
            perkNums.push(randomNum);
            return randomNum;
          } else {
            randomNum++;
          }
        }
      };
      let perk1 = perks[randomIndex()];
      let perk2 = perks[randomIndex()];
      let perk3 = perks[randomIndex()];
      let perk4 = perks[randomIndex()];
      document.getElementById(
        "killer-perks-wrapper"
      ).innerHTML = `<div id="perk1" class="random-perk">
          <img src="${perk1.icon}"></img>
          <div>
            <h2>${perk1.perk_name}</h2>
            <p>${perk1.description}</p>
          </div>
      </div>
      <div id="perk2" class="random-perk">
        <img src="${perk2.icon}"></img>
        <div>
          <h2>${perk2.perk_name}</h2>
          <p>${perk2.description}</p>
        </div>
      </div>
      <div id="perk3" class="random-perk">
        <img src="${perk3.icon}"></img>
        <div>
          <h2>${perk3.perk_name}</h2>
          <p>${perk3.description}</p>
        </div>
      </div>
      <div id="perk4" class="random-perk">
        <img src="${perk4.icon}"></img>
        <div>
          <h2>${perk4.perk_name}</h2>
          <p>${perk4.description}</p>
        </div>
      </div>`;
    })
    .catch(catchErr);
};

const randomKiller = () => {
  axios
    .get(`${baseUrl}/rkiller`)
    .then((res) => {
      const data = res.data;
      let randomIndex = Math.floor(Math.random() * data.length);
      let randomKiller = data[randomIndex];
      document.getElementById(
        "killer-wrapper"
      ).innerHTML = `<div id="random-killer">
        <img src="${randomKiller.icon.shop_background}" id="killer-img"></img>
        <div>
            <h2>${randomKiller.name}</h2>
            <br>
            <p>${randomKiller.overview}</p>
        </div>
      </div>`;
    })
    .catch(catchErr);
};

const randomSurvivorPerks = () => {
  let perkNums = [];
  axios
    .get(`${baseUrl}/rsurvivorperks`)
    .then((res) => {
      const perks = res.data;
      const randomIndex = () => {
        let randomNum = Math.floor(Math.random() * perks.length);
        for (let i = 0; i < 100; i++) {
          if (perkNums.indexOf(randomNum) === -1) {
            perkNums.push(randomNum);
            return randomNum;
          } else {
            randomNum++;
          }
        }
      };
      let perk1 = perks[randomIndex()];
      let perk2 = perks[randomIndex()];
      let perk3 = perks[randomIndex()];
      let perk4 = perks[randomIndex()];
      document.getElementById(
        "survivor-perks-wrapper"
      ).innerHTML = `<div id="perk1" class="random-perk">
      <img src="${perk1.icon}"></img>
      <div>
        <h2>${perk1.perk_name}</h2>
        <p>${perk1.description}</p>
      </div>
  </div>
  <div id="perk2" class="random-perk">
    <img src="${perk2.icon}"></img>
    <div>
      <h2>${perk2.perk_name}</h2>
      <p>${perk2.description}</p>
    </div>
  </div>
  <div id="perk3" class="random-perk">
    <img src="${perk3.icon}"></img>
    <div>
      <h2>${perk3.perk_name}</h2>
      <p>${perk3.description}</p>
    </div>
  </div>
  <div id="perk4" class="random-perk">
    <img src="${perk4.icon}"></img>
    <div>
      <h2>${perk4.perk_name}</h2>
      <p>${perk4.description}</p>
    </div>
  </div>`;
    })
    .catch(catchErr);
};

// Listeners
killerPerkBtn.addEventListener("click", randomKillerPerks);
rndmKillerBtn.addEventListener("click", randomKiller);
survivorPerkBtn.addEventListener("click", randomSurvivorPerks);
