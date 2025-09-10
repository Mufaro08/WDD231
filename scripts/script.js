//<script src="https://kit.fontawesome.com/b2b27cbc0a.js" crossorigin="anonymous"></script>    
const footer = document.querySelector("footer");
const firstParagraph = footer.querySelector("p");
const secondParagraph = footer.querySelector("p:nth-of-type(2)");


const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;


firstParagraph.textContent = `© ${currentYear} Mufaro Justice Tapera, Zimbabwe. All rights reserved.`;
secondParagraph.textContent = `Last Modified: ${lastModified}`;



// const menuList = document.getElementById("menuList");
// menuList.style.maxHeight = "0px";

// document.querySelector(".fa-bars").addEventListener("click", toggleMenu());

// function toggleMenu(){
//     if (menuList.style.maxHeight == "0px")
//     {
//         menuList.style.maxHeight == "100px"
//     }
//     else
//     {
//         menuList.style.maxHeight == "0px"
//     }
// }


// const menuList = document.getElementById("menuList");
// menuList.style.maxHeight = "0px";

// function toggleMenu() {
//   if (menuList.style.maxHeight === "0px" ) {
//     menuList.style.maxHeight = "100px";
//   } else {
//     menuList.style.maxHeight = "0px";
//   }
// }

// document.querySelector(".fa-bars").addEventListener("click", toggleMenu);


 const courses = {
      WDD: ["wdd 130", "wdd 131", "wdd 230"],
      CSE: ["cse 130", "cse 131", "cse 230"]
    };

    function showCourses(type) {
      const list = document.getElementById("courses-list");
      list.innerHTML = ""; 

      let items = [];
      if (type === "all") {
        items = [...courses.WDD, ...courses.CSE];
      } else {
        items = courses[type];
      }

      items.forEach(course => {
        const div = document.createElement("div");
        div.className = "course-item";
        div.textContent = course;
        list.appendChild(div);
      });
    }

    showCourses("all");