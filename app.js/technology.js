fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let techOneN= document.createElement('p');
        let techOneDes = document.createElement('p');

        let techOneNMobile= document.createElement('p');
        let techOneDesMobile = document.createElement('p');
       

        techOneN.textContent = data.technology[0].name;
        techOneDes.textContent = data.technology[0].description;

        
        techOneNMobile.textContent = data.technology[0].name;
        techOneDesMobile.textContent = data.technology[0].description;
    
    
        const TechOneName = document.querySelector('.techOneNameDesktop');
        const techOneDescription = document.querySelector(".techOneDescriptionDesktop");

        
        const TechOneNameMobile = document.querySelector('.techOneNameMobile');
        const techOneDescriptionMobile = document.querySelector(".techOneDescriptionMobile");
        
   

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(TechOneName, techOneN);
        elementsAppend(techOneDescription, techOneDes);

        
        elementsAppend(TechOneNameMobile, techOneNMobile);
        elementsAppend(techOneDescriptionMobile, techOneDesMobile);
        


    });

fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let techTwoN = document.createElement('p');
        let techTwoDes = document.createElement('p');

        let techTwoNMobile = document.createElement('p');
        let techTwoDesMobile = document.createElement('p');
       

        techTwoN.textContent = data.technology[1].name;
        techTwoDes.textContent = data.technology[1].description;

        techTwoNMobile.textContent = data.technology[1].name;
        techTwoDesMobile.textContent = data.technology[1].description;
    
    
        const techTwoName = document.querySelector('.techTwoNameDesktop');
        const techTwoDescription = document.querySelector(".techTwoDescriptionDesktop");

        const techTwoNameMobile = document.querySelector('.techTwoNameMobile');
        const techTwoDescriptionMobile = document.querySelector(".techTwoDescriptionMobile");
        
   

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(techTwoName, techTwoN);
        elementsAppend(techTwoDescription, techTwoDes);

        elementsAppend(techTwoNameMobile, techTwoNMobile);
        elementsAppend(techTwoDescriptionMobile, techTwoDesMobile);
        


    });

fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let techThreeN= document.createElement('p');
        let techThreeDes = document.createElement('p');


        let techThreeNMobile= document.createElement('p');
        let techThreeDesMobile = document.createElement('p');
       

        techThreeN.textContent = data.technology[2].name;
        techThreeDes.textContent = data.technology[2].description;

        
        techThreeNMobile.textContent = data.technology[2].name;
        techThreeDesMobile.textContent = data.technology[2].description;
    
    
        const TechThreeName = document.querySelector('.techThreeNameDesktop');
        const techThreeDescription = document.querySelector(".techThreeDescriptionDesktop");

        const TechThreeNameMobile = document.querySelector('.techThreeNameMobile');
        const techThreeDescriptionMobile = document.querySelector(".techThreeDescriptionMobile");
        
   

        function elementsAppend(targetedElement, childToAppend) {

            targetedElement.appendChild(childToAppend);
        }


        elementsAppend(TechThreeName, techThreeN);
        elementsAppend(techThreeDescription, techThreeDes);

        
        elementsAppend(TechThreeNameMobile, techThreeNMobile);
        elementsAppend(techThreeDescriptionMobile, techThreeDesMobile);
        


    });


    let techOne = document.getElementById('techOne');
    let techTwo = document.getElementById('techTwo');
    let techThree = document.getElementById('techThree');

    let mobileBtnOne = document.getElementById('buttonOne');
    let mobileBtnTwo = document.getElementById('buttonTwo');
    let mobileBtnThree = document.getElementById('buttonThree');



    let techContentOne = document.querySelector(".techDetailsOneDesktop")
    let techContentTwo = document.querySelector(".techDetailsTwoDesktop")
    let techContentThree = document.querySelector(".techDetailsThreeDesktop")


    let techOneMobileContent = document.querySelector(".techOneMobileContent")
    let techTwoMobileContent = document.querySelector(".techTwoMobileContent")
    let techThreeMobileContent = document.querySelector(".techThreeMobileContent")

    techOne.addEventListener("click", ()=> {

        techOne.classList.add("active");
        techTwo.classList.remove("active");
        techThree.classList.remove("active");


        techContentOne.classList.remove("hide");
        techContentOne.classList.add("show");
        techContentOne.classList.add("animate");

    
        techContentTwo.classList.remove("show");
        techContentTwo.classList.add("hide");

        techContentThree.classList.remove("show");
        techContentThree.classList.add("hide");
        
    })

 

    techTwo.addEventListener("click", ()=> {

        techOne.classList.remove("active");
        techTwo.classList.add("active");
        techThree.classList.remove("active");


        techContentOne.classList.remove("show");
        techContentOne.classList.add("hide");

    
        techContentTwo.classList.remove("hide");
        techContentTwo.classList.add("show");
        techContentTwo.classList.add("animate");

        techContentThree.classList.remove("show");
        techContentThree.classList.add("hide");
        
    })

    techThree.addEventListener("click", ()=> {

        techOne.classList.remove("active");
        techTwo.classList.remove("active");
        techThree.classList.add("active");


        techContentOne.classList.remove("show");
        techContentOne.classList.add("hide");

    
        techContentTwo.classList.remove("show");
        techContentTwo.classList.add("hide");

        techContentThree.classList.remove("hide");
        techContentThree.classList.add("show");
        techContentThree.classList.add("animate");
        
    })


    mobileBtnOne.addEventListener("click", ()=> {

        mobileBtnOne.classList.add("active");
        mobileBtnTwo.classList.remove("active");
        mobileBtnThree.classList.remove("active");

        techOneMobileContent.classList.remove("hide");
        techOneMobileContent.classList.add("show");

        techTwoMobileContent.classList.remove("show");
        techTwoMobileContent.classList.add("hide");

        techThreeMobileContent.classList.remove("show");
        techThreeMobileContent.classList.add("hide");

    })


    mobileBtnTwo.addEventListener("click", ()=> {

        mobileBtnOne.classList.remove('active');
        mobileBtnTwo.classList.add('active');
        mobileBtnThree.classList.remove('active');

        techOneMobileContent.classList.remove("show");
        techOneMobileContent.classList.add("hide");

        techTwoMobileContent.classList.remove("hide");
        techTwoMobileContent.classList.add("show");

        techThreeMobileContent.classList.remove("show");
        techThreeMobileContent.classList.add("hide");

    })

    mobileBtnThree.addEventListener("click", ()=> {

        mobileBtnOne.classList.remove('active');
        mobileBtnTwo.classList.remove('active');
        mobileBtnThree.classList.add('active');

        techOneMobileContent.classList.remove("show");
        techOneMobileContent.classList.add("hide");

        techTwoMobileContent.classList.remove("show");
        techTwoMobileContent.classList.add("hide");

        techThreeMobileContent.classList.remove("hide");
        techThreeMobileContent.classList.add("show");

    })


    


