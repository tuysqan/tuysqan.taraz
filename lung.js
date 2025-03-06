document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("change-lang");

    
    fetch("translations.json")
        .then(response => response.json())
        .then(translations => {
            function changeLanguage(lang) {
                document.querySelectorAll("[data-lang]").forEach(el => {
                    const key = el.getAttribute("data-lang");
                    if (translations[lang] && translations[lang][key]) {
                        el.textContent = translations[lang][key];
                    }
                });

                localStorage.setItem("language", lang); 
                select.value = lang; 
            }

          
            const savedLang = localStorage.getItem("language") || "kz";
            changeLanguage(savedLang);

         
            select.addEventListener("change", (event) => {
                changeLanguage(event.target.value);
            });
        })
        .catch(error => console.error("Ошибка загрузки переводов:", error));
});
