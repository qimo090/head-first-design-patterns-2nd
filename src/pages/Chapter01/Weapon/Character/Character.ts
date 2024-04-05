import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

abstract class Character {
  weapon: WeaponBehavior;

  abstract fight(): void;

  setWeapon(w: WeaponBehavior) {
    this.weapon = w;
  }
}

export default Character;
