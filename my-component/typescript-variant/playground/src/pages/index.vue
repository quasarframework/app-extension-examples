<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App Extension Playground </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list dense>
        <q-item-label header> Playground Navigation </q-item-label>
        <q-separator class="q-mb-md" />
        <DrawerLink v-for="link in linksList" :key="link.name" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { routes } from "vue-router/auto-routes";

import DrawerLink, { type DrawerLinkProps } from "@/components/DrawerLink.vue";

const linksList: DrawerLinkProps[] =
  routes
    .find(r => r.path === "/")
    ?.children?.map(c => ({
      name: c.path || "Index",
      path: `/${c.path}`
    })) || [];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
