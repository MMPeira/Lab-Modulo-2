// Seleccion de hoteles

var hoteles = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img: "https://media-cdn.tripadvisor.com/media/photo-w/16/1a/ea/54/hotel-presidente-4s.jpg",
    },
    Lani: {
        name: "Lani",
        location: "Asturias",
        img: "https://media-cdn.tripadvisor.com/media/photo-w/0f/81/be/5f/solpelicanosocas-pelicanosgene.jpg",
    },
    "bla bla bla": {
        name: "bla bla bla",
        location: "Sevilla",
        img: "https://casadelpoeta.es/wp-content/uploads/2019/09/Casa-del-Poeta-Hoteles-con-encanto.jpg",
    },
}

var selectedHotel = prompt("Indica el nombre del hotel: Mencey, Lani o bla bla bla");


document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles [selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles [selectedHotel].location;
document.getElementById("img-hotel").src = hoteles [selectedHotel].img;


//puntuacion

var stars = {
    1: "<span>&#9733;</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    2: "<span>&#9733;</span><span>&#9733;</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734</span><span>&#9734</span>",
    4:"<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734</span>",
    5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("¿Cuantas estrellas le das al hotel?: 1, 2, 3, 4 o 5");

document.getElementById("rating").innerHTML = stars[rating] + " estrellas";

//anonimo

var algo = confirm("¿Quiere que la reseña sea anónima?")
document.getElementById("anonymous").checked = algo