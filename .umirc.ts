import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: './Home', name: '首页' },
    {
      path: '/chapter01',
      name: '01 | 设计模式介绍',
      routes: [
        {
          path: '/chapter01/weapon',
          component: './Chapter01/Weapon',
          name: 'Weapon',
        },
      ],
    },
    {
      path: '/chapter02',
      name: '02 | 观察者模式',
      routes: [
        {
          path: '/chapter02/weather',
          component: './Chapter02/Weather',
          name: 'Weather',
        },
      ],
    },
  ],
  npmClient: 'pnpm',
});
