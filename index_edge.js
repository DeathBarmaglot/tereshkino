/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bread2',
                type: 'image',
                rect: ['320', '-11','300px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bread2.jpg",'0px','0px']
            },
            {
                id: 'Image4',
                type: 'image',
                rect: ['0px', '-4px','500px','333px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"%D0%BA%D1%80%D1%83%D0%B0%D1%81%D0%B0%D0%BD%D0%B8.jpg",'0px','0px']
            },
            {
                id: 'LOGO2',
                type: 'image',
                rect: ['23px', '2px','254px','178px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LOGO.png",'0px','0px']
            },
            {
                id: 'sugar2',
                type: 'image',
                rect: ['-286px', '-2px','254px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sugar.png",'0px','0px']
            },
            {
                id: 'pos',
                type: 'image',
                rect: ['-576px', '-138px','1310px','560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pos.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'fly2',
                type: 'image',
                rect: ['320px', '-3px','300px','195px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fly.png",'0px','0px']
            },
            {
                id: 'cheez2',
                type: 'image',
                rect: ['-290px', '-7px','258px','201px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cheez.png",'0px','0px'],
                transform: [[],['-10'],[],['0.8','0.8']]
            },
            {
                id: 'cake2',
                type: 'image',
                rect: ['328px', '18px','274px','166px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cake.png",'0px','0px']
            },
            {
                id: 'cook2',
                type: 'image',
                rect: ['404px', '-35px','300px','295px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cook.png",'0px','0px']
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['164px', '-10px','161px','57px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,0.70)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'Image3',
                type: 'image',
                rect: ['-249px', '-5px','161px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"%D0%BB%D0%BE%D0%B3%D0%BE.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'd',
                type: 'image',
                rect: ['-282px', '-64px','1060px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d.svg",'0px','0px'],
                transform: [[],[],[],['0.06','0.06']]
            },
            {
                id: 'bre',
                type: 'image',
                rect: ['-761px', '-122px','1720px','550px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bre.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'sw',
                type: 'image',
                rect: ['-741px', '-247px','1680px','580px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sw.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'ku',
                type: 'image',
                rect: ['-522px', '24px','1170px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ku.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bread2}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '320px']
            ],
            "${_cake2}": [
                ["style", "top", '18px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '166px'],
                ["style", "opacity", '0'],
                ["style", "left", '328px'],
                ["style", "width", '274px']
            ],
            "${_ku}": [
                ["style", "top", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '-522px']
            ],
            "${_sugar2}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '-1'],
                ["style", "height", '179px'],
                ["style", "opacity", '0'],
                ["style", "left", '-286px'],
                ["style", "width", '254px']
            ],
            "${_fly2}": [
                ["style", "top", '-3px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '320px']
            ],
            "${_sw}": [
                ["style", "top", '-247px'],
                ["style", "opacity", '0'],
                ["style", "left", '-741px']
            ],
            "${_pos}": [
                ["style", "top", '-138px'],
                ["style", "opacity", '0'],
                ["style", "left", '-576px']
            ],
            "${_RoundRect}": [
                ["style", "top", '-10px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "height", '57px'],
                ["style", "opacity", '0'],
                ["style", "left", '164px'],
                ["style", "width", '161px']
            ],
            "${_LOGO2}": [
                ["style", "top", '2px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '178px'],
                ["style", "opacity", '0'],
                ["style", "left", '23px'],
                ["style", "width", '254px']
            ],
            "${_cook2}": [
                ["style", "top", '-35px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '295px'],
                ["style", "opacity", '0'],
                ["style", "left", '404px'],
                ["style", "width", '300px']
            ],
            "${_bre}": [
                ["style", "top", '-122px'],
                ["style", "opacity", '0'],
                ["style", "left", '-761px']
            ],
            "${_cheez2}": [
                ["style", "top", '-7px'],
                ["transform", "scaleX", '0.8'],
                ["transform", "scaleY", '0.8'],
                ["transform", "rotateZ", '-10deg'],
                ["style", "height", '201px'],
                ["style", "opacity", '0'],
                ["style", "left", '-290px'],
                ["style", "width", '258px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_Image4}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_d}": [
                ["style", "top", '-64px'],
                ["transform", "scaleY", '0.06'],
                ["transform", "scaleX", '0.06'],
                ["style", "opacity", '0'],
                ["style", "left", '-282px']
            ],
            "${_Image3}": [
                ["style", "top", '-5px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "height", '34px'],
                ["style", "opacity", '0'],
                ["style", "left", '-249px'],
                ["style", "width", '161px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21316,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "style", "${_cake2}", "left", '25px', { fromValue: '328px'}], position: 4718, duration: 360, easing: "easeInOutCubic" },
                { id: "eid9", tween: [ "style", "${_Image4}", "top", '-153px', { fromValue: '0px'}], position: 16895, duration: 4421 },
                { id: "eid125", tween: [ "style", "${_ku}", "opacity", '1', { fromValue: '0'}], position: 17046, duration: 250, easing: "easeInOutCubic" },
                { id: "eid126", tween: [ "style", "${_ku}", "opacity", '0', { fromValue: '1'}], position: 21038, duration: 250, easing: "easeInOutCubic" },
                { id: "eid14", tween: [ "style", "${_cake2}", "opacity", '1', { fromValue: '0'}], position: 5016, duration: 120, easing: "easeInOutCubic" },
                { id: "eid72", tween: [ "style", "${_cake2}", "opacity", '0', { fromValue: '1'}], position: 7652, duration: 127, easing: "easeInOutCubic" },
                { id: "eid29", tween: [ "transform", "${_cheez2}", "scaleX", '0', { fromValue: '0.8'}], position: 14000, duration: 462, easing: "easeInOutCubic" },
                { id: "eid83", tween: [ "style", "${_bread2}", "left", '0px', { fromValue: '320px'}], position: 1653, duration: 500, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${_fly2}", "left", '0px', { fromValue: '320px'}], position: 16945, duration: 500, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${_Image4}", "opacity", '1', { fromValue: '0'}], position: 16853, duration: 193 },
                { id: "eid95", tween: [ "style", "${_Image4}", "opacity", '0', { fromValue: '1'}], position: 21038, duration: 278 },
                { id: "eid66", tween: [ "transform", "${_cook2}", "scaleY", '0', { fromValue: '1'}], position: 11000, duration: 627, easing: "easeInOutCubic" },
                { id: "eid109", tween: [ "style", "${_sw}", "opacity", '1', { fromValue: '0'}], position: 5078, duration: 250, easing: "easeInOutCubic" },
                { id: "eid111", tween: [ "style", "${_sw}", "opacity", '0', { fromValue: '1'}], position: 7412, duration: 250, easing: "easeInOutCubic" },
                { id: "eid116", tween: [ "style", "${_sw}", "opacity", '1', { fromValue: '0'}], position: 8473, duration: 250, easing: "easeInOutCubic" },
                { id: "eid117", tween: [ "style", "${_sw}", "opacity", '0', { fromValue: '1'}], position: 10853, duration: 250, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${_fly2}", "opacity", '1', { fromValue: '0'}], position: 17195, duration: 250, easing: "easeInOutCubic" },
                { id: "eid103", tween: [ "style", "${_fly2}", "opacity", '0', { fromValue: '1'}], position: 20039, duration: 1211, easing: "easeInOutCubic" },
                { id: "eid24", tween: [ "style", "${_cheez2}", "left", '73px', { fromValue: '-290px'}], position: 11137, duration: 490, easing: "easeInOutCubic" },
                { id: "eid62", tween: [ "style", "${_cook2}", "left", '0px', { fromValue: '404px'}], position: 8297, duration: 303, easing: "easeInOutCubic" },
                { id: "eid22", tween: [ "transform", "${_cake2}", "scaleX", '0', { fromValue: '1'}], position: 7555, duration: 445, easing: "easeInOutCubic" },
                { id: "eid43", tween: [ "transform", "${_fly2}", "scaleY", '0', { fromValue: '1'}], position: 8100, duration: 250, easing: "easeInOutCubic" },
                { id: "eid17", tween: [ "style", "${_Image3}", "opacity", '1', { fromValue: '0'}], position: 1968, duration: 250, easing: "easeInOutCubic" },
                { id: "eid26", tween: [ "style", "${_Image3}", "opacity", '0', { fromValue: '1'}], position: 7412, duration: 296, easing: "easeInOutCubic" },
                { id: "eid68", tween: [ "style", "${_Image3}", "opacity", '1', { fromValue: '0'}], position: 8522, duration: 200, easing: "easeInOutCubic" },
                { id: "eid96", tween: [ "style", "${_Image3}", "opacity", '0', { fromValue: '1'}], position: 10853, duration: 296, easing: "easeInOutCubic" },
                { id: "eid97", tween: [ "style", "${_Image3}", "opacity", '1', { fromValue: '0'}], position: 11484, duration: 200, easing: "easeInOutCubic" },
                { id: "eid98", tween: [ "style", "${_Image3}", "opacity", '0', { fromValue: '1'}], position: 16250, duration: 296, easing: "easeInOutCubic" },
                { id: "eid99", tween: [ "style", "${_Image3}", "opacity", '1', { fromValue: '0'}], position: 16881, duration: 200, easing: "easeInOutCubic" },
                { id: "eid100", tween: [ "style", "${_Image3}", "opacity", '0', { fromValue: '1'}], position: 20039, duration: 1211, easing: "easeInOutCubic" },
                { id: "eid28", tween: [ "style", "${_cheez2}", "opacity", '1', { fromValue: '0'}], position: 11392, duration: 190, easing: "easeInOutCubic" },
                { id: "eid74", tween: [ "style", "${_cheez2}", "opacity", '0', { fromValue: '1'}], position: 14070, duration: 250, easing: "easeInOutCubic" },
                { id: "eid2", tween: [ "style", "${_LOGO2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid134", tween: [ "style", "${_LOGO2}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 153, easing: "easeInOutCubic" },
                { id: "eid101", tween: [ "style", "${_LOGO2}", "opacity", '0', { fromValue: '1'}], position: 20039, duration: 1211, easing: "easeInOutCubic" },
                { id: "eid5", tween: [ "transform", "${_LOGO2}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 594, easing: "easeInOutCubic" },
                { id: "eid42", tween: [ "transform", "${_fly2}", "scaleX", '0', { fromValue: '1'}], position: 8100, duration: 250, easing: "easeInOutCubic" },
                { id: "eid108", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid113", tween: [ "style", "${_d}", "opacity", '0', { fromValue: '1'}], position: 7412, duration: 250, easing: "easeInOutCubic" },
                { id: "eid114", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 8473, duration: 250, easing: "easeInOutCubic" },
                { id: "eid118", tween: [ "style", "${_d}", "opacity", '0', { fromValue: '1'}], position: 10853, duration: 250, easing: "easeInOutCubic" },
                { id: "eid120", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 11484, duration: 250, easing: "easeInOutCubic" },
                { id: "eid127", tween: [ "style", "${_d}", "opacity", '0', { fromValue: '1'}], position: 21038, duration: 250, easing: "easeInOutCubic" },
                { id: "eid94", tween: [ "transform", "${_bread2}", "scaleY", '0', { fromValue: '1'}], position: 4635, duration: 370, easing: "easeInOutCubic" },
                { id: "eid129", tween: [ "style", "${_bre}", "opacity", '1', { fromValue: '0'}], position: 1968, duration: 250, easing: "easeInOutCubic" },
                { id: "eid130", tween: [ "style", "${_bre}", "opacity", '0', { fromValue: '1'}], position: 4635, duration: 250, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${_Image3}", "left", '160px', { fromValue: '-249px'}], position: 1620, duration: 435, easing: "easeInOutCubic" },
                { id: "eid34", tween: [ "style", "${_sugar2}", "left", '69px', { fromValue: '-286px'}], position: 14000, duration: 462, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 1903, duration: 250, easing: "easeInOutCubic" },
                { id: "eid71", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 7627, duration: 250, easing: "easeInOutCubic" },
                { id: "eid75", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 8473, duration: 250, easing: "easeInOutCubic" },
                { id: "eid104", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 20039, duration: 1211, easing: "easeInOutCubic" },
                { id: "eid6", tween: [ "transform", "${_LOGO2}", "scaleY", '0', { fromValue: '1'}], position: 1500, duration: 594, easing: "easeInOutCubic" },
                { id: "eid49", tween: [ "transform", "${_sugar2}", "scaleY", '0', { fromValue: '1'}], position: 16695, duration: 190, easing: "easeInOutCubic" },
                { id: "eid86", tween: [ "style", "${_bread2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 670, easing: "easeInOutCubic" },
                { id: "eid88", tween: [ "style", "${_bread2}", "opacity", '0', { fromValue: '1'}], position: 4524, duration: 316, easing: "easeInOutCubic" },
                { id: "eid122", tween: [ "style", "${_pos}", "opacity", '1', { fromValue: '0'}], position: 11484, duration: 250, easing: "easeInOutCubic" },
                { id: "eid123", tween: [ "style", "${_pos}", "opacity", '0', { fromValue: '1'}], position: 16546, duration: 250, easing: "easeInOutCubic" },
                { id: "eid64", tween: [ "style", "${_cook2}", "opacity", '1', { fromValue: '0'}], position: 8522, duration: 128, easing: "easeInOutCubic" },
                { id: "eid78", tween: [ "style", "${_cook2}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 226, easing: "easeInOutCubic" },
                { id: "eid10", tween: [ "style", "${_Image4}", "left", '-200px', { fromValue: '0px'}], position: 16895, duration: 4421 },
                { id: "eid36", tween: [ "style", "${_sugar2}", "opacity", '1', { fromValue: '0'}], position: 14215, duration: 247, easing: "easeInOutCubic" },
                { id: "eid102", tween: [ "style", "${_sugar2}", "opacity", '0', { fromValue: '1'}], position: 20039, duration: 1211, easing: "easeInOutCubic" },
                { id: "eid7", tween: [ "transform", "${_LOGO2}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 1500, duration: 982, easing: "easeInOutCubic" },
                { id: "eid65", tween: [ "transform", "${_cook2}", "scaleX", '0', { fromValue: '1'}], position: 11000, duration: 627, easing: "easeInOutCubic" },
                { id: "eid93", tween: [ "transform", "${_bread2}", "scaleX", '0', { fromValue: '1'}], position: 4635, duration: 370, easing: "easeInOutCubic" },
                { id: "eid48", tween: [ "transform", "${_sugar2}", "scaleX", '0', { fromValue: '-1'}], position: 16695, duration: 190, easing: "easeInOutCubic" },
                { id: "eid23", tween: [ "transform", "${_cake2}", "scaleY", '0', { fromValue: '1'}], position: 7555, duration: 445, easing: "easeInOutCubic" },
                { id: "eid30", tween: [ "transform", "${_cheez2}", "scaleY", '0', { fromValue: '0.8'}], position: 14000, duration: 462, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-139096");
