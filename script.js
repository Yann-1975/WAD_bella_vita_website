document.addEventListener("DOMContentLoaded", () => {


    /*
    MOBILE NAVIGATION
    */


    const toggle = document.querySelector(".menu-toggle");

    const nav = document.querySelector(".nav");


    if (toggle && nav) {


        toggle.addEventListener("click", () => {


            nav.classList.toggle("open");


        });


    }


    /*
    BOOKING AND FEEDBACK FORM
    */


    const form = document.querySelector("#bookingForm");


    if (form) {


        form.addEventListener("submit", (event) => {


            event.preventDefault();


            const data = new FormData(form);


            const name = data.get("name");

            const email = data.get("email");

            const date = data.get("date");

            const guests = data.get("guests");

            const message = data.get("message");


            const subject = encodeURIComponent(

                `Bella Vita booking request from ${name}`

            );


            const body = encodeURIComponent(`

Hello Bella Vita,

I would like to make a booking/request.

Name: ${name}

Email: ${email}

Preferred date: ${date}

Number of guests: ${guests}


Message:

${message}


Thank you.

`);


            document.querySelector("#formMessage").textContent =

                "Your email application is opening with your request prepared.";


            window.location.href =

                `mailto:hello@bellavita.example?subject=${subject}&body=${body}`;


        });


    }


});
