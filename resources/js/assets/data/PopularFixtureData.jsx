import {
    futsalLeague,
    germanyLeague,
    italyLeague,
    austriaLeague,
    portugalLeague,
    netherlandLeague,
    laliga,
    ligue1,
    usaLeague,
    premierLeague,
    superSport,
    uefa,
    uefaConference,
    uefaEuropa,
    liveGames,
    boosts,
    football
} from "../icons";


export const popularFixureData=[
    {
        id:1,
        icon:liveGames,
        path:"live",
        type:"",
        title:"Live",
        available_games:50,
        competition:'all',
        region:'all' //europe
    },
    {
        id:2,
        icon:boosts,
        path:"boosts",
        type:"",
        title:"Boosts",
        available_games:120,
        competition:'all',
        region:'all' //europe
    },
    {
        id:3,
        icon:football,
        path:"today",
        type:"today",
        title:"Football",
        available_games:2000,
        competition:'all',
        region:'all' //europe
    },
    {
        id:4,
        icon:uefa,
        path:"uefa",
        type:"International Clubs",
        title:"Uefa Champions League",
        available_games:10,
        competition:566,
        region:20001 //europe
    },
    {
        id:5,
        icon:uefaEuropa,
        path:"uefa-conference-league",
        type:"International Clubs",
        title:"Uefa Europa League",
        available_games:10,
        competition:1861,
        region:20001 //europe
    },
    {
        id:6,
        icon:uefaConference,
        path:"uefa-europa-confernece-league",
        type:"International Clubs",
        title:"Uefa Europa Confernece League",
        available_games:12,
        competition:18278410,
        region:20001 //europe
    },
    {
        id:7,
        icon:premierLeague,
        path:"premier-league",
        type:"England",
        title:"Premier League",
        available_games:50,
        competition:538,
        region:20001 //england
    },
    {
        id:8,
        icon:laliga,
        path:"laliga",
        type:"Spain",
        title:"La Liga",
        available_games:58,
        competition:545,
        region:2150001 //spain
    },
    {
        id:9,
        icon:germanyLeague,
        path:"bundasLega",
        type:"Germany",
        title:"BundasLega",
        available_games:26,
        competition:541,
        region:900001 //germany
    },
    {
        id:10,
        icon:italyLeague,
        path:"searie-a",
        type:"Italy",
        title:"Searie A",
        available_games:20,
        competition:543,
        region:1170001 //italy
    },
    {
        id:11,
        icon:ligue1,
        path:"league-1",
        type:"France",
        title:"League 1",
        available_games:10,
        competition:548,
        region:830001 //france
    },
    {
        id:12,
        icon:portugalLeague,
        path:"segunda",
        type:"portugal",
        title:"Segunda",
        available_games:5,
        competition:560,
        region:1850001 //portugal
    },
    {
        id:13,
        icon:netherlandLeague,
        path:"erecsin",
        type:"Netherlands",
        title:"Erecsin",
        available_games:8,
        competition:1957,
        region:1640001//netherland
    },
    {
        id:14,
        icon:austriaLeague,
        path:"bundasleg",
        type:"Austria",
        title:"Bundaslega",
        available_games:50,
        competition:556,
        region:220001//austria
    },
    {
        id:15,
        icon:usaLeague,
        path:"msl",
        type:"USA",
        title:"MSL",
        available_games:10,
        competition:3025,
        region:2420001//austria
    },
    {
        id:16,
        icon:superSport,
        path:"superSport-league",
        type:"Supersport",
        title:"SuperSport League",
        available_games:18,
        competition:1,
    },
    {
        id:17,
        icon:futsalLeague,
        path:"uefa-futsal-league",
        type:"futsal",
        title:"Uefa Futsal League",
        available_games:2,
        competition:1,
    }
];


