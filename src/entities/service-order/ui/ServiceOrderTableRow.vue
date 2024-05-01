<script setup>
const $props = defineProps({
  order: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <tr class="service-order-tr">
    <th>
      <span>{{ order.name }}</span>
    </th>
    <td class="table-field">
      <span class="table-field__name">Id заявки</span>
      <span class="table-field__value"> {{ order.id }} </span>
    </td>
    <td class="table-field">
      <span class="table-field__name">Кол-во техники</span>
      <span class="table-field__value">
        {{ order.openedFaultAmount }}/{{ order.allFaultAmount }}
      </span>
    </td>
  </tr>
</template>

<style lang="scss">
.service-order-tr {
  font-weight: 400;
  
  background-color: white;
  padding: 8px;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
}

.service-order-tr th {
  font-weight: inherit;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border: none;
  text-align: left;
  padding: 8px;
}

</style>