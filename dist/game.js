


let player, door;
let playerX, playerY, nPlayerTileX, nPlayerTileY, nPTJX, nPTJY;
let exitDoorX, exitDoorY, entryDoorX, entryDoorY;
let playerSprites, doorSprites;
let playerSpriteIndex_ = 0, exitDoorSpriteIndex_ = 0, entryDoorSpriteIndex_ = 11;
let facingDirection = -1;

let levelNr = 1;
let drawGridSize = 32;
let mapRow, mapCol;
let gridShow = false;
let mapTilesArray;
let mapTilesArrayList = [];
let Tilesize, mapTileSize;
let InventoryTileSet;
let mapSizeX = 30, mapSizeY = 20;
let checkTileNr, checkTileNr2, checkTileNrB;

const ACTION_MOVE = 0;
const ACTION_JUMP = 1;
const ACTION_FALLING = 2;
let performingAction = false, doorAnimation = false;
let currentAction = 0;
let ticksInAction = 0, ticksInAnimation = 0;;

var codeArray = [];
let modal;
let divElement;
let imgPath = [];
var myDiv;

function preload() {
    tileset = loadImage("data/pictures/tileSet.png");
    player = loadImage("data/pictures/gediminas.png");
    door = loadImage("data/pictures/Door.png");
    doorSprites = new Array(12);
    playerSprites = new Array(3);
    for (let i = 0; i < playerSprites.length; i++)playerSprites[i] = new Array(4);
    loadMaps();
    loadHelp();
    const helpBtn = document.getElementById('pagalba')
    if (helpBtn) {
        helpBtn.addEventListener('click', runHelp);
    }
    const gridBtn = document.getElementById('grid')
    if (gridBtn) {
        gridBtn.addEventListener('click', gridShowSet);
    }
}
function setup() {
    loadLevel(levelNr);
    let canvasid = createCanvas(960, 640);
    canvasid.parent("game");
    mapRow = 20;
    mapCol = 30;
    mapTileSize = createVector(32, 32);
    Tilesize = createVector(32, 32);
    TileSet_row = tileset.height / Tilesize.y;
    TileSet_col = tileset.width / Tilesize.x;
    InventoryTileSet = TileImageToImageArray(tileset, Tilesize);

    for (let i = 0; i < 3; i++) {
        playerSprites[i][-1] = player.get(i * (player.width / 3), (player.height / 4) * 2, player.width / 3, player.height / 4);
        playerSprites[i][0] = player.get(i * (player.width / 3), (player.height / 4) * 0, player.width / 3, player.height / 4);
        playerSprites[i][1] = player.get(i * (player.width / 3), (player.height / 4) * 1, player.width / 3, player.height / 4);
        playerSprites[i][2] = player.get(i * (player.width / 3), (player.height / 4) * 0, player.width / 3, player.height / 4);
        playerSprites[i][3] = player.get(i * (player.width / 3), (player.height / 4) * 3, player.width / 3, player.height / 4);
    }
    for (let i = 0; i < doorSprites.length; i++) {
        doorSprites[i] = door.get(i * (door.width / doorSprites.length), 0, (door.width / doorSprites.length), door.height);
    }
    performAction_(ACTION_FALLING);
    runHelp();
}

function draw() {
    frameRate = 500;
    ActionTick();
    drawMap();
    drawDoor();
    drawPlayer();
    if (gridShow) renderBoard();
}


function loadMaps() {
    fetchMap(1, "data/maps/map1.json");
    fetchMap(2, "data/maps/map2.json");
    fetchMap(3, "data/maps/map3.json");
    fetchMap(4, "data/maps/map4.json");
    fetchMap(5, "data/maps/map5.json");
    fetchMap(6, "data/maps/map6.json");
    fetchMap(7, "data/maps/map7.json");
    fetchMap(8, "data/maps/map8.json");
    fetchMap(9, "data/maps/map9.json");
    fetchMap(10, "data/maps/map10.json");
}

