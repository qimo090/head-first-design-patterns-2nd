import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

export default class BowAndArrow implements WeaponBehavior {
  useWeapon(): void {
    console.log('使用弓箭射击');
  }
}
