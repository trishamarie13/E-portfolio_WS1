window.onload = function () {

    window.alert("Welcome to Trisha Marie Estrecho's Portfolio!");

    console.log("Portfolio website loaded successfully.");

    document.getElementById("mainHeading").innerHTML =
        "Welcome to My Personal Portfolio";

    document.getElementById("mainHeading").style.color = "#D16D8A";
    document.getElementById("mainHeading").style.fontSize = "50px";

};

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    console.log("Theme changed.");

}

function showInfo() {

    alert(
        "PERSONAL INFORMATION\n\n" +
        "Name: Trisha Marie F. Estrecho\n\n" +
        "Course: Bachelor of Science in Information Technology\n\n" +
        "Skills:\n" +
        "- HTML\n" +
        "- CSS\n" +
        "- JavaScript\n" +
        "- Web Design\n" +
        "- Video Editing\n" +
        "- Photo Editing\n\n" +
        "Email: trmestrecho@gmail.com\n\n" +
        "Phone: 0991-154-6391"
    );

    console.log("Personal information displayed.");

}

let darkMode = false;

function changeTheme() {
    if (!darkMode){
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "black";
        darkMode = true;
        console.log("Dark mode enabled.");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = false; 
        console.log("Light Mode Enabled.");
    }
}
function greetUser(name) {

    console.log("Hello, " + name + "! Welcome to my portfolio.");

}

greetUser("Visitor");