function loadLevel(levelNr) {

    switch (levelNr) {
        case 1:
            mapTilesArray = [...mapTilesArrayList[1]];
            playerStartPosition(10, 18);
            doorPosition(10, 17, 19, 17);
            facingDirection = -1;
            keyNumber = 2;
            codeArray = [];
            break;
        case 2:
            mapTilesArray = [...mapTilesArrayList[2]];
            playerStartPosition(2, 18);
            doorPosition(2, 17, 27, 17);
            facingDirection = -1;
            keyNumber = 4;
            codeArray = [];
            break;
        case 3:
            mapTilesArray = [...mapTilesArrayList[3]];
            playerStartPosition(3, 18);
            doorPosition(3, 17, 22, 17);
            facingDirection = -1;
            keyNumber = 6;
            codeArray = [];
            break;
        case 4:
            mapTilesArray = [...mapTilesArrayList[4]];
            playerStartPosition(2, 18);
            doorPosition(2, 17, 28, 9);
            facingDirection = -1;
            keyNumber = 4;
            codeArray = [];
            break;
        case 5:
            mapTilesArray = [...mapTilesArrayList[5]];
            playerStartPosition(2, 10);
            doorPosition(2, 9, 27, 9);
            facingDirection = -1;
            keyNumber = 10;
            codeArray = [];
            break;
        case 6:
            mapTilesArray = [...mapTilesArrayList[6]];
            playerStartPosition(1, 10);
            doorPosition(1, 9, 27, 17);
            facingDirection = -1;
            keyNumber = 4;
            codeArray = [];
            break;
        case 7:
            mapTilesArray = [...mapTilesArrayList[7]];
            playerStartPosition(1, 18);
            doorPosition(1, 17, 27, 7);
            facingDirection = -1;
            keyNumber = 4;
            codeArray = [];
            break;
        case 8:
            mapTilesArray = [...mapTilesArrayList[8]];
            playerStartPosition(1, 8);
            doorPosition(1, 7, 27, 17);
            facingDirection = -1;
            keyNumber = 5;
            codeArray = [];
            break;
        case 9:
            mapTilesArray = [...mapTilesArrayList[9]];
            playerStartPosition(1, 18);
            doorPosition(1, 17, 27, 17);
            facingDirection = -1;
            keyNumber = 5;
            codeArray = [];
            break;
        case 10:
            mapTilesArray = [...mapTilesArrayList[10]];
            playerStartPosition(1, 18);
            doorPosition(1, 17, 26, 17);
            facingDirection = -1;
            keyNumber = 4;
            codeArray = [];
            break;

        default:
        // code block
    }

}

function fetchMap(i, nameOfTheLocation) {
    fetch(nameOfTheLocation)
        .then(response => response.json())
        .then(data => {
            mapTilesArrayList[i] = [...data];
        })
        .catch(error => console.error(error));
}
function loadHelp() {
    modal = document.getElementById("myModal");
    divElement = document.getElementById('helpIMG');
    myDiv = document.getElementById("helpText");
    imgPath = [];
    imgPath[1] = 'url("data/helpImages/1.png")';
    imgPath[2] = 'url("data/helpImages/2.png")';
    imgPath[3] = 'url("data/helpImages/3.png")';
    imgPath[4] = 'url("data/helpImages/4.png")';
    imgPath[5] = 'url("data/helpImages/5.png")';
    imgPath[6] = 'url("data/helpImages/6.png")';
    imgPath[7] = 'url("data/helpImages/7.png")';
    imgPath[8] = 'url("data/helpImages/8.png")';
    imgPath[9] = 'url("data/helpImages/9.png")';
    imgPath[10] = 'url("data/helpImages/10.png")';

}

