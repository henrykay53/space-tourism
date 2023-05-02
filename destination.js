fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let planetName = document.createElement('p');
        let planetDetail = document.createElement('p');
        let planetDistance = document.createElement('p');
        let planetTime = document.createElement('p');

    
        console.log( planetName.textContent = data.destinations[1].name);
        console.log( planetDetail.textContent = data.destinations[1].description);
        console.log( planetDistance.textContent = data.destinations[1].distance);
        console.log( planetTime.textContent = data.destinations[1].travel);


        planetName.textContent = data.destinations[0].name;
        planetDetail.textContent = data.destinations[0].description;
        planetDistance.textContent = data.destinations[0].distance;
        planetTime.textContent = data.destinations[0].travel;


        const name = document.querySelector('.name');
        const detail = document.querySelector(".planet-para");
        const distance = document.querySelector(".distance-figure");
        const time = document.querySelector(".time-figure");
   

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(name, planetName);
        elementsAppend(detail, planetDetail);
        elementsAppend(distance, planetDistance);
        elementsAppend(time, planetTime);


    });


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {


        let mars = document.createElement('p');
        let marsDetail = document.createElement('p');
        let marsDistance = document.createElement('p');
        let marsTime = document.createElement('p');

        
        mars.textContent = data.destinations[1].name;
        marsDetail.textContent = data.destinations[1].description;
        marsDistance.textContent = data.destinations[1].distance;
        marsTime.textContent = data.destinations[1].travel


        
        const marsName = document.querySelector(".mars");
        const marsPara = document.querySelector(".mars-para");
        const marsDis = document.querySelector(".mars-distance");
        const marsT = document.querySelector(".mars-time");


        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(marsName, mars);
        elementsAppend(marsPara, marsDetail);
        elementsAppend(marsDis, marsDistance);
        elementsAppend(marsT, marsTime);

    })


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {


        let europa = document.createElement('p');
        let europaDetail = document.createElement('p');
        let europaDistance = document.createElement('p');
        let europaTime = document.createElement('p');

        
        europa.textContent = data.destinations[2].name;
        europaDetail.textContent = data.destinations[2].description;
        europaDistance.textContent = data.destinations[2].distance;
        europaTime.textContent = data.destinations[2].travel


        
        const europaName = document.querySelector(".europa");
        const europaPara = document.querySelector(".europa-para");
        const europaDis = document.querySelector(".europa-distance");
        const europaT = document.querySelector(".europa-time");


        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(europaName, europa);
        elementsAppend(europaPara, europaDetail);
        elementsAppend(europaDis, europaDistance);
        elementsAppend(europaT, europaTime);

    })


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {


        let titan = document.createElement('p');
        let titanDetail = document.createElement('p');
        let titanDistance = document.createElement('p');
        let titanTime = document.createElement('p');

        
        titan.textContent = data.destinations[3].name;
        titanDetail.textContent = data.destinations[3].description;
        titanDistance.textContent = data.destinations[3].distance;
        titanTime.textContent = data.destinations[3].travel


        
        const titanName = document.querySelector(".titan");
        const titanPara = document.querySelector(".titan-para");
        const titanDis = document.querySelector(".titan-distance");
        const titanT = document.querySelector(".titan-time");


        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(titanName, titan);
        elementsAppend(titanPara, titanDetail);
        elementsAppend(titanDis, titanDistance);
        elementsAppend(titanT, titanTime);

    })

    let moonContent = document.getElementsByClassName("moonContent");
    let marsContent = document.getElementsByClassName("marsContent");
    let europaContent = document.getElementsByClassName("titanContent");
    let titanContent = document.getElementsByClassName("europaContent");

    console.log(titanContent);


    let moonLink = document.querySelector(".moon-link");
    let marsLink = document.querySelector(".mars-link");
    let europaLink = document.querySelector(".europa-link");
    let titanLink = document.querySelector(".titan-link");


    moonLink.addEventListener("click", ()=> {

       if (moonContent.classList.contains("hide")) {

        moonContent.classList.add("show");
        marsContent.classList.add("hide");
        titanContent.classList.add("hide");
        europaContent.classList.add("hide");
        
       };

    });

    marsLink.addEventListener("click", ()=> {

       if (marsContent.classList.contains("hide")) {

        marsContent.classList.remove("hide");
        marsContent.classList.add("show");

        moonContent.classList.add("hide");
        titanContent.classList.add("hide");
        europaContent.classList.add("hide");
        
       };


    });

    titanLink.addEventListener("click", ()=> {

        if (titanContent.classList.contains("hide")) {
 
         titanContent.classList.remove("hide");
         titanContent.classList.add("show");
 
         moonContent.classList.add("hide");
         marsContent.classList.add("hide");
         europaContent.classList.add("hide");
         
        };
 
    });

    europaLink.addEventListener("click", ()=> {

       if (europaContent.classList.contains("hide")) {

        europaContent.classList.remove("hide");
        europaContent.classList.add("show");

        moonContent.classList.add("hide");
        marsContent.classList.add("hide");
        titanContent.classList.add("hide");
        
       };

    });

 




   
