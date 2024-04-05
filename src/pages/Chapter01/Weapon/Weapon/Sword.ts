import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

export default class Sword implements WeaponBehavior {
  useWeapon(): string {
    return '使用宝剑挥舞';
  }
}
