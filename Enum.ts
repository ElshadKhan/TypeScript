// Enum Type
enum Directions {
    Up = 7,
    Down,
    Left = 11,
    Right,
}

// Reverse enum

Directions[7]     // "Up"
Directions[8]     // "Down"
Directions.Right  // 12
Directions.Left   // 11

// Compiled code
"use strict";
var Directionss;
( function (Directionss) {
    Directionss[Directionss["Up"] = 0] = "Up";
    Directionss[Directionss["Down"] = 1] = "Down";
    Directionss[Directionss["Left"] = 2] = "Left";
    Directionss[Directionss["Right"] = 3] = "Right";
})(Directionss || (Directionss = {}));

// Custom name for keys
enum links {
    youtube = 'https//youtube.com/',
    vk = 'https//vk.com/',
    facebook = 'https//facebook.com/'
}

// Using
links.vk       // 'https//vk.com/'
links.youtube  // 'https//youtube.com/'

// const enum (with using)
const enum linkss {
    youtube = 'https//youtube.com/',
    vk = 'https//vk.com/',
    facebook = 'https//facebook.com/'
}

// Using of enum properties
const arr = [linkss.vk, linkss.facebook];

// Compiled code
"use strict";
const arrr = ['https//vk.com/', 'https//facebook.com/']