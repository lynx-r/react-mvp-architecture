<template>
  <div>
    <h3>shops:</h3>
    <div v-for="(shop, index) of presenter.shops" :key="index">
      {{ shop.shopId }}: {{ shop.shopName }}
    </div>
    <input v-model="shopId" type="text" />
    <input v-model="shopName" type="text" />
    <button @click="presenter.onAddShop({ shopId, shopName, date })">add shop</button>
    <button @click="presenter.onAddRandomShop">add random shop</button>
  </div>
</template>

<script setup lang="ts">
import { uniqueId } from 'lodash'
import { usePresenter } from '../presenter/usePresenter'

const presenter = usePresenter()

const shopId = uniqueId('market ')
const shopName = uniqueId('name ')
const date = new Date().getTime()
</script>
