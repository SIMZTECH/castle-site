
// HERE found all the games keys available on swarm site
import {
    flg_zambia,
    flg_argentina,
    flg_brazil,
    flg_egypt,
    flg_morroco,
    flg_netherlands,
    flg_norway,
    flg_portugal,
    flg_southAfrica,
    flg_spain,
    flg_uk,
    flg_usa,
    flg_world,
    flg_bolivia,
    flg_bahrain,
    flg_france,
    flg_greece,
    flg_hungary,
    flg_iceland,
    flg_ireland,
    flg_poland,
    flg_saudi_arabia,
    flg_russia,
    flg_ukrain,
    flg_uruguay,
    flg_venezuela,
    flg_turkish,
    flg_switzerland,
    flg_south_korea,
    flg_slovenia,
    flg_slovakia,
    flg_serbia,
    flg_romania,
    flg_peru,
    flg_mexico,
    flg_new_zealand,
    flg_lithuania,
    flg_latvia,
    flg_kuwait,
    flg_kazakhistan,
    flg_japan,
    flg_colombia,
    flg_croatia,
    flg_costa_rica,
    flg_denmark,
    flg_ecuador,
    flg_finland,
    flg_hondurus,
    flg_myanmar,
    flg_canada,
    flg_germany,
    flg_ethiopia,
    flg_mauritius,
    flg_luxembourg,
    flg_panama,
    flg_uae,
    flg_sweden,
    flg_paraguay,
    flg_czech_republic,
    flg_nigeria,
    flg_china,
    flg_australia,
    flg_italy,
    flg_gambia,
    flg_jamica,
    flg_armenia,
    flg_cyprus,
    flg_georgia,
} from "../flags/worldFlags";

/**
 * @type  {[
 *  {region_id:number,
 *  region_alias:string,
 *  flag:any,
 *  rank:number
 * }
 * ]} 
 */

export const regionKeyData=[
    {
        region_id:10001,
        region_alias:'World',
        flag:flg_world
    },
    {
        region_id:20001,
        region_alias:'Europe',
        flag:flg_world
    },
    {
        region_id:60001,
        region_alias:'South America',
        flag:flg_world
    },
    {
        region_id:180001,
        region_alias:'Argentina',
        flag:flg_argentina
    },
    {
        region_id:210001,
        region_alias:'Australia',
        flag:flg_australia
    
    },
    {
        region_id:390001,
        region_alias:'Brazil',
        flag:flg_brazil
    },
    {
        region_id:470001,
        region_alias:'Canada',
        flag:flg_canada
    },
    {
        region_id:560001,
        region_alias:'Colombia',
        flag:flg_colombia
    },
    {
        region_id:670001,
        region_alias:'Czech Republic',
        flag:flg_czech_republic
    },
    {
        region_id:680001,
        region_alias:'Denmark',
        flag:flg_denmark
    },
    {
        region_id:720001,
        region_alias:"Ecuador",
        flag:flg_ecuador
    },
    {
        region_id:780001,
        region_alias:"Ethiopia",
        flag:flg_ethiopia
        
    },
    {
        region_id:820001,
        region_alias:"Finland",
        flag:flg_finland
    },
    {
        region_id:880001,
        region_alias:"Gambia",
        flag:flg_gambia
    },
    {
        region_id:890001,
        region_alias:"Georgia",
        flag:flg_georgia
    },
    {
        region_id:900001,
        region_alias:"Germany",
        flag:flg_germany
    },
    {
        region_id:1070001,
        region_alias:"Hong Kong"
    },
    {
        region_id:1090001,
        region_alias:"Iceland",
        flag:flg_iceland
    },
    {
        region_id:1120001,
        region_alias:"Iran"
    },
    {
        region_id:1140001,
        region_alias:"Ireland",
        flag:flg_ireland
    },
    {
        region_id:1170001,
        region_alias:"Italy",
        flag:flg_italy
    },
    {
        region_id:1190001,
        region_alias:"Japan",
        flag:flg_japan
    },
    {
        region_id:1600001,
        region_alias:"Myanmar",
        flag:flg_myanmar
    },
    {
        region_id:1640001,
        region_alias:"Netherlands",
        flag:flg_netherlands
    },
    {
        region_id:1690001,
        region_alias:"Nigeria",
        flag:flg_nigeria
    },
    {
        region_id:1730001,
        region_alias:"Norway",
        flag:flg_norway
    },
    {
        region_id:1800001,
        region_alias:"Paraguay",
        flag:flg_paraguay
    },
    {
        region_id:1810001,
        region_alias:"Peru",
        flag:flg_peru
    },
    {
        region_id:1840001,
        region_alias:"Poland",
        flag:flg_poland
    },
    {
        region_id:1890001,
        region_alias:"Romania",
        flag:flg_romania
    },
    {
        region_id:1900001,
        region_alias:"Russia",
        flag:flg_russia
    },
    {
        region_id:2030001,
        region_alias:"Senegal"
    },
    {
        region_id:2130001,
        region_alias:"South Africa",
        flag:flg_southAfrica
    },
    {
        region_id:2150001,
        region_alias:"Spain",
        flag:flg_spain,
    },
    {
        region_id:2210001,
        region_alias:"Sweden",
        flag:flg_sweden
    },
    {
        region_id:2390001,
        region_alias:"Ukraine",
        flag:flg_ukrain
    },
    {
        region_id:2400001,
        region_alias:"UAE",
        flag:flg_uae
    },
    {
        region_id:2420001,
        region_alias:"USA",
        flag:flg_usa,
    },
    {
        region_id:2440001,
        region_alias:"Uruguay",
        flag:flg_uruguay
    },
    {
        region_id:1111111,
        region_alias:"Zambia",
        flag:flg_zambia
    },
    {
        region_id:16560001,//slr matches
        region_alias:"SRL Matches"
    },
];

/**
 * @type  {Array<
*  {compt_id:number,
*  compt_name:string,
*  logo:string,
*  rank:number}>
* } 
*/
export const topCompetitionKeyData=[
    {
        compt_id:3042,
        logo:flg_world,
        compt_name:"International Friendlies",
    },
    {
        compt_id:18277591,
        logo:flg_world,
        compt_name:"World Cup Asia Qualification"
    },
    {
        compt_id:18278252,
        logo:flg_world,
        compt_name:"World Cup Africa Qualification"
    },
    {
        compt_id:1855,
        logo:flg_world,
        compt_name:"UEFA Euro 2024"
    },
    {
        compt_id:2985,
        logo:flg_world,
        compt_name:"Copa Sudamericana"
    },
    {
        compt_id:2988,
        logo:flg_world,
        compt_name:"Copa Libertadores"
    },
    {
        compt_id:9275,
        logo:flg_world,
        compt_name:"Copa America"
    },

];

// :::::::::HIGHLIGHT GAMES::::::::::

/**
 * @type  {Array<
*  {
    *  compt_alias:string,
    *  highlight_id:number}>
    * } 
    */
export const highlightKeyData=[
    {
        highlight_id:1,
        compt_alias:"International Friendlies"
    },
    {
        highlight_id:2,
        compt_alias:"Copa America"
    },
    {
        highlight_id:3,
        compt_alias:"UEFA Euro 2024"
    },
]