function runHelp() {
    switch (levelNr) {
        case 1:
            myDiv.innerHTML = "Sveiki atvykę!<br>Jūsų užduotis yra surinkti visus raktus ir pereiti iki atsidariusių durų.<br>Pirmame lygyje pamėginsime panaudoti paprastą komandą \"eik\". Pamėgink parašyti žodį \"eik\" ir paspausti \"Vykdyti\" mygtuką kaip pavaizduota paveikslėlyje. Norint pajudinti veikėją daugiau kartų, žodį gali parašyti daugiau kartų.";
            divElement.style.backgroundImage = imgPath[1];
            break;
        case 2:
            myDiv.innerHTML = "Antrajame lygyje pamėginsime panaudoti ciklą \"kartok\". Pamėgink parašyti komandą \"kartok eik 3 kartus\" ir paspausti \"Vykdyti\" mygtuką kaip pavaizduota paveikslėlyje. Skaičių kiek kartų kartoti komandą gali keisti.";
            divElement.style.backgroundImage = imgPath[2];
            break;
        case 3:
            myDiv.innerHTML = "Šiame lygyje išbandysime naują komandą, kuri mūsų veikėją pasuka į pasirinktą pusę. Dabar mūsų veikėjas žiūri į priekį įvygžius komandą kairėn jis pasisuką į kairę pusę nuo tos į kuria žiūrėjo tai yra jeigu žiūrėjo į dešinę ekrano pusę pasisukęs į kairę žiūrės į ekrano viršų.<br> Pasisukimo komandos: \"kairen\" ir \"desinen\"";
            divElement.style.backgroundImage = imgPath[3];
            break;
        case 4:
            myDiv.innerHTML = "Ketvirtame lygyje susipažinsime su kopėčiomis, norint jomis lipti į viršų reikia atsistoti ant kopečių pasižiūrėti į viršų ir veikėjuj liepti eiti pirmyn.<br> Taip pat gali naudoti \"#\" mygtuką norėdamas pamatyti tinklelį dėl lengvesnio langelių skaičiavimo.";
            divElement.style.backgroundImage = imgPath[4];
            break;
        case 5:
            myDiv.innerHTML = "Šiame lygyje panaudoti jau žinomus veiksmus lipimą kopėčiomis ir ciklus. Patarimas nuo kopėčių visada gali nušokti kaip parodyta paveikslėlyje.";
            divElement.style.backgroundImage = imgPath[5];
            break;
        case 6:
            myDiv.innerHTML = "Šiame lygyje susipažinsime su komanda \"sok\" kurią panaudoją galime pajudėti ta kryptimi į kurią žiurime du blokelius.";
            divElement.style.backgroundImage = imgPath[6];
            break;
        case 7:
            myDiv.innerHTML = "Šiame lygyje patarsiu kaip užlipti kopečiomis panaudojus ciklą cikle tai yra vietoj komandos eik ciklo viduje pamėginsime į jį įdėti visą ciklą.<br> Kaip užilti į viršų gali matyti paveikslėlyje (nepamiršk vieno rakto apačioje).";
            divElement.style.backgroundImage = imgPath[7];
            break;
        case 8:
            myDiv.innerHTML = "Šiame lygyje susipažinsime su kintamaisiais ir kaip juos panaudoti. Kintamajam tai yra išsaugoti kažkokį skaičių galime suteikia jam pavadinimą kaip matote paveiklėlyje skaičius 7 gavo pavadinimą \"kiekis1\" ir šį skaičių galime pasiekti panaudoję jo pavadinimą.";
            divElement.style.backgroundImage = imgPath[8];
            break;
        case 9:
            myDiv.innerHTML = "Šiame lygyje pamėginsime ciklo metu vis padidinti kintamojo reikšmę, kad mūsų veikėjas užliptų kopečiomis vis aukščiau.";
            divElement.style.backgroundImage = imgPath[9];
            break;
        case 10:
            myDiv.innerHTML = "Sėkmės!";
            divElement.style.backgroundImage = imgPath[10];
            break;

        default:
    }

    modal.style.display = "block";
}
//-----------------------Create image tile array ---------------------------------
function TileImageToImageArray(arg_img, arg_TileSize) {
    let local_TilesIMG = new Array((arg_img.width / arg_TileSize.x) * (arg_img.height / arg_TileSize.y));
    for (let j = 0; j < arg_img.height / arg_TileSize.y; j++) {
        for (let i = 0; i < arg_img.width / arg_TileSize.x; i++) {
            local_TilesIMG[j * (arg_img.width / arg_TileSize.x) + i] = arg_img.get(i * arg_TileSize.x, j * arg_TileSize.y, arg_TileSize.x, arg_TileSize.y);
        }
    }
    return local_TilesIMG;
}

//-----------------------Turn grid on or off---------------------------------
function gridShowSet() {
    gridShow = !gridShow;

}
//-----------------------Draw functions ---------------------------------
function drawDoor() {
    image(doorSprites[exitDoorSpriteIndex_], exitDoorX, exitDoorY, 64, 64);
    image(doorSprites[entryDoorSpriteIndex_], entryDoorX, entryDoorY, 64, 64);
}

function drawPlayer() {
    // if (facingDirection == -1) {
    //     image(playerSprites[playerSpriteIndex_][2], playerX, playerY, mapTileSize.x, mapTileSize.y);
    // } else {
    image(playerSprites[playerSpriteIndex_][facingDirection], playerX, playerY, mapTileSize.x, mapTileSize.y);
    // }
}

function drawMap() {
    for (let y = 0; y < mapRow; y++) {
        for (let x = 0; x < mapCol; x++) {
            if (mapTilesArray[(x + (y * mapCol))] != 0) {
                image(InventoryTileSet[mapTilesArray[(x + (y * 30))] - 1], x * mapTileSize.x, y * mapTileSize.y, mapTileSize.x, mapTileSize.y);

            }
        }
    }
}
//-----------------------Movement ---------------------------------

