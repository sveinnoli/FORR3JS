let weapons = {
    "garch" : {
        "attack" : 10,
        "defence" : 4
    },
    "gork" : {
        "attack" : 5,
        "defence" : 8
    }
}


class Stats {
    constructor(health, attack, defence) {
        this.health = health;
        this.attack = attack;
        this.defence = defence;
        this.alive = true;
    }

    attack_enemy(enemy) {
        enemy.receive_damage(this.attack) 
    }

    is_alive() {
        return this.alive;
    }

    receive_damage(damage) {
        let dmg = damage - this.defence;
        if (dmg > 0) {
            this.health -= dmg;
            if (this.health < 0) {
                this.health = 0;
                this.alive = false;
            }
        }
    }
}

class Soldier extends Stats {
    constructor(name, health, attack, defence, weapon=undefined) {
        super(health, attack, defence)
        this.name = name;
        this.backpack = {}
        this.weapon = weapon;
        if (weapon && this.weapon in weapons) {
            this.weapon = weapons[weapon];
            this.equip_weapon(this.weapon);
        }
    }
    equip_weapon(weapon) {
        this.attack += weapon["attack"];
        this.defence += weapon["defence"];
    }
    remove_weapon() {
        this.attack -= this.weapon["attack"];
        this.defence -= this.weapon["defence"];
        this.backpack[Object.keys(this.weapon)] = this.weapon;
        this.weapon = undefined;
    }
}


let pete = new Soldier("pete", 100, 15, 10, "garch");
let jackass = new Soldier("jackass", 100, 10, 12);

pete.attack_enemy(jackass);
console.log(jackass, pete);

pete.remove_weapon();
console.log(pete.backpack);