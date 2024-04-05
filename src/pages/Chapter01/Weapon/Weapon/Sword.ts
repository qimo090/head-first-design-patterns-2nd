import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

export default class Sword implements WeaponBehavior {
  useWeapon(): void {
    console.log('使用宝剑挥舞');
  }
}