function performAction_(argType) {
    if (facingDirection != 3) {
        if (facingDirection == 0) { //facing up
            checkTileNr = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) - mapCol];
            checkTileNr2 = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) - mapCol * 2];
            nPlayerTileY = (int(playerY - 32))
            nPlayerTileX = (int(playerX))
            nPTJY = nPlayerTileY - 32;
            nPTJX = nPlayerTileX;
        }
        else if (facingDirection == 1) { //facing left
            checkTileNr = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) - 1];
            checkTileNr2 = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) - 2];
            nPlayerTileX = (int(playerX - 32))
            nPlayerTileY = (int(playerY))
            nPTJX = nPlayerTileX - 32;
            nPTJY = nPlayerTileY;
        }
        else if (facingDirection == -1) { //facing rigth
            checkTileNr = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) + 1];
            checkTileNr2 = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) + 2];
            nPlayerTileX = (int(playerX + 32))
            nPlayerTileY = (int(playerY))
            nPTJX = nPlayerTileX + 32;
            nPTJY = nPlayerTileY;
        }
        else if (facingDirection == 2) { //facing down
            checkTileNr = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) + mapCol];
            checkTileNr2 = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) + mapCol * 2];
            nPlayerTileY = (int(playerY + 32))
            nPlayerTileX = (int(playerX))
            nPTJY = nPlayerTileY + 32;
            nPTJX = nPlayerTileX;
        }
        checkTileNrB = mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30)) + 30];

        if (argType == ACTION_MOVE && (int(nPlayerTileX / 32)) >= 0 && int(nPlayerTileX / 32) < mapCol && (int(nPlayerTileY / 32)) >= 0 && int(nPlayerTileY / 32) < mapRow) {//check map edges and action
            if (checkTileNr != 2 && !(checkTileNr >= 8 && checkTileNr <= 18) && !(checkTileNr >= 22 && checkTileNr <= 25)) {//check next tile
                performingAction = true;
                currentAction = argType;
                ticksInAction = 0;
            }
        } else if (argType == ACTION_JUMP && int(nPlayerTileX / 32) < mapCol && (int(nPlayerTileY / 32)) >= 0 && int(nPlayerTileY / 32) < mapRow) { //check next tile on map edges and action
            if (int(nPTJX / 32) < mapCol && (int(nPTJY / 32)) >= 0 && int(nPTJY / 32) < mapRow && (int(nPTJX / 32)) >= 0) { //check second tile on map edges and bottom
                if (checkTileNr2 != 2 && !(checkTileNr2 >= 8 && checkTileNr2 <= 18) && !(checkTileNr2 >= 22 && checkTileNr2 <= 25)) { //check second next tile
                    if (checkTileNr != 2 && !(checkTileNr >= 8 && checkTileNr <= 18) && !(checkTileNr >= 22 && checkTileNr <= 25) && (int(nPlayerTileX / 32)) >= 0) { //check next tile
                        performingAction = true;
                        currentAction = argType;
                        ticksInAction = 0;
                    }
                }
            }

        } else if (argType == ACTION_FALLING && checkTileNrB != 2 && !(checkTileNrB >= 8 && checkTileNrB <= 18) && !(checkTileNrB >= 22 && checkTileNrB <= 25) && !(checkTileNrB >= 63 && checkTileNrB <= 90) && int(playerY / 32) < mapRow - 1) {
            performingAction = true;
            currentAction = argType;
            ticksInAction = 0;
        }
    }
}
function ActionTick() {
    if (doorAnimation) {
        if (exitDoorSpriteIndex_ < doorSprites.length - 1) {
            if (ticksInAnimation % 5 == 0) {
                exitDoorSpriteIndex_ += 1;
            }
            ticksInAnimation += 1;
        }
    }

    if (performingAction) {
        if (currentAction == ACTION_FALLING) {
            playerY += 8;

            if (ticksInAction % 5 == 0) {
                playerSpriteIndex_ += 1;
                if (playerSpriteIndex_ == (playerSprites.length)) {
                    playerSpriteIndex_ = 0;
                }
            }

            if (ticksInAction < 4) {
                finishedMoving();
            }
            ticksInAction += 1;
        }


        if (currentAction == ACTION_MOVE) {
            playerMove();
            if (ticksInAction % 5 == 0) {
                playerSpriteIndex_ += 1;
                if (playerSpriteIndex_ == (playerSprites.length)) {
                    playerSpriteIndex_ = 0;
                }
            }

            if (ticksInAction == 31) {
                finishedMoving();
            }
            ticksInAction += 1;
        }
        else if (currentAction == ACTION_JUMP) {

            if (facingDirection != 4) {
                playerMove();
                if (ticksInAction < 32 && facingDirection != 0 && facingDirection != 3) {
                    playerY -= 1;
                } else if (facingDirection != 0 && facingDirection != 3) {
                    playerY += 1;
                }

                if (ticksInAction % 5 == 0) {
                    playerSpriteIndex_ += 1;
                    if (playerSpriteIndex_ == (playerSprites.length)) {
                        playerSpriteIndex_ = 0;
                    }
                }

                if (ticksInAction == 63) {
                    finishedMoving();
                }
                ticksInAction += 1;
            } else {
                playerMove();
                if (ticksInAction % 5 == 0) {
                    playerSpriteIndex_ += 1;
                    if (playerSpriteIndex_ == (playerSprites.length)) {
                        playerSpriteIndex_ = 0;
                    }
                }

                if (ticksInAction == 63) {
                    finishedMoving();
                }
                ticksInAction += 1;
            }
        }
    } else {
        // console.log("AAAAAAAAAA")
        // checkground();
        if (codeArray.length != 0) {
            if (codeArray[0] == "kairen") {
                left();
            }
            else if (codeArray[0] == "desinen") {
                right();
            }
            else if (codeArray[0] == "eik") {
                move();
            }
            else if (codeArray[0] == "sok" || codeArray[0] == "šok") {
                jump();
            }
            codeArray.shift();
        }
    }
}
function doorPosition(startX, startY, exitX, exitY) {
    exitDoorSpriteIndex_ = 0;
    doorAnimation = false;
    entryDoorX = startX * 32 - 16;
    entryDoorY = startY * 32;
    exitDoorX = exitX * 32 - 16;
    exitDoorY = exitY * 32;
}
function playerStartPosition(x, y) {
    playerX = 32 * x;
    playerY = 32 * y;
}
function playerMove() {
    if (facingDirection == 0) {
        playerY -= 1;
    }
    if (facingDirection == 1) {
        playerX -= 1;
    }
    if (facingDirection == -1) {
        playerX += 1;
    }
    if (facingDirection == 2) {
        playerY += 1;
    }
}

