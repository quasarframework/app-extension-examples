<template>
  <q-item clickable :to="path" exact>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface DrawerLinkProps {
  name: string;
  path: string;
}

withDefaults(defineProps<DrawerLinkProps>(), {
  name: "",
  path: "/"
});
</script>
