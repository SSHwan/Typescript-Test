type PlayerA = {
    name: string
}

type PlayerAA = PlayerA & {
    lastName: string,
}

const playerA: PlayerAA = {
    name: 'nicoA',
    lastName: 'xxx'
}

//////////////////////////////////////////

interface PlayerB {
    name: string
}

interface PlayerB {
    firstName: string,
}

interface PlayerBB extends PlayerB {
    lastName: string
}

const palyerB: PlayerBB = {
    name: 'nicoB',
    firstName: 'yyy',
    lastName: 'xxx'
}

/////////////////////////////

type PlayerC = {
    firstName: string
}
interface PlayerD {
    firstName: string
}
class User implements PlayerC/* PlayerD */ {
    constructor(
        public firstName: string,
    ) {}
}