var rover1 = {
  name: "Rover1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0 + "," + 0]
};

var rover2 = {
  name: "Rover2",
  direction: "N",
  x: 4,
  y: 4,
  travelLog: [4 + "," + 4]
};

var rover3 = {
  name: "Rover3",
  direction: "N",
  x: 6,
  y: 6,
  travelLog: [6 + "," + 6]
};

grid = [
  [null, null, "ob", "ob", null, null, null, null, null, "ob"],
  [null, null, "ob", null, null, "ob", "ob", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["ob", "ob", null, null, null, null, null, "ob", null, null],
  ["ob", null, null, null, null, "ob", null, null, null, null],
  [null, null, null, null, null, "ob", null, null, null, null],
  [null, null, "ob", null, null, null, null, null, null, null],
  ["ob", null, "ob", null, null, "ob", null, "ob", null, "ob"],
  [null, null, null, null, null, null, null, "ob", "ob", "ob"]
];

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {

    case "N":
      rover.direction = "W";
      console.log(rover.name + " is facing " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log(rover.name + " is facing " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log(rover.name + " is facing " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log(rover.name + " is facing " + rover.direction);
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {

    case "N":
      rover.direction = "E";
      console.log(rover.name + " is facing " + rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log(rover.name + " is facing " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log(rover.name + " is facing " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log(rover.name + " is facing " + rover.direction);
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called!");
  switch (rover.direction) {

    case "N":
      if (rover.y === 0) {
        console.log("Impossible to move forward. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y-1][rover.x] === "ob") {
        console.log("Impossible to move forward. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x, rover.y-1, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x, rover.y-1, rover) === false) {
        rover.y -= 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y);  
        return true;
      };
      break;

    case "E":
      if (rover.x === 9) {
        console.log("Impossible to move forward. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y][rover.x+1] === "ob") {  
        console.log("Impossible to move forward. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x+1, rover.y, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x+1, rover.y, rover) === false) {
        rover.x += 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y); 
        return true;
      };
      break;

    case "S":
      if (rover.y === 9) {
        console.log("Impossible to move forward. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y+1][rover.x] === "ob") {
        console.log("Impossible to move forward. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x, rover.y+1, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x, rover.y+1, rover) === false) {
        rover.y += 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y); 
        return true;
      };
      break;

    case "W":
      if (rover.x === 0) {
        console.log("Impossible to move forward. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y][rover.x-1] === "ob") {
        console.log("Impossible to move forward. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x-1, rover.y, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x-1, rover.y, rover) === false) {
        rover.x -= 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y);
        return true;
      };
      break;
  }
}

function moveBackwards(rover){
  console.log("moveBackwards was called!");
  switch (rover.direction) {

    case "N":
      if (rover.y === 9) {
        console.log("Impossible to move backwards. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y+1][rover.x] === "ob") {
        console.log("Impossible to move backwards. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x, rover.y+1, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x, rover.y+1, rover) === false) {
        rover.y += 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y);  
        return true;
      };
      break;

    case "E":
      if (rover.x === 0) {
        console.log("Impossible to move backwards. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y][rover.x-1] === "ob") {
        console.log("Impossible to move backwards. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x-1, rover.y, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x-1, rover.y, rover) === false) {
        rover.x -= 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y);
        return true;
      };
      break;

    case "S":
      if (rover.y === 0) {
        console.log("Impossible to move backwards. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y-1][rover.x] === "ob") {
        console.log("Impossible to move backwards. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x, rover.y-1, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x, rover.y-1, rover) === false) {
        rover.y -= 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y);
        return true;
      };
      break;
      
    case "W":
      if (rover.x === 9) {
        console.log("Impossible to move backwards. You cannot run off the grid.");
        return false;
      } else if (grid[rover.y][rover.x+1] === "ob") {
        console.log("Impossible to move backwards. There is an obstacle.");
        return false;
      } else if (checkRoverLocation(rover.x+1, rover.y, rover) === true) {
        return false;
      } else if (checkRoverLocation(rover.x+1, rover.y, rover) === false) {
        rover.x += 1;
        console.log(rover.name + "'s Coordinates: " + rover.x + "," + rover.y);
        return true;
      };
      break;
  }
}

function command(list, rover){
  for (var i=0; i<list.length; i++){
    switch(list[i]){
      case "f":
        if (moveForward(rover) === true) {
          rover.travelLog.push(rover.x + "," + rover.y);
        };
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        if (moveBackwards(rover) === true) {
          rover.travelLog.push(rover.x + "," + rover.y);
        };
        break;
      }
  }
  console.log(rover.travelLog);
}

function checkRoverLocation(positionX, positionY, rover) {
  switch (true) {

    case rover1.x === positionX && rover1.y === positionY:
      if((rover.direction === "N" && rover.y-1 === positionY) || (rover.direction === "E" && rover.x+1 === positionX) || (rover.direction === "S" && rover.y+1 === positionY) || (rover.direction === "W" && rover.x-1 === positionX)){
        console.log("Impossible to move forward. Rover1 is there.");
      }else if((rover.direction === "N" && rover.y+1 === positionY) || (rover.direction === "E" && rover.x-1 === positionX) || (rover.direction === "S" && rover.y-1 === positionY) || (rover.direction === "W" && rover.x+1 === positionX)){
        console.log("Impossible to move backwards. Rover1 is there.");
      };
      return true;
      break;

    case rover2.x === positionX && rover2.y === positionY:
      if((rover.direction === "N" && rover.y-1 === positionY) || (rover.direction === "E" && rover.x+1 === positionX) || (rover.direction === "S" && rover.y+1 === positionY) || (rover.direction === "W" && rover.x-1 === positionX)){
        console.log("Impossible to move forward. Rover2 is there.");
      }else if((rover.direction === "N" && rover.y+1 === positionY) || (rover.direction === "E" && rover.x-1 === positionX) || (rover.direction === "S" && rover.y-1 === positionY) || (rover.direction === "W" && rover.x+1 === positionX)){
        console.log("Impossible to move backwards. Rover2 is there.");
      };
      return true;
      break;

    case rover3.x === positionX && rover3.y === positionY:
      if((rover.direction === "N" && rover.y-1 === positionY) || (rover.direction === "E" && rover.x+1 === positionX) || (rover.direction === "S" && rover.y+1 === positionY) || (rover.direction === "W" && rover.x-1 === positionX)){
        console.log("Impossible to move forward. Rover3 is there.");
      }else if((rover.direction === "N" && rover.y+1 === positionY) || (rover.direction === "E" && rover.x-1 === positionX) || (rover.direction === "S" && rover.y-1 === positionY) || (rover.direction === "W" && rover.x+1 === positionX)){
        console.log("Impossible to move backwards. Rover3 is there.");
      };
      return true;
      break;
      
    default:
      return false;
      break;
  };   
}
