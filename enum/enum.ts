enum cardinalDirection {
    // North = 1,
    // West,
    // East,
    // south
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
let currentDirection = cardinalDirection.North
console.log(currentDirection);

const err = "Error server"

enum statusCode {
    NotFound = 404,
    Sussess = 200,
    Redirect = 301,
    ErrServer = 401,
    BadRequest = 400,
    Accepted = 202
}

const load = 401

statusCode.ErrServer == load ? console.log(`${err}`) : null
