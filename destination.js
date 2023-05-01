fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let planetName = document.createElement('p');
        let planetDetail = document.createElement('p');
        let planetDistance = document.createElement('p');
        let planetTime = document.createElement('p');

        // let moon = document.createElement('p');


        // let mars = document.createElement('p');
        // let marsDetail = document.createElement('p');
        // let marsDistance = document.createElement('p');
        // let marsTime = document.createElement('p');

        



        console.log( planetName.textContent = data.destinations[1].name);
        console.log( planetDetail.textContent = data.destinations[1].description);
        console.log( planetDistance.textContent = data.destinations[1].distance);
        console.log( planetTime.textContent = data.destinations[1].travel);

        // moon.textContent = data.destinations[1].name;

        // mars.textContent = data.destinations[1].name;
        // marsDetail.textContent = data.destinations[1].description;
        // marsDistance.textContent = data.destinations[0].distance;
        // marsTime.textContent = data.destinations[0].travel

        planetName.textContent = data.destinations[0].name;
        planetDetail.textContent = data.destinations[0].description;
        planetDistance.textContent = data.destinations[0].distance;
        planetTime.textContent = data.destinations[0].travel;

        // planetName.textContent = data.destinations[2].name;
        // planetDetail.textContent = data.destinations[2].description;
        // planetDistance.textContent = data.destinations[2].distance
        // planetTime.textContent = data.destinations[2].travel




        // so there are threee of them
        // .innerHTML, .innerText, .textContent

        // My approach to implementing the swipe feature
        // Approach one involes writting html tags for each planet card
        // Apprach two involes making multiple fetch request for each planet card
        // How to go about it? I will figure it out


        // const plan2 = document.getElementsByClassName(".moon");
        // plan2.appendChild(moon);




        const name = document.querySelector('.name');
        // name.appendChild(planetName);
        // planetName.classList.add("hide");

        const detail = document.querySelector(".planet-para");
        // detail.appendChild(planetDetail);

        const distance = document.querySelector(".distance-figure");
        // distance.appendChild(planetDistance);

        const time = document.querySelector(".time-figure");
        // time.appendChild(planetTime);

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(name, planetName);
        elementsAppend(detail, planetDetail);
        elementsAppend(distance, planetDistance);
        elementsAppend(time, planetTime);


        // elementsAppend(plan2, moon);

        // let compo = document.getElementsByClassName("planetComponent");
        // compo.appendChild(one);





       

   
    });

// let names = document.querySelectorAll(".name");

// names.forEach(function(n) {

//     if(n.lenght < 4) {



//     }
// })