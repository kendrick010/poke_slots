import lights from "@assets/sprites/lights";
import { Position } from "@customtypes/Position";
import { Size } from "@customtypes/Size";

type LightPackage = {
    shineSpriteUrl: string,
    position: Position,
    size: Size,
};

export const YELLOW_LIGHT_ARRAY: LightPackage[] = [
    { 
        shineSpriteUrl: lights.yellow_shine_1,
        position: { x: 8, y: 20 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_2,
        position: { x: 31, y: 26 }, 
        size: { 
            width: 9, 
            height: 8 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_3,
        position: { x: 96, y: 61 }, 
        size: { 
            width: 4, 
            height: 6 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_3, 
        position: { x: 156, y: 94 }, 
        size: { 
            width: 4, 
            height: 6 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_7, 
        position: { x: 216, y: 127 }, 
        size: { 
            width: 9, 
            height: 8 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_1, 
        position: { x: 226, y: 130 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_1, 
        position: { x: 8, y: 130 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_6, 
        position: { x: 31, y: 127 }, 
        size: { 
            width: 9, 
            height: 8 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_4, 
        position: { x: 96, y: 94 }, 
        size: { 
            width: 4, 
            height: 6 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_4,
        position: { x: 156, y: 61 }, 
        size: { 
            width: 4, 
            height: 6 
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_5,
        position: { x: 216, y: 26 }, 
        size: { 
            width: 9, 
            height: 8
        } 
    },
    { 
        shineSpriteUrl: lights.yellow_shine_1, 
        position: { x: 226, y: 20 }, 
        size: { 
            width: 22, 
            height: 11
        } 
    },
];
  
export const GREEN_LIGHT_ARRAY: LightPackage[] = [
    { 
        shineSpriteUrl: lights.green_shine_1, 
        position: { x: 8, y: 43 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_2, 
        position: { x: 32, y: 46 }, 
        size: { 
            width: 8, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_3, 
        position: { x: 96, y: 46 }, 
        size: { 
            width: 4, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_3, 
        position: { x: 156, y: 46 }, 
        size: { 
            width: 4, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_4, 
        position: { x: 216, y: 46 }, 
        size: { 
            width: 8, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_1, 
        position: { x: 226, y: 43 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_1, 
        position: { x: 8, y: 107 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_2, 
        position: { x: 32, y: 110 }, 
        size: { 
            width: 8, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_3, 
        position: { x: 96, y: 110 }, 
        size: { 
            width: 4, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_3, 
        position: { x: 156, y: 110 }, 
        size: { 
            width: 4, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_4, 
        position: { x: 216, y: 110 }, 
        size: { 
            width: 8, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.green_shine_1, 
        position: { x: 226, y: 107 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    }
];

export const BLUE_LIGHT_ARRAY: LightPackage[] = [
    { 
        shineSpriteUrl: lights.blue_shine_1, 
        position: { x: 8, y: 75 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    },
    { 
        shineSpriteUrl: lights.blue_shine_2, 
        position: { x: 32, y: 78 }, 
        size: { 
            width: 8, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.blue_shine_3, 
        position: { x: 96, y: 78 }, 
        size: { 
            width: 4, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.blue_shine_3, 
        position: { x: 156, y: 78 }, 
        size: { 
            width: 4, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.blue_shine_4, 
        position: { x: 216, y: 78 }, 
        size: { 
            width: 8, 
            height: 5 
        } 
    },
    { 
        shineSpriteUrl: lights.blue_shine_1, 
        position: { x: 226, y: 75 }, 
        size: { 
            width: 22, 
            height: 11 
        } 
    }
];