function initialize() {
    console.log("***********************");
    console.log("PROGAM INITIALIZED");
    console.log("***********************");
}

function toQuarters(dollars) {
    let quarters = dollars * 4;
    console.log("$" + dollars + " is worth " + quarters + " quarters");
}

initialize();

toQuarters(5);

toQuarters(10);

initialize();

toQuarters(2);

initialize();

toQuarters(0);