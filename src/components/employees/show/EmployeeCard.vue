<template>
  <sui-grid-column :width="5">
    <sui-card class="fluid">
      <sui-image :src="employee.avatar || defaultIcon" />
      <sui-card-content>
        <sui-card-header>{{employee.first_name}} {{employee.last_name}}</sui-card-header>
        <sui-card-meta>Joined in 2019</sui-card-meta>
        <sui-card-description>{{employee.position}}</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        Rating: <sui-rating icon="star" :max-rating="5" :rating="4"/>
      </sui-card-content>
    </sui-card>
    <a @click="$router.go(-1)">
      <sui-icon name="arrow alternate circle left outline" size="big" /> BACK
    </a>
  </sui-grid-column>
</template>

<script>
export default {
  name: 'EmployeeCard',
  props: {
    employee: {
      type: Object,
      required: true
    },
    defaultIcon: {}
  }
}
</script>
