fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let moon= document.createElement('p');
        let moonDetail = document.createElement('p');
        let moonDistance = document.createElement('p');
        let moonTime = document.createElement('p');
        let horizontalLine = document.createElement("hr");




        moon.textContent = data.destinations[0].name;
        moonDetail.textContent = data.destinations[0].description;
        moonDistance.textContent = data.destinations[0].distance;
        moonTime.textContent = data.destinations[0].travel;


        const moonName = document.querySelector('.moon');
        const moonPara = document.querySelector(".moon-para");
        const moonDis = document.querySelector(".moon-distance");
        const moonT = document.querySelector(".moon-time");
        const line = document.querySelector(".line");
   

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(moonName, moon);
        elementsAppend(moonPara, moonDetail);
        elementsAppend(moonDis, moonDistance);
        elementsAppend(moonT, moonTime);
        elementsAppend(line, horizontalLine);


    });


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {


        let mars = document.createElement('p');
        let marsDetail = document.createElement('p');
        let marsDistance = document.createElement('p');
        let marsTime = document.createElement('p');
        let horizontalLine = document.createElement("hr");


        
        mars.textContent = data.destinations[1].name;
        marsDetail.textContent = data.destinations[1].description;
        marsDistance.textContent = data.destinations[1].distance;
        marsTime.textContent = data.destinations[1].travel


        
        const marsName = document.querySelector(".mars");
        const marsPara = document.querySelector(".mars-para");
        const marsDis = document.querySelector(".mars-distance");
        const marsT = document.querySelector(".mars-time");
        const line = document.querySelector(".line");



        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(marsName, mars);
        elementsAppend(marsPara, marsDetail);
        elementsAppend(marsDis, marsDistance);
        elementsAppend(marsT, marsTime);
        elementsAppend(line, horizontalLine);

        

    })


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {


        let europa = document.createElement('p');
        let europaDetail = document.createElement('p');
        let europaDistance = document.createElement('p');
        let europaTime = document.createElement('p');
        let horizontalLine = document.createElement("hr");


        
        europa.textContent = data.destinations[2].name;
        europaDetail.textContent = data.destinations[2].description;
        europaDistance.textContent = data.destinations[2].distance;
        europaTime.textContent = data.destinations[2].travel


        
        const europaName = document.querySelector(".europa");
        const europaPara = document.querySelector(".europa-para");
        const europaDis = document.querySelector(".europa-distance");
        const europaT = document.querySelector(".europa-time");
        const line = document.querySelector(".line");



        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(europaName, europa);
        elementsAppend(europaPara, europaDetail);
        elementsAppend(europaDis, europaDistance);
        elementsAppend(europaT, europaTime);
        elementsAppend(line, horizontalLine);


    })


    fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {


        let titan = document.createElement('p');
        let titanDetail = document.createElement('p');
        let titanDistance = document.createElement('p');
        let titanTime = document.createElement('p');
        let horizontalLine = document.createElement("hr");


        
        titan.textContent = data.destinations[3].name;
        titanDetail.textContent = data.destinations[3].description;
        titanDistance.textContent = data.destinations[3].distance;
        titanTime.textContent = data.destinations[3].travel


        
        const titanName = document.querySelector(".titan");
        const titanPara = document.querySelector(".titan-para");
        const titanDis = document.querySelector(".titan-distance");
        const titanT = document.querySelector(".titan-time");
        const line = document.querySelector(".line");



        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(titanName, titan);
        elementsAppend(titanPara, titanDetail);
        elementsAppend(titanDis, titanDistance);
        elementsAppend(titanT, titanTime);
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


    moonLink.addEventListener("click", ()=> {
       

        moonContent.classList.remove("hide");
        moonContent.classList.add("show")
        marsContent.classList.add("hide");
        marsContent.classList.remove("show");
        europaContent.classList.add("hide");
        europaContent.classList.remove("show");
        titanContent.classList.add("hide");
        titanContent.classList.remove("show");

    //    if (moonContent.classList.contains("hide")) {

    //     alert(moonContent.classList)

    //     moonContent.classList.add("show");
    //     marsContent.classList.add("hide");
    //     titanContent.classList.add("hide");
    //     europaContent.classList.add("hide");
        
    //    };

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

    //    if (moonContent.classList.contains("hide")) {

    //     alert(moonContent.classList)

    //     moonContent.classList.add("show");
    //     marsContent.classList.add("hide");
    //     titanContent.classList.add("hide");
    //     europaContent.classList.add("hide");
        
    //    };

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

    //    if (moonContent.classList.contains("hide")) {

    //     alert(moonContent.classList)

    //     moonContent.classList.add("show");
    //     marsContent.classList.add("hide");
    //     titanContent.classList.add("hide");
    //     europaContent.classList.add("hide");
        
    //    };

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

    //    if (moonContent.classList.contains("hide")) {

    //     alert(moonContent.classList)

    //     moonContent.classList.add("show");
    //     marsContent.classList.add("hide");
    //     titanContent.classList.add("hide");
    //     europaContent.classList.add("hide");
        
    //    };

    });

    // marsLink.addEventListener("click", ()=> {

    //    if (marsContent.classList.contains("hide")) {

    //     marsContent.classList.remove("hide");
    //     marsContent.classList.add("show");

    //     moonContent.classList.add("hide");
    //     titanContent.classList.add("hide");
    //     europaContent.classList.add("hide");
        
    //    };


    // });

    // titanLink.addEventListener("click", ()=> {

    //     if (titanContent.classList.contains("hide")) {
 
    //      titanContent.classList.remove("hide");
    //      titanContent.classList.add("show");
 
    //      moonContent.classList.add("hide");
    //      marsContent.classList.add("hide");
    //      europaContent.classList.add("hide");
         
    //     };
 
    // });

    // europaLink.addEventListener("click", ()=> {

    //    if (europaContent.classList.contains("hide")) {

    //     europaContent.classList.remove("hide");
    //     europaContent.classList.add("show");

    //     moonContent.classList.add("hide");
    //     marsContent.classList.add("hide");
    //     titanContent.classList.add("hide");
        
    //    };

    // });

 




   
