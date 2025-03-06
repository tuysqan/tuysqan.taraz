document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeIcon.src = "dark_15008753.png"; 
        } else {
            themeIcon.src = "night-mode_12301304.png"; 
        }
    });
});

   document.addEventListener("DOMContentLoaded", function () {
            const serviceCards = document.querySelectorAll(".service-card");
            
            serviceCards.forEach(card => {
                card.addEventListener("mouseenter", () => {
                    card.style.transform = "scale(1.05)";
                    card.style.transition = "transform 0.3s ease";
                });
                
                card.addEventListener("mouseleave", () => {
                    card.style.transform = "scale(1)";
                });
            });

            const elements = document.querySelectorAll(".hidden");
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            }, { threshold: 0.2 });

            elements.forEach(element => observer.observe(element));
        });

        const slides = document.querySelectorAll(".slide");
        let currentIndex = 0;
        
        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.remove("active");
                if (index === currentIndex) {
                    slide.classList.add("active");
                }
            });
        }
        









        let curentIndex = 0;
        const slide = document.querySelectorAll(".slide");
        const carousel = document.querySelector(".carousel");
        const totalSlides = slides.length;
        const visibleSlides = 3; // Бір уақытта көрінетін суреттер саны
        const step = 100 / visibleSlides; // Ауыстыру қашықтығы
        let autoSlide;
    
        function updateSlide() {
            carousel.style.transform = `translateX(${-curentIndex * step}%)`;
        }
    
        function startAutoSlide() {
            autoSlide = setInterval(() => {
                curentIndex = (curentIndex + 1) % (totalSlides - visibleSlides + 1);
                updateSlide();
            }, 3000);
        }
    
        function stopAutoSlide() {
            clearInterval(autoSlide);
        }
    
        document.getElementById("next").addEventListener("click", function() {
            curentIndex = (curentIndex + 1) % (totalSlides - visibleSlides + 1);
            updateSlide();
        });
    
        document.getElementById("prev").addEventListener("click", function() {
            curentIndex = (curentIndex - 1 + totalSlides - visibleSlides + 1) % (totalSlides - visibleSlides + 1);
            updateSlide();
        });
    
        // Суреттің үстіне барғанда тоқтау
        document.querySelectorAll(".slide").forEach(slide => {
            slide.addEventListener("mouseenter", stopAutoSlide);
            slide.addEventListener("mouseleave", startAutoSlide);
        });
    
        startAutoSlide();
        




        const imageCon = document.querySelector(".image-container");
    
        const prevE1 = document.getElementById("prev"); // "ById" қателігі түзетілді
        const nextE1 = document.getElementById("next"); // "ById" қателігі түзетілді
    
        let x = 0;
        let timer = 0;
    
        prevE1.addEventListener("click", () => { // "addEventListener" қателігі түзетілді
            x = x - 45;
            clearTimeout(timer);
            updateImage();
        });
    
        nextE1.addEventListener("click", () => { // "next" батырмасы үшін тыңдаушы
            x = x + 45;
            clearTimeout(timer);
            updateImage();
        });
    
        function updateImage() {
            imageCon.style.transform = `perspective(1000px) rotateY(${x}deg)`;
            timer = setTimeout(() => {
                x = x - 45;
                updateImage();
            }, 3000);
        }
        
        let hasAnimated = false; 

function addAnimation() {
    if (!hasAnimated) { 
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.classList.remove('fadeInPosition'); 
            void block.offsetWidth; 
            block.classList.add('fadeInPosition'); 
        });

        hasAnimated = true; 
        window.removeEventListener('scroll', addAnimation); 
    }
}


window.addEventListener('scroll', addAnimation);

       




//   document.addEventListener("DOMContentLoaded", function () {
//       const toggleOpen = document.getElementById("toggleOpen");
//       const toggleClose = document.getElementById("toggleClose");
//       const collapseMenu = document.getElementById("collapseMenu");

//       // Function to open menu
//       toggleOpen.addEventListener("click", function () {
//           collapseMenu.classList.remove("max-lg:hidden");
//       });

//       // Function to close menu
//       toggleClose.addEventListener("click", function () {
//           collapseMenu.classList.add("max-lg:hidden");
//       });

//       // Close menu when clicking outside
//       document.addEventListener("click", function (event) {
//           if (!collapseMenu.contains(event.target) && !toggleOpen.contains(event.target)) {
//               collapseMenu.classList.add("max-lg:hidden");
//           }
//       });
//   });


document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("collapseMenu");
    const openBtn = document.getElementById("toggleOpen");
    const closeBtn = document.getElementById("toggleClose");
  
    // Open Menu
    openBtn.addEventListener("click", function () {
      menu.classList.remove("-translate-x-full");
    });
  
    // Close Menu
    closeBtn.addEventListener("click", function () {
      menu.classList.add("-translate-x-full");
    });
  
    // Close Menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !openBtn.contains(event.target)) {
        menu.classList.add("-translate-x-full");
      }
    });
  });




//   async function fetchData() {
//     try {
//         const response = await fetch("https://script.google.com/macros/s/AKfycbzF3AgUHvRZgybgFWQ0GHYZUETcrZBz9kspT0kvMdKmUeNgSz9a_NESdDgq5nArI9qscA/exec");

//         if (!response.ok) {
//             throw new Error("Network error");
//         }

//         const data = await response.json();
//         let column1 = document.getElementById("column1");
//         let column2 = document.getElementById("column2");

//         column1.innerHTML = "";
//         column2.innerHTML = "";

//         data.slice(0, 8).forEach(item => {
//             let itemDiv = document.createElement("div");
//             itemDiv.classList.add("menu-item");
//             itemDiv.innerHTML = `<span>${item.title}</span> <span class="price">${item.price} KZT</span>`;
//             column1.appendChild(itemDiv);
//         });

//         data.slice(8, 16).forEach(item => {
//             let itemDiv = document.createElement("div");
//             itemDiv.classList.add("menu-item");
//             itemDiv.innerHTML = `<span>${item.title}</span> <span class="price">${item.price} KZT</span>`;
//             column2.appendChild(itemDiv);
//         });

//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

async function fetchData() {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzF3AgUHvRZgybgFWQ0GHYZUETcrZBz9kspT0kvMdKmUeNgSz9a_NESdDgq5nArI9qscA/exec");

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();
        let column1 = document.getElementById("column1");
        let column2 = document.getElementById("column2");

        column1.innerHTML = "";
        column2.innerHTML = "";

        data.slice(0, 2).forEach(item => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <div class="menu-card hover:card">
                    <div>
                        <div class="title-wrapper">
                            <h3 class="title-3">
                                <a href="#" class="card-title">${item.title}</a>
                            </h3>
                            <span class="span title-2">${item.price} KZT</span>
                        </div>
                        <p class="cardd-text label-1">${item.description}</p>
                    </div>
                </div>
            `;
            column1.appendChild(listItem);
        });

        data.slice(2, 4).forEach(item => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <div class="menu-card hover:card">
                    <div>
                        <div class="title-wrapper">
                            <h3 class="title-3">
                                <a href="#" class="card-title">${item.title}</a>
                            </h3>
                            <span class="span title-2">${item.price} KZT</span>
                        </div>
                        <p class="cardd-text label-1">${item.description}</p>
                    </div>
                </div>
            `;
            column2.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Деректерді бет жүктелгенде шақыру
window.onload = fetchData;

document.addEventListener("DOMContentLoaded", fetchData);