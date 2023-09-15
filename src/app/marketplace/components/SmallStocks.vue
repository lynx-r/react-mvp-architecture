<template>
  <div>
    <h3>stocks:</h3>
    <div v-for="(stock, index) of presenter.stocks" :key="index">
      {{ stock.address }}: {{ stock.capacity }}
    </div>
    <input v-model="stockAddress" type="text" />
    <input v-model="stockCapacity" type="text" />
    <button @click="presenter.onAddStock({ address: stockAddress, capacity: stockCapacity, date })">
      add stock
    </button>
    <button @click="presenter.onAddRandomStock()">add random stock</button>
  </div>
</template>

<script setup lang="ts">
import { random, uniqueId } from 'lodash'
import { usePresenter } from '../presenter/usePresenter'

const presenter = usePresenter()

const stockAddress = uniqueId('address ')
const stockCapacity = random(0, 1000)
const date = new Date().getTime()
</script>
