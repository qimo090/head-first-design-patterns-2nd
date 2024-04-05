import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

class Character {
  weapon: WeaponBehavior;

  constructor(w: WeaponBehavior) {
    this.weapon = w;
  }

  public fight() {
    this.weapon.useWeapon();
  }

  setWeapon(w: WeaponBehavior) {
    this.weapon = w;
  }
}

export default Character;
