let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [59.918072, 30.304908],
        zoom: 11,
        controls: []
    });

    const coords = [
        [59.936709, 30.375967],
        [59.897856, 30.306861],
        [59.985666, 30.283721],
        [60.020207, 30.409000]
    ];

    const myCollection = new ymaps.GeoObjectCollection({},{
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "../img/geo.png",
        iconImageSize: [45, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    })

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);

// ymaps.ready(init);
// function init(){
//     var myMap = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 7
//     });
// }