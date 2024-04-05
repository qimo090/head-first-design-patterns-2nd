import King from '@/pages/Chapter01/Weapon/Character/King';
import Queen from '@/pages/Chapter01/Weapon/Character/Queen';
import Axe from '@/pages/Chapter01/Weapon/Weapon/Axe';
import BowAndArrow from '@/pages/Chapter01/Weapon/Weapon/BowAndArrow';
import Knife from '@/pages/Chapter01/Weapon/Weapon/Knife';
import Sword from '@/pages/Chapter01/Weapon/Weapon/Sword';

const king = new King();
king.setWeapon(new Knife());
king.fight();
king.setWeapon(new Axe());
king.fight();

const queen = new Queen();
queen.setWeapon(new Sword());
queen.fight();
queen.setWeapon(new BowAndArrow());
queen.fight();

const Chapter01Weapon = () => {
  return null;
};

export default Chapter01Weapon;
