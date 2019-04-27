var myDad = {
    firstName: "Ron",
    lastName: "Walters",
    age: 55,
    favoriteTVShow: "Home Improvement",
    favoriteSong: "Jump"
};

var myMom = {
    firstName: "Lisa",
    lastName: "Walters",
    age: 49,
    favoriteTVShow: "White Collar",
    favoriteSong: "It Is Well"
};

var myBroInLaw = {
    firstName: "Matthew",
    lastName: "Fischer",
    age: 25,
    favoriteTVShow: "Psych",
    favoriteSong: "Way Back Home"
};

var myOlderSister = {
    firstName: "Hannah",
    lastName: "Fischer",
    age: 20,
    favoriteTVShow: "Phineas and Ferb",
    favoriteSong: "The Internet"
};

var myNiece = {
    firstName: "Abigail",
    lastName: "Fischer",
    age: "3 1/2 months",
    favoriteTVShow: "T.B.D.",
    favoriteSong: "T.B.D."
};

var family = [myDad, myMom, myBroInLaw, myOlderSister, myNiece];

/* From here on out, I had to use somebody else's assignment as an example.
I just couldn't figure out what the instructions wanted me to do.
Here's their work: https://github.com/WeustiS/family-tree/blob/master/index.js */

function run(family) {
    console.log("Names and favorite songs");

    for (i = 0; i < family.length; i++) {
        console.log(
            family [i].firstName +
            " " +
            family [i].lastName +
            " " +
            family [i].favoriteSong
        );
    }

    console.log("TV show update");

    for (i = 0; i < family.length; i++) {
        updateTVShow(family[i]);
        console.log(
            family[i].firstName +
            " " +
            family[i].lastName +
            " " +
            family[i].favoriteTVShow
        );
    }
}

function updateTVShow(person) {
    person.favoriteTVShow = person.favoriteTVShow + ", updated";
}

//I don't know what the "person" is for, but I don't know what else to do, so I did what they did.