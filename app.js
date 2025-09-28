const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
























document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language");

    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;
        loadTranslations(selectedLang);
    });


    loadTranslations(languageSelector.value);
});

function loadTranslations(lang) {
    fetch("language.json")
        .then(response => response.json())
        .then(data => {

            for (let key in data[lang]) {
                let element = document.getElementById(key);
                if (element) {
                    element.textContent = data[lang][key];
                }
            }


            document.querySelectorAll("[data-key]").forEach(el => {
                const key = el.getAttribute("data-key");
                if (data[lang][key]) {
                    el.textContent = data[lang][key];
                }
            });

        })
        .catch(error => console.error("Tarjima yuklashda xatolik yuz berdi!", error));
}





document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language2");

    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;
        loadTranslations(selectedLang);
    });


    loadTranslations(languageSelector.value);
});

function loadTranslations(lang) {
    fetch("language.json")
        .then(response => response.json())
        .then(data => {

            for (let key in data[lang]) {
                let element = document.getElementById(key);
                if (element) {
                    element.textContent = data[lang][key];
                }
            }


            document.querySelectorAll("[data-key]").forEach(el => {
                const key = el.getAttribute("data-key");
                if (data[lang][key]) {
                    el.textContent = data[lang][key];
                }
            });

        })
        .catch(error => console.error("Tarjima yuklashda xatolik yuz berdi!", error));
}