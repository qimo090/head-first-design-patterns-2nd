import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

export default class Axe implements WeaponBehavior {
  useWeapon(): void {
    console.log('使用斧头砍杀');
  }
}
