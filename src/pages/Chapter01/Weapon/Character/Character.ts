import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

abstract class Character {
  weapon: WeaponBehavior;

  constructor(w: WeaponBehavior) {
    this.weapon = w;
  }

  abstract fight(): void;

  setWeapon(w: WeaponBehavior) {
    this.weapon = w;
  }
}

export default Character;
