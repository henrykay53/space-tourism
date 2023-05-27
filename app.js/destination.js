fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        // element creation for desktop

        let moon = document.createElement('p');
        let moonDetail = document.createElement('p');
        let moonDistance = document.createElement('p');
        let moonTime = document.createElement('p');


        let moonMobile = document.createElement('p');
        let moonDetailMobile = document.createElement('p');
        let moonDistanceMobile = document.createElement('p');
        let moonTimeMobile = document.createElement('p');

        // Creation of the horizontal line that runs under the planet images
        let horizontalLine = document.createElement("hr");



        moon.textContent = data.destinations[0].name;
        moonDetail.textContent = data.destinations[0].description;
        moonDistance.textContent = data.destinations[0].distance;
        moonTime.textContent = data.destinations[0].travel;


        
        moonMobile.textContent = data.destinations[0].name;
        moonDetailMobile.textContent = data.destinations[0].description;
        moonDistanceMobile.textContent = data.destinations[0].distance;
        moonTimeMobile.textContent = data.destinations[0].travel;


        const moonName = document.querySelector('.moon');
        const moonPara = document.querySelector(".moon-para");
        const moonDis = document.querySelector(".moon-distance");
        const moonT = document.querySelector(".moon-time");

        const moonNameMobile = document.querySelector('.moonMobile');
        const moonParaMobile = document.querySelector(".moon-para-mobile");
        const moonDisMobile = document.querySelector(".moon-distance-mobile");
        const moonTMobile = document.querySelector(".moon-time-mobile");

        const line = document.querySelector(".moon-line");

    

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(moonName, moon);
        elementsAppend(moonPara, moonDetail);
        elementsAppend(moonDis, moonDistance);
        elementsAppend(moonT, moonTime);


        elementsAppend(moonNameMobile, moonMobile);
        elementsAppend(moonParaMobile, moonDetailMobile);
        elementsAppend(moonDisMobile, moonDistanceMobile);
        elementsAppend(moonTMobile, moonTimeMobile);

        elementsAppend(line, horizontalLine);

       



    });


    // API call

    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        // element creation for desktop
        let mars = document.createElement('p');
        let marsDetail = document.createElement('p');
        let marsDistance = document.createElement('p');
        let marsTime = document.createElement('p');

        // element creation for mobile
        let marsMobile = document.createElement('p');
        let marsDetailMobile = document.createElement('p');
        let marsDistanceMobile = document.createElement('p');
        let marsTimeMobile = document.createElement('p');

        // Creation of the horizontal line that runs under the planet images
        let horizontalLine = document.createElement("hr");


        
        mars.textContent = data.destinations[1].name;
        marsDetail.textContent = data.destinations[1].description;
        marsDistance.textContent = data.destinations[1].distance;
        marsTime.textContent = data.destinations[1].travel

        marsMobile.textContent = data.destinations[1].name;
        marsDetailMobile.textContent = data.destinations[1].description;
        marsDistanceMobile.textContent = data.destinations[1].distance;
        marsTimeMobile.textContent = data.destinations[1].travel


        
        const marsName = document.querySelector(".mars");
        const marsPara = document.querySelector(".mars-para");
        const marsDis = document.querySelector(".mars-distance");
        const marsT = document.querySelector(".mars-time");

        const marsNameMobile = document.querySelector(".marsMobile");
        const marsParaMobile = document.querySelector(".mars-para-mobile");
        const marsDisMobile = document.querySelector(".mars-distance-mobile");
        const marsTMobile = document.querySelector(".mars-time-mobile");

        const line = document.querySelector(".mars-line");



        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(marsName, mars);
        elementsAppend(marsPara, marsDetail);
        elementsAppend(marsDis, marsDistance);
        elementsAppend(marsT, marsTime);

        elementsAppend(marsNameMobile, marsMobile);
        elementsAppend(marsParaMobile, marsDetailMobile);
        elementsAppend(marsDisMobile, marsDistanceMobile);
        elementsAppend(marsTMobile, marsTimeMobile);

        elementsAppend(line, horizontalLine);

        

    })


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        // element creation for desktop
        let europa = document.createElement('p');
        let europaDetail = document.createElement('p');
        let europaDistance = document.createElement('p');
        let europaTime = document.createElement('p');

        // element creation for mobile
        let europaMobile = document.createElement('p');
        let europaDetailMobile = document.createElement('p');
        let europaDistanceMobile = document.createElement('p');
        let europaTimeMobile = document.createElement('p');


        // Creation of the horizontal line that runs under the planet images
        let horizontalLine = document.createElement("hr");


        
        europa.textContent = data.destinations[2].name;
        europaDetail.textContent = data.destinations[2].description;
        europaDistance.textContent = data.destinations[2].distance;
        europaTime.textContent = data.destinations[2].travel

        europaMobile.textContent = data.destinations[2].name;
        europaDetailMobile.textContent = data.destinations[2].description;
        europaDistanceMobile.textContent = data.destinations[2].distance;
        europaTimeMobile.textContent = data.destinations[2].travel


        
        const europaName = document.querySelector(".europa");
        const europaPara = document.querySelector(".europa-para");
        const europaDis = document.querySelector(".europa-distance");
        const europaT = document.querySelector(".europa-time");

        const europaNameMobile = document.querySelector(".europaMobile");
        const europaParaMobile = document.querySelector(".europa-para-mobile");
        const europaDisMobile = document.querySelector(".europa-distance-mobile");
        const europaTMobile = document.querySelector(".europa-time-mobile");
        const line = document.querySelector(".europa-line");



        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(europaName, europa);
        elementsAppend(europaPara, europaDetail);
        elementsAppend(europaDis, europaDistance);
        elementsAppend(europaT, europaTime);

        elementsAppend(europaNameMobile, europaMobile);
        elementsAppend(europaParaMobile, europaDetailMobile);
        elementsAppend(europaDisMobile, europaDistanceMobile);
        elementsAppend(europaTMobile, europaTimeMobile);

        elementsAppend(line, horizontalLine);


    })


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        // element creation for desktop
        let titan = document.createElement('p');
        let titanDetail = document.createElement('p');
        let titanDistance = document.createElement('p');
        let titanTime = document.createElement('p');

        // element creation for mobile
        let titanMobile = document.createElement('p');
        let titanDetailMobile = document.createElement('p');
        let titanDistanceMobile = document.createElement('p');
        let titanTimeMobile = document.createElement('p');



        // Creation of the horizontal line that runs under the planet images
        let horizontalLine = document.createElement("hr");


        
        titan.textContent = data.destinations[3].name;
        titanDetail.textContent = data.destinations[3].description;
        titanDistance.textContent = data.destinations[3].distance;
        titanTime.textContent = data.destinations[3].travel

        titanMobile.textContent = data.destinations[3].name;
        titanDetailMobile.textContent = data.destinations[3].description;
        titanDistanceMobile.textContent = data.destinations[3].distance;
        titanTimeMobile.textContent = data.destinations[3].travel


        
        const titanName = document.querySelector(".titan");
        const titanPara = document.querySelector(".titan-para");
        const titanDis = document.querySelector(".titan-distance");
        const titanT = document.querySelector(".titan-time");

        
        const titanNameMobile = document.querySelector(".titanMobile");
        const titanParaMobile = document.querySelector(".titan-para-mobile");
        const titanDisMobile = document.querySelector(".titan-distance-mobile");
        const titanTMobile = document.querySelector(".titan-time-mobile");


        const line = document.querySelector(".titan-line");



        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(titanName, titan);
        elementsAppend(titanPara, titanDetail);
        elementsAppend(titanDis, titanDistance);
        elementsAppend(titanT, titanTime);

        elementsAppend(titanNameMobile, titanMobile);
        elementsAppend(titanParaMobile, titanDetailMobile);
        elementsAppend(titanDisMobile, titanDistanceMobile);
        elementsAppend(titanTMobile, titanTimeMobile);

        elementsAppend(line, horizontalLine);


    })


    let moonContent = document.getElementById("moonContent");
    let marsContent = document.getElementById("marsContent");
    let europaContent = document.getElementById("europaContent");
    let titanContent = document.getElementById("titanContent");

   
    let moonLink = document.querySelector(".moon-link");
    let marsLink = document.querySelector(".mars-link");
    let europaLink = document.querySelector(".europa-link");
    let titanLink = document.querySelector(".titan-link");

    // Event listiner to toggle between show and hidden

    moonLink.addEventListener("click", ()=> {
       

        moonContent.classList.remove("hide");
        moonContent.classList.add("show")
        marsContent.classList.add("hide");
        marsContent.classList.remove("show");
        europaContent.classList.add("hide");
        europaContent.classList.remove("show");
        titanContent.classList.add("hide");
        titanContent.classList.remove("show");

    });

    marsLink.addEventListener("click", ()=> {
        
        moonContent.classList.remove("show");
        moonContent.classList.add("hide")
        marsContent.classList.add("show");
        marsContent.classList.remove("hide");
        europaContent.classList.add("hide");
        europaContent.classList.remove("show");
        titanContent.classList.add("hide");
        titanContent.classList.remove("show");

    });


    europaLink.addEventListener("click", ()=> {
        
        moonContent.classList.remove("show");
        moonContent.classList.add("hide")
        marsContent.classList.add("hide");
        marsContent.classList.remove("show");
        europaContent.classList.remove("hide");
        europaContent.classList.add("show");
        titanContent.classList.add("hide");
        titanContent.classList.remove("show");


    });

    titanLink.addEventListener("click", ()=> {
        
        moonContent.classList.remove("show");
        moonContent.classList.add("hide")
        marsContent.classList.add("hide");
        marsContent.classList.remove("show");
        europaContent.classList.add("hide");
        europaContent.classList.remove("show");
        titanContent.classList.add("show");
        titanContent.classList.remove("hide");

  

    });


    let buttonOne = document.getElementById("buttonOne");
    let buttonTwo = document.getElementById("buttonTwo");
    let buttonThree = document.getElementById("buttonThree");
    let buttonFour = document.getElementById("buttonFour");


    let planetContentOne = document.querySelector(".planetContentOne");
    let planetContentTwo = document.querySelector(".planetContentTwo");
    let planetContentThree = document.querySelector(".planetContentThree");
    let planetContentFour = document.querySelector(".planetContentFour");


    buttonOne.addEventListener("click", ()=> {

        planetContentOne.classList.add("show");
        planetContentOne.classList.remove("hide");


        planetContentTwo.classList.add("hide");
        planetContentTwo.classList.remove("remove");


        planetContentThree.classList.add("hide");
        planetContentThree.classList.remove("remove");


        planetContentFour.classList.add("hide");
        planetContentFour.classList.remove("remove");


    })

    buttonTwo.addEventListener("click", ()=> {

        planetContentOne.classList.add("hide");
        planetContentOne.classList.remove("show");


        planetContentTwo.classList.add("show");
        planetContentTwo.classList.remove("hide");


        planetContentThree.classList.add("hide");
        planetContentThree.classList.remove("remove");


        planetContentFour.classList.add("hide");
        planetContentFour.classList.remove("remove");


    })


    buttonThree.addEventListener("click", ()=> {

        planetContentOne.classList.add("hide");
        planetContentOne.classList.remove("remove");


        planetContentTwo.classList.add("hide");
        planetContentTwo.classList.remove("remove");


        planetContentThree.classList.add("show");
        planetContentThree.classList.remove("hide");


        planetContentFour.classList.add("hide");
        planetContentFour.classList.remove("remove");


    })


    buttonFour.addEventListener("click", ()=> {

        planetContentOne.classList.add("hide");
        planetContentOne.classList.remove("show");


        planetContentTwo.classList.add("hide");
        planetContentTwo.classList.remove("remove");


        planetContentThree.classList.add("hide");
        planetContentThree.classList.remove("remove");


        planetContentFour.classList.add("show");
        planetContentFour.classList.remove("hide");


    })



    

 




   
