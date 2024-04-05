import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

export default class BowAndArrow implements WeaponBehavior {
  useWeapon(): string {
    return '使用弓箭射击';
  }
}