function left() {
    if (facingDirection < 2) {
        facingDirection++;
    } else facingDirection = -1;
    // console.log(facingDirection)

}
function right() {
    if (facingDirection > -1) {
        facingDirection--
    } else facingDirection = 2;
    // console.log(facingDirection)


}
function move() {
    performAction_(ACTION_MOVE);
}

function jump() {
    performAction_(ACTION_JUMP);
}
//-----------------------Check for collision---------------------------------
function checkForCollision() {
    if (mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30))] == 62) {
        mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30))] = 35;
        keyNumber--;
        if (keyNumber == 0) {
            doorAnimation = true;
        }
    } if (mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30))] == 61) {
        mapTilesArray[((int(playerX / 32)) + (int(playerY / 32) * 30))] = 27;
        keyNumber--;
        if (keyNumber == 0) {
            doorAnimation = true;
        }
    } else if (exitDoorSpriteIndex_ == entryDoorSpriteIndex_ && playerX == exitDoorX + 16 && playerY == (exitDoorY + 32)) {
        levelNr++;
        loadLevel(levelNr);
        runHelp();
    }
}
//-----------------------After every move check for key or door ---------------------------------
function finishedMoving() {
    performingAction = false;
    checkForCollision();
    performAction_(ACTION_FALLING);
}
//-----------------------Run commands ---------------------------------
function myFunction(code) {
    playerStartPosition();
    loadLevel(levelNr);
    codeArray = code;
    if (codeArray.length != 0) {
        if (codeArray[0] == "kairen") {
            left();
        }
        else if (codeArray[0] == "desinen") {
            right();
        }
        else if (codeArray[0] == "eik") {
            move();
        }
        else if (codeArray[0] == "sok" || codeArray[0] == "šok") {
            jump();
        }
        codeArray.shift();
    }
}

function moving(text) {
    codeArray.push(text);
}

//-----------------------Draw grid ---------------------------------
function renderBoard() {
    noFill();
    for (let x = 0; x < mapSizeX; x++) {
        for (let y = 0; y < mapSizeY; y++) {
            stroke(200);

            rect(x * (width / mapSizeX), y * (height / mapSizeY), width / mapSizeX, height / mapSizeY)
        }
    }
}


