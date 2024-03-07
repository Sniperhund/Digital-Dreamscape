document.getElementById("kontakt").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var navn = document.getElementById("navn").value;
    var email = document.getElementById("email").value;
    var emne = document.getElementById("emne").value;
    var besked = document.getElementById("besked").value;

    // Perform form validation and submission logic here
    // Create an object for the embed data
    var embedData = {
        title: "Contact Form Submission",
        fields: [
            { name: "Name", value: navn },
            { name: "Email", value: email },
            { name: "Subject", value: emne },
            { name: "Message", value: besked },
        ],
    };

    // Send the embed to the Discord webhook
    fetch(
        "https://discord.com/api/webhooks/1215241995476533278/labICy_E81dyTf3t6tu6_hlcIWnAkXu92OPkJsvMtonx8F3xG5ntj-P5D7cjvLiklm-f",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ embeds: [embedData] }),
        }
    )
        .then((response) => {
            if (response.ok) {
                console.log("Embed sent successfully");
            } else {
                console.error("Failed to send embed");
            }
        })
        .catch((error) => {
            console.error("Error sending embed:", error);
        });

    // Clear form fields
    document.getElementById("navn").value = "";
    document.getElementById("email").value = "";
    document.getElementById("emne").value = "";
    document.getElementById("besked").value = "";
});
