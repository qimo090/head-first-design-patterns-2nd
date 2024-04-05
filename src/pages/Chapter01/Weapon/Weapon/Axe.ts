import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

export default class Axe implements WeaponBehavior {
  useWeapon(): string {
    return '使用斧头砍杀';
  }
}
