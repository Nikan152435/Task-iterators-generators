class Character {
    constructor(name, type, health, level, attack, defence) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;
    }
  }

  class Team {
    constructor() {
      this.characters = [];
    }
  
    addCharacter(character) {
      this.characters.push(character);
    }
  
    [Symbol.iterator]() {
      let index = 0;
      const characters = this.characters;
  
      return {
        next() {
          if (index < characters.length) {
            return { value: characters[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  }  