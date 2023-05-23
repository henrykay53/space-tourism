fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        
        let crewMemberOneR = document.createElement('p');
        let crewMemberOneN = document.createElement('p');
        let crewMemberOneB = document.createElement('p');

        let crewMemberOneRMobile = document.createElement('p');
        let crewMemberOneNMobile = document.createElement('p');
        let crewMemberOneBMobile = document.createElement('p');

        // let crewOneImg = document.createElement('img');



        crewMemberOneR.textContent = data.crew[0].role;
        crewMemberOneN.textContent = data.crew[0].name;
        crewMemberOneB.textContent = data.crew[0].bio;

        
        crewMemberOneRMobile.textContent = data.crew[0].role;
        crewMemberOneNMobile.textContent = data.crew[0].name;
        crewMemberOneBMobile.textContent = data.crew[0].bio;

        
        const crewOneRole = document.querySelector(".crewOneRole")
        const crewOneName = document.querySelector('.crewOneName');
        const crewOneBio = document.querySelector(".crewOneBio");

        const crewOneRoleMobile = document.querySelector(".roleOneMobile")
        const crewOneNameMobile = document.querySelector('.nameOneMobile');
        const crewOneBioMobile = document.querySelector(".bioOneMobile");
        
   

        function elementsAppend(targetedElement, chiltToAppend) {

            targetedElement.appendChild(chiltToAppend);
        }


        elementsAppend(crewOneRole, crewMemberOneR);
        elementsAppend(crewOneName, crewMemberOneN);
        elementsAppend(crewOneBio, crewMemberOneB);

        elementsAppend(crewOneRoleMobile, crewMemberOneRMobile);
        elementsAppend(crewOneNameMobile, crewMemberOneNMobile);
        elementsAppend(crewOneBioMobile, crewMemberOneBMobile);
        
    });


fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        
        let crewMemberTwoR = document.createElement('p');
        let crewMemberTwoN = document.createElement('p');
        let crewMemberTwoB = document.createElement('p');

        let crewMemberTwoRMobile = document.createElement('p');
        let crewMemberTwoNMobile = document.createElement('p');
        let crewMemberTwoBMobile = document.createElement('p');



        crewMemberTwoR.textContent = data.crew[1].role;
        crewMemberTwoN.textContent = data.crew[1].name;
        crewMemberTwoB.textContent = data.crew[1].bio;

        crewMemberTwoRMobile.textContent = data.crew[1].role;
        crewMemberTwoNMobile.textContent = data.crew[1].name;
        crewMemberTwoBMobile.textContent = data.crew[1].bio;


        const crewTwoRole = document.querySelector(".crewTwoRole")
        const crewTwoName = document.querySelector('.crewTwoName');
        const crewTwoBio = document.querySelector(".crewTwoBio");

        const crewTwoRoleMobile = document.querySelector(".roleTwoMobile")
        const crewTwoNameMobile = document.querySelector('.nameTwoMobile');
        const crewTwoBioMobile = document.querySelector(".bioTwoMobile");
        
   

        function elementsAppend(targetedElement, childToAppend) {

            targetedElement.appendChild(childToAppend);
        }


        elementsAppend(crewTwoRole, crewMemberTwoR);
        elementsAppend(crewTwoName, crewMemberTwoN);
        elementsAppend(crewTwoBio, crewMemberTwoB);


        elementsAppend(crewTwoRoleMobile, crewMemberTwoRMobile);
        elementsAppend(crewTwoNameMobile, crewMemberTwoNMobile);
        elementsAppend(crewTwoBioMobile, crewMemberTwoBMobile);
        


    });


fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        
        let crewMemberThreeR = document.createElement('p');
        let crewMemberThreeN = document.createElement('p');
        let crewMemberThreeB = document.createElement('p');


        let crewMemberThreeRMobile = document.createElement('p');
        let crewMemberThreeNMobile = document.createElement('p');
        let crewMemberThreeBMobile = document.createElement('p');



        crewMemberThreeR.textContent = data.crew[2].role;
        crewMemberThreeN.textContent = data.crew[2].name;
        crewMemberThreeB.textContent = data.crew[2].bio;

        crewMemberThreeRMobile.textContent = data.crew[2].role;
        crewMemberThreeNMobile.textContent = data.crew[2].name;
        crewMemberThreeBMobile.textContent = data.crew[2].bio;


        const crewThreeRole = document.querySelector(".crewThreeRole")
        const crewThreeName = document.querySelector('.crewThreeName');
        const crewThreeBio = document.querySelector(".crewThreeBio");

        const crewThreeRoleMobile = document.querySelector(".roleThreeMobile");
        const crewThreeNameMobile = document.querySelector('.nameThreeMobile');
        const crewThreeBioMobile = document.querySelector(".bioThreeMobile");
        
   

        function elementsAppend(targetedElement, childToAppend) {

            targetedElement.appendChild(childToAppend);
        }


        elementsAppend(crewThreeRole, crewMemberThreeR);
        elementsAppend(crewThreeName, crewMemberThreeN);
        elementsAppend(crewThreeBio, crewMemberThreeB);

        elementsAppend(crewThreeRoleMobile, crewMemberThreeRMobile);
        elementsAppend(crewThreeNameMobile, crewMemberThreeNMobile);
        elementsAppend(crewThreeBioMobile, crewMemberThreeBMobile);
        


    });


