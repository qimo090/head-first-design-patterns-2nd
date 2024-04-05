import Character from '@/pages/Chapter01/Weapon/Character/Character';

export default class King extends Character {
  fight() {
    console.log(`King is fighting, ${this.weapon.useWeapon()}`);
  }
}
