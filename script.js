
// 1. EXPLORE PROPERTIES BUTTON

let propertyButtons = document.querySelectorAll(".scroll-properties");

propertyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        document.getElementById("featured-properties").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// 2. LEARN MORE BUTTON

let contactButtons = document.querySelectorAll(".scroll-contact");

contactButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// 3. VIEW DETAILS BUTTONS

let detailButtons = document.querySelectorAll(".view-details");

detailButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".property-card");

        let title = card.querySelector("h2").innerText;
        let details = card.querySelector("ul").innerText;
        let image = card.querySelector("img").getAttribute("src");

        let params = new URLSearchParams();

        params.set("title", title);
        params.set("details", details);
        params.set("image", image);

        window.location.href =
            "property-details.html?" + params.toString();

    });

});


// 4. CONTACT FORM

let contactForm = document.getElementById("estate-contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});


// 5. AUTOMATIC CURRENT YEAR

let year = document.getElementById("current-year");

year.innerText = new Date().getFullYear();
