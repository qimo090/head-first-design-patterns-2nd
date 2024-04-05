import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: './Home', name: '首页' },
    { path: '/chapter01', component: './Chapter01', name: '01 | 设计模式介绍' },
  ],
  npmClient: 'pnpm',
});
