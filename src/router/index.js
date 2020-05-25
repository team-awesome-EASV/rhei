import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import AppHomeComponent from '../components/AppHomeComponent';

import ChatContainer from '../lib/cometchat-components/components/ChatContainer';

import ConversationScreen from '../lib/cometchat-components/components/ConversationScreen';
import GroupScreen from '../lib/cometchat-components/components/GroupScreen';
import ContactScreen from '../lib/cometchat-components/components/ContactScreen';

import UserList from '../lib/cometchat-components/components/UserList';
import ChatList from '../lib/cometchat-components/components/ChatList';
import GroupList from '../lib/cometchat-components/components/GroupList';

import BreathingExercice from '../components/BreathingExercice.vue';
import ConnectTheDots from '../components/ConnectTheDots.vue';
import AnimalsFeature from '../components/AnimalsFeature.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/moodtracker',
    name: 'Moodtracker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Moodtracker.vue')
  },
  {
    path: '/onboard-video',
    name: 'VideoOnboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/VideoOnboard.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Chat.vue'),
    children: [
      { path: '/', component: AppHomeComponent },

      { path: '/embeded-app', component: ChatContainer },

      { path: '/conversation-screen', component: ConversationScreen },
      { path: '/group-screen', component: GroupScreen },
      { path: '/contact-screen', component: ContactScreen },

      { path: '/contact-list', component: UserList },
      { path: '/chat-list', component: ChatList },
      { path: '/group-list', component: GroupList }
    ]
  },
  {
    path: '/calm-down',
    name: 'Calm-down',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/CalmDown.vue'),
    children: [
      { path: '/', component: BreathingExercice },
      { path: '/connect-dots', component: ConnectTheDots },
      { path: '/animals-feature', component: AnimalsFeature },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'SingUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/sorting',
    name: 'Sorting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SortingPage.vue')
  },
  {
    path: '/therapy',
    name: 'Therapy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Therapy.vue')
  },
  {
    path: '/color',
    name: 'Color',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ColorPicker.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UserSettings.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
