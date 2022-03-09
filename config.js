var config = {
    style: 'mapbox://styles/silfaz/cl0crqri6000c14p3xtxnge8i',
    accessToken: 'pk.eyJ1Ijoic2lsZmF6IiwiYSI6ImNsMGZmM216ajBmbG8zam10ZzNwcXc0eWkifQ.xof_xk5gTVjvbDaO49quWA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
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
            description: 'Gothenburg (Swedish: Göteborg) lies on the West coast of Sweden close to Denmark and Norway. It's Sweden's largest city with half a million inhabitants and the largest port in Scandinavia. \n The larger Gothenburg area has 5967 named streets, paths, roads and squares.',
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
            title: 'Gothenburg's street clusters',
            image: '',
            description: 'In 2014, when I moved to Gothenburg from Austria, I noticed that many streets have really cute names. I was more used to streets being named after people, like politicians, poets and composers. This also exists in Gothenburg, but there was also a Tomatostreet, a Trumpetstreet, a Telescopestreet and a Tornadostreet. One friend lived on Springonionstreet, and another one Summerweatherstreet. I discovered that there are whole areas that are space-themed, and others that others that are bird-themed. Here is a collection of my favourite discoveries.',
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
            id: 'doctor_cluster',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            id: 'space_cluster',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
        },
        {
            id: 'weather_cluster',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Display Title',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
