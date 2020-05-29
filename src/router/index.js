import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


// Chat routes ----->
import AppHomeComponent from '../components/AppHomeComponent';
import ChatContainer from '../lib/cometchat-components/components/ChatContainer';

import ConversationScreen from '../lib/cometchat-components/components/ConversationScreen';
import GroupScreen from '../lib/cometchat-components/components/GroupScreen';
import ContactScreen from '../lib/cometchat-components/components/ContactScreen';

import UserList from '../lib/cometchat-components/components/UserList';
import ChatList from '../lib/cometchat-components/components/ChatList';
import GroupList from '../lib/cometchat-components/components/GroupList';

// Calm down features routes ------>
import BreathingExercice from '../components/BreathingExercice.vue';
import ConnectTheDots from '../components/ConnectTheDots.vue';
import AnimalsFeature from '../components/AnimalsFeature.vue';

// Mood tracker features routes ------>
import TrackMood from '../components/TrackMood.vue';
import TrigerPage from '../components/TrigerPage';
import ProgressPage from '../components/ProgressPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/moodtracker',

    component: () =>
      import(/* webpackChunkName: "moodtracker" */ '../views/MoodTrackerOK.vue'),
    children: [
      { path: '/', component: TrackMood, name: 'TrackMood' },
      { path: '/triger-page', component: TrigerPage, name: 'TrigerPage' },
      { path: '/progress-page', component: ProgressPage, name: 'ProgressPage' },
    ]
  },
  {
    path: '/onboard-video',
    name: 'VideoOnboard',

    component: () =>
      import(/* webpackChunkName: "onboardvideo" */ '../views/VideoOnboard.vue')
  },
  {
    path: '/chat',
    name: 'Chat',

    component: () =>
      import(/* webpackChunkName: "chat" */ '../views/Chat.vue'),
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
    component: () =>
      import(/* webpackChunkName: "calm" */ '../views/CalmDown.vue'),
    children: [
      { path: '', component: BreathingExercice, name: 'BreathingExercice' },
      { path: 'connect-dots', component: ConnectTheDots, name: 'connectTheDots' },
      { path: 'animals-feature', component: AnimalsFeature, name: 'AnimalsFeature' },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },

  {
    path: '/sorting',
    name: 'Sorting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sorting" */ '../views/SortingPage.vue')
  },
  {
    path: '/therapy',
    name: 'Therapy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "therapy" */ '../views/Therapy.vue')
  },
  {
    path: '/color',
    name: 'Color',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "color" */ '../views/ColorPicker.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/UserSettings.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