fetch("../starter-code/data.json")
    .then(res => res.json())
    .then(data => {

        
        let crewMemberFourR = document.createElement('p');
        let crewMemberFourN = document.createElement('p');
        let crewMemberFourB = document.createElement('p');

        let crewMemberFourRMobile = document.createElement('p');
        let crewMemberFourNMobile = document.createElement('p');
        let crewMemberFourBMobile = document.createElement('p');



        crewMemberFourR.textContent = data.crew[3].role;
        crewMemberFourN.textContent = data.crew[3].name;
        crewMemberFourB.textContent = data.crew[3].bio;

        crewMemberFourRMobile.textContent = data.crew[3].role;
        crewMemberFourNMobile.textContent = data.crew[3].name;
        crewMemberFourBMobile.textContent = data.crew[3].bio;


        const crewFourRole = document.querySelector(".crewFourRole");
        const crewFourName = document.querySelector('.crewFourName');
        const crewFourBio = document.querySelector(".crewFourBio");

        const crewFourRoleMobile = document.querySelector(".roleFourMobile");
        const crewFourNameMobile = document.querySelector('.nameFourMobile');
        const crewFourBioMobile = document.querySelector(".bioFourMobile");
        
   

        function elementsAppend(targetedElement, childToAppend) {

            targetedElement.appendChild(childToAppend);
        }


        elementsAppend(crewFourRole, crewMemberFourR);
        elementsAppend(crewFourName, crewMemberFourN);
        elementsAppend(crewFourBio, crewMemberFourB);

        elementsAppend(crewFourRoleMobile, crewMemberFourRMobile);
        elementsAppend(crewFourNameMobile, crewMemberFourNMobile);
        elementsAppend(crewFourBioMobile, crewMemberFourBMobile);
        


    });

    let crewOne = document.getElementById('crewOne');
    let crewTwo = document.getElementById('crewTwo');
    let crewThree = document.getElementById('crewThree');
    let crewFour = document.getElementById('crewFour');

    let crewContentOne = document.querySelector(".desktopCrewMembersOne");
    let crewContentTwo = document.querySelector(".desktopCrewMembersTwo");
    let crewContentThree = document.querySelector(".desktopCrewMembersThree");
    let crewContentFour = document.querySelector(".desktopCrewMembersFour");

    crewOne.addEventListener("click", ()=> {

        crewOne.classList.add("active");
        crewTwo.classList.remove("active");
        crewThree.classList.remove("active");
        crewFour.classList.remove("active");


        crewContentOne.classList.remove("hide");
        crewContentOne.classList.add("show");
        crewContentOne.classList.add("animate");

    
        crewContentTwo.classList.remove("show");
        crewContentTwo.classList.add("hide");

        crewContentThree.classList.remove("show");
        crewContentThree.classList.add("hide");

        crewContentFour.classList.remove("show");
        crewContentFour.classList.add("hide");
        
    })


    crewTwo.addEventListener("click", ()=> {

        crewOne.classList.remove("active");
        crewTwo.classList.add("active");
        crewThree.classList.remove("active");
        crewFour.classList.remove("active");


        crewContentOne.classList.add("hide");
        crewContentOne.classList.remove("show");
        

    
        crewContentTwo.classList.remove("hide");
        crewContentTwo.classList.add("show");

        crewContentThree.classList.remove("show");
        crewContentThree.classList.add("hide");

        crewContentFour.classList.remove("show");
        crewContentFour.classList.add("hide");
        
    })

    crewThree.addEventListener("click", ()=> {

        crewOne.classList.remove("active");
        crewTwo.classList.remove("active");
        crewThree.classList.add("active");
        crewFour.classList.remove("active");


        crewContentOne.classList.remove("show");
        crewContentOne.classList.add("hide");
        

    
        crewContentTwo.classList.remove("show");
        crewContentTwo.classList.add("hide");

        crewContentThree.classList.remove("hide");
        crewContentThree.classList.add("show");

        crewContentFour.classList.remove("show");
        crewContentFour.classList.add("hide");
        
    })

    crewFour.addEventListener("click", ()=> {

        crewOne.classList.remove("active");
        crewTwo.classList.remove("active");
        crewThree.classList.remove("active");
        crewFour.classList.add("active");


        crewContentOne.classList.remove("show");
        crewContentOne.classList.add("hide");
   

    
        crewContentTwo.classList.remove("show");
        crewContentTwo.classList.add("hide");

        crewContentThree.classList.remove("show");
        crewContentThree.classList.add("hide");

        crewContentFour.classList.remove("hide");
        crewContentFour.classList.add("show");
        
    })


