import Character from '@/pages/Chapter01/Weapon/Character/Character';

export default class Troll extends Character {
  fight() {
    console.log(`Troll is fighting, ${this.weapon.useWeapon()}`);
  }
}
