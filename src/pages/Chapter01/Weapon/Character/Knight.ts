import Character from '@/pages/Chapter01/Weapon/Character/Character';

export default class Knight extends Character {
  fight() {
    console.log(`Knight is fighting, ${this.weapon.useWeapon()}`);
  }
}
