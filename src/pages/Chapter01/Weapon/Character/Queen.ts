import Character from '@/pages/Chapter01/Weapon/Character/Character';

export default class Queen extends Character {
  fight() {
    console.log(`Queen is fighting, ${this.weapon.useWeapon()}`);
  }
}
