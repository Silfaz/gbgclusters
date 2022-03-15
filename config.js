var config = {
    style: 'mapbox://styles/silfaz/cl0crqri6000c14p3xtxnge8i',
    accessToken: 'pk.eyJ1Ijoic2lsZmF6IiwiYSI6ImNsMGZmM216ajBmbG8zam10ZzNwcXc0eWkifQ.xof_xk5gTVjvbDaO49quWA',
    showMarkers: true,
    markerColor: '#aa6633',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Lightyears, mustard and diamonds',
    subtitle: 'The fantastical streetnames of Gothenburg',
    byline: 'By Silvia Hüttner',
    footer: '',
    chapters: [
        {
            id: 'GBG in Europe',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<b>Gothenburg</b> (Swedish: Göteborg) lies on the West coast of Sweden close to Denmark and Norway. It's Sweden's second largest city with half a million inhabitants and the largest port in Scandinavia. <p>The larger Gothenburg area has 5967 named streets, paths, roads and squares on Open Street Map.",
            location: {
                center: [11.80677, 57.93543],
                zoom: 2.85,
                pitch: 45.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'GBG_zoomed_in',
            alignment: 'right',
            hidden: false,
            title: "Gothenburg's street clusters",
            image: '',
            description: 'In 2014, when I moved to Gothenburg from Austria, I noticed that many streets have really cute names. I was used to streets being mostly named after people - politicians, poets, composers. But in Gothenburg there was also <b>Tomato Street</b>, <b>Trumpet Street</b>, <b>Telescope Street</b>, and <b>Tornado Street</b>. One friend lived on <b>Spring onion Street</b>, and another on <b>Summer weather Street</b>. I discovered that there are whole areas that are space-themed, and others that are bird-themed. <p>Here is a collection of my favourite discoveries.',
            location: {
                center: [11.94893, 57.70678],
                zoom: 11.36,
                pitch: 45.00,
                bearing: 0.00


            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Doctors',
            alignment: 'left',
            hidden: false,
            title: 'Doctors around the hospital',
            image: '',
            description: "The location of the city's biggest hospital can be easily identified by the streets that are named after famous (and not so famous) doctors all around the neighbourhood. <p> Like Doctor Allard from <b>Doctor Allard Street </b>(Doktor Allards Gata), who was not only a physician at Sahlgrenska, but also founded an organiation that helped finance free tram trips and summer excursion to the beach for children from poor families.",
            location: {
                center: [11.96382, 57.68268],
                zoom: 14.89,
                pitch: 45.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'radio_cluster',
            alignment: 'right',
            hidden: false,
            title: 'Old radio station',
            image: '',
            description: "A bit further South, right at the motorway exit <b>Radio Junction</b> (Radiomotet) is a neighbourhood that is all radio-themed. There's <b>Longwave Street</b> (Långvågsgatan) and <b>Shortwave Street </b>(Kortvågsgatan), <b>Groundwire Street </b>(Jordledningsgatan), <b>Transistor Street</b> (Transistorgatan), <b>Headphone</b> Street (Hörlursgatan) and <b>Antenna</b> Street (Antenngatan). <p> From 1951 until 1984 a big radio station was located in this area. Apparently the transmitter was so strong that shortly after its inauguration, local residuents started hearing voices and radio programs coming from their ovens and from stovetops. And video tapes recorded in the vicinity always had the radio program in the background. ",
            location: {
                center: [11.93015, 57.65377],
                zoom: 14.89,
                pitch: 45.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'culture_cluster_music',
            alignment: 'right',
            hidden: false,
            title: 'Music',
            image: '',
            description: 'From the "radio cluster" via some acoustic streets - <b>Acoustic Way</b> (Akustikvägen) and <b>Frequency Way</b> (Frekvensvägen) - we reach the "music cluster". Here we find many instruments, such as <b>Piano Street </b>(Pianogatan), <b>Mandolin Street</b> (Mandolingatan), <b>Vibraphone Street </b> (Vibrafongatan), <b>Music box Street </b>(Speldosgatan), and even the more exotic <b>Birch trumpet Street</b> (Näverlursgatan), named after a Nordic trumpet made out of spruce and used to "intimidate predators, frighten supernatural enemies, and convene council meetings". ',
            location: {
                center: [11.90698, 57.65431],
                zoom: 14.89,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'culture_cluster_dances',
            alignment: 'left',
            hidden: false,
            title: 'Dance',
            image: '',
            description: "In the Northern part of the city, there's a small music-related dance cluster, featuring <b>Tango Road </b>(Tangovägen), <b>Salsa Road </b>(Salsavägen), <b>Bolero Road </b>(Bolerovägen) and <b>Rhumba Road </b>(Rumbavägen). ",
            location: {
                center: [12.04848, 57.78953],
                zoom: 16.15,
                pitch: 45.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'culture_cluster_literature',
            alignment: 'right',
            hidden: false,
            title: 'Literature',
            image: '',
            description: "A bit South-West of the dance cluster, <b>Literature Street </b>(Litteraturgatan) starts at a square named after the Swedish literature nobel prize winner Selma Lagerlöf - Selma Lagerlöfs torg. She is probably best known for <i>'The Wonderful Adventures of Nils'</i>, in which a boy gets shrunk by a troll and then goes off on a journey around Sweden with a flock of geese. <p>Litteraturgatan leads to other literature-related streets, such as <b>Anecdote Street </b>(Anekdotgatan),<b> Tale Street</b> (Berättelsegatan), <b>Author Street </b>(Författaregatan) and <b>Epilogue Street </b>(Epiloggatan). ",
            location: {
                center: [11.97055, 57.73124],
                zoom: 15.07,
                pitch: 45.00,
                bearing: 0.00


            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'food_cluster_herbs',
            alignment: 'right',
            hidden: false,
            title: 'Herbs & Spices',
            image: '',
            description: "Back up North, we have a big food-related cluster, with streets named after herbs: <b>Parsley Street</b> (Persiljagatan), <b>Sage Terrace</b> (Salviaterrassen) - spices: <b>Spice Way </b>(Kryddvägen), <b>Pepper Street </b>(Peppargatan), <b>Nutmeg Street </b>(Muskotgatan), <b>Cinnamon Street </b>(Kanelgatan) - and other aromatics: <b>Vanilla Street </b>(Vaniljgatan), <b>Mustard Street </b>(Senapsgatan) and <b>Ginger Street </b>(Ingefärsgatan). One street is even just called <b>Spice Rack </b>(Kryddhyllan) ",
            location: {
                center: [12.03926, 57.80342],
                zoom: 14.68,
                pitch: 45.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'food_cluster_diary',
            alignment: 'right',
            hidden: false,
            title: 'Milk products',
            image: '',
            description: "Another food cluster can be found around the area that housed an old, and now derelict, dairy factory. <b>Skimmed milk Alley </b>(skummjölksgränd), <b>Cheese Street </b>(Ostgatan), <b>Butter Hill </b>(Smörbacken) and <b>Cream Street </b>(Gräddgatan) can be found here. The old dairy factory had a huge 7000 square meter reloading and storage facility built into Gothenburg's granite rock face. Another landmark of the area is a 14 storey tall student dorm, called the cheese box (Ostkupan). ",
            location: {
                center: [12.01131, 57.68274],
                zoom: 15.52,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'food_cluster_fruits',
            alignment: 'right',
            hidden: false,
            title: 'Fruits',
            image: '',
            description: "And let's not forget about fruits! There's a whole fruit basket, including <b>Peach Street</b> (Persikogatan), <b>Blueberry Road </b>(Blåbärsvägen) and <b>Melon Street </b>(Melongatan) and all kinds of berries that can be found in the Swedish forests.",
            location: {
                center: [11.88088, 57.64972],
                zoom: 15.48,
                pitch: 45.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'gems_cluster',
            alignment: 'right',
            hidden: false,
            title: 'Bling bling',
            image: '',
            description: "Next to the fruits, we have the treasure cluster. Here we find gems such as<b> Ruby Street </b>(Rubingatan), <b>Emerald Street </b>(Smaragdgatan) and <b>Opal Square </b>(Opaltorget), semi-precious stones such as <b>Mountain crystal Park </b>(Bergkristallparken) and <b>Peridot Road </b>(Krysolitvägen), even some archeological finds like <b>Bronze axe Street </b>(Bronsyxegatan), and finally a little money cluster with for example <b>Silver coin Street </b>(Silvermyntsgatan), <b>Dollar Street </b>(Dollargatan) and <b>Rubel Street</b> (Rubelgatan).",
            location: {
                center: [11.89705, 57.64402],
                zoom: 14.26,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'calendar_cluster',
            alignment: 'right',
            hidden: false,
            title: 'Times of the year',
            image: '',
            description: "One of my favourite clusters is the calendar cluster. Here we find all the months - <b>January Street </b>(Januarigatan) to <b>December Street </b>(Decembergatan), different times of day like <b>Morning Street </b>(Morgongatan) and <b>Evening Street </b>(Aftongatan), various holidays - <b>Easter Road </b>(Påskvägen), <b>Christmas Eve Street</b> (Julaftonsgatan), <b>Midsummer Street</b> (Midsommargatan), <b>New Year's Road </b>(Nyårsvägen), as well as names like <b>Millennium Street </b>(Millenniumgatan), <b>Equinox Street </b>(Dagjämningsgatan), <b>Half Century street </b>(Halvsekelsgatan) and <b>Full moon Street </b>(Fullmånegatan). <p>The Julian and the Gregorian calendar are honoured - <b>Julianska gatan </b>and <b>Gregorianska gatan</b>; there are week, hour, minute and second street (<b>Veckogatan, Timgatan, Minutgatan, Sekundgatan</b>), and also seasonal street names - like <b>Spring Path </b>(Vårstigen) or <b>'Indian summer' Street </b>(Brittsommargatan; meaning the time in autumn when the weather is still very summer-like). <p><b>Winter Street</b> (Vintergatan), however, is located in a different place, closer to the town center. Fun fact: Vintergatan not only means winter street, but is also what the milky way is called in Swedish. ",
            location: {
                center: [12.04240, 57.75032],
                zoom: 14.40,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'space_cluster_small',
            alignment: 'right',
            hidden: false,
            title: 'Small space cluster',
            image: '',
            description: "This <b>Winter Street</b>/<b>Milky Way Street </b>is fittingly located right next to (or part of) a small space cluster that encompasses for example <b>North star Street </b>(Polstjärnegatan), <b>Pollux Street </b>(Polluxgatan) - named after the giant star in the constellation Gemini; <b>Planet Street </b>(Planetgatan) and <b>Pleiades Street </b>(Plejadgatan) - a group of very bright stars that are part of the constellation Taurus. Finally, there's also <b>Big Dipper Street </b>(Karlavagnsgatan), named after the seven bright stars that are part of the larger Ursa Major constellation. ",
            location: {
                center: [11.93480, 57.70801],
                zoom: 15.83,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'space_cluster_large',
            alignment: 'right',
            hidden: false,
            title: 'Large space cluster',
            image: '',
            description: "If you are looking for <b>Ursa Major </b>(Stora Björn; big bear) and Ursa Minor street (Lilla Björn; small bear), we have to go back to the calendar cluster. Right next to that is a second, larger space-themed cluster that not only houses the bears, but also Bootes street (Björnväktarens gata; direct translation: bear watcher street), another constellation in the Northern sky. Here we also find for example light year road (Ljusårsvägen), nebula street (Nebulosagatan), rocket street (Raketgatan), space square (Rymdtorget), telescope street (Teleskopgatan), star sign hill (Stjärnbildsbacken), as well as other celestial bodies, from saturn street (Saturnusgatan) to pluto way (Plutovägen). ",
            location: {
                center: [12.05908, 57.75339],
                zoom: 14.40,
                pitch: 45.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'weather_cluster',
            alignment: 'right',
            hidden: false,
            title: 'Thunder & Lightning',
            image: '',
            description: "Finally, the last cluster I present here is all about the weather. In a North-Eastern suburb of Gothenburg, you find the long Summer weather street (Sommarvädersgatan), from which many other related streets branch off: Stormy weather street (Stormvädersgatan), Thunderstorm street (Åskvädersgatan), Spring wind street (Vårvindsgatan), etc. \nSome seem a bit contrived, like Bathing weather streets (Badvädersgatan), Flight weather street (Flygvädersgatan), Foggy weather street (Dimvädersgatan), and Severe weather street (Ovädersgatan). \nAnd others are very practical, like Thermometer street (Termometergatan), Temperature street (Temperaturgatan), and Barometer street (Barometergatan). From Climate street (Klimatgatan), High pressure street (Högtrycksgatan) and Low pressure street (Lågtrycksgatan) branch off.",
            location: {
                center: [11.89899, 57.71651],
                zoom: 13.91,
                pitch: 45.00,
                bearing: 0.00


            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'GBG_zoomed_in',
            alignment: 'right',
            hidden: false,
            title: 'More clusters',
            image: '',
            description: "There are many more clusters that I identified, one with the names of many local birds, and another with industrial equipment. There are several flora-themed clusters, which again can be split into trees and flowers. There is a surprising number of streets named after colours. And as in other cities, many streets are named after (old) professions, like saddle maker, or chimney sweep. \n My hypothesis for the occurrence of so many more streets named after 'things' rather than people, is that Gothenburg's city planners had the foresight to avoid problems associated with tying a place to a person. When someone's problematic past is discovered, it's not so easy to rename the whole street or square (if you're interested in this topic, I can recommend 'The Address Book' by Deirdre Mask). \nAnd to be honest, rather than living on a street named after some 19th century politician, it's also much more fun to live on Sunshine street or 1000-year street.",
            location: {
                center: [11.94893, 57.70678],
                zoom: 11.36,
                pitch: 45.00,
                bearing: 0.00


            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }







    ]
};
