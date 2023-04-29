let hamOpen = document.getElementById("Open");
let hamClose =  document.getElementById("Close");

let mobileMenu = document.getElementById("mobileMenu");
// let body = document.body;


hamOpen.addEventListener("click", ()=>  {

    if (mobileMenu.classList.contains("hide")) {

        mobileMenu.classList.remove("hide");
        mobileMenu.classList.add("show");
        // body.classList.add("noscroll")

        hamClose.addEventListener("click", ()=> {

            // console.log("Hi there");
            if(mobileMenu.classList.contains("show")) {

                mobileMenu.classList.remove("show");
                mobileMenu.classList.add("hide");
                // body.classList.remove("noscroll");

            }
        })
    }

})

// Will be needed
// "./assets/destination/image-moon.png"







