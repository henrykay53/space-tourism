fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let techOneN= document.createElement('p');
        let techOneDes = document.createElement('p');
       

        techOneN.textContent = data.technology[0].name;
        techOneDes.textContent = data.technology[0].description;
    
    
        const TechOneName = document.querySelector('.techOneNameDesktop');
        const techOneDescription = document.querySelector(".techOneDescriptionDesktop");
        
   

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(TechOneName, techOneN);
        elementsAppend(techOneDescription, techOneDes);
        


    });

fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let techTwoN = document.createElement('p');
        let techTwoDes = document.createElement('p');
       

        techTwoN.textContent = data.technology[1].name;
        techTwoDes.textContent = data.technology[1].description;
    
    
        const techTwoName = document.querySelector('.techTwoNameDesktop');
        const techTwoDescription = document.querySelector(".techTwoDescriptionDesktop");
        
   

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(techTwoName, techTwoN);
        elementsAppend(techTwoDescription, techTwoDes);
        


    });

fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        let techThreeN= document.createElement('p');
        let techThreeDes = document.createElement('p');
       

        techThreeN.textContent = data.technology[2].name;
        techThreeDes.textContent = data.technology[2].description;
    
    
        const TechThreeName = document.querySelector('.techThreeNameDesktop');
        const techThreeDescription = document.querySelector(".techThreeDescriptionDesktop");
        
   

        function elementsAppend(targetedElement, childToAppend) {

            targetedElement.appendChild(childToAppend);
        }


        elementsAppend(TechThreeName, techThreeN);
        elementsAppend(techThreeDescription, techThreeDes);
        


    });


    let techOne = document.getElementById('techOne');
    let techTwo = document.getElementById('techTwo');
    let techThree = document.getElementById('techThree');

    let techContentOne = document.querySelector(".techDetailsOneDesktop")
    let techContentTwo = document.querySelector(".techDetailsTwoDesktop")
    let techContentThree = document.querySelector(".techDetailsThreeDesktop")

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


    


