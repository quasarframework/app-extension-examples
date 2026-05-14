<template>
  <q-item clickable :to="props.path" exact>
    <q-item-section>
      <q-item-label>{{ props.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  name: String,
  path: String
})
</script>
