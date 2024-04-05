import WeaponBehavior from '@/pages/Chapter01/Weapon/Weapon/WeaponBehavior';

export default class Knife implements WeaponBehavior {
  useWeapon(): string {
    return '使用匕首刺杀';
  }
}
