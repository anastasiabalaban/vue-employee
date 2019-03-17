<template>
  <div>
    <sui-card>
      <sui-image :src="employee.avatar || defaultIcon" />
      <sui-card-content>
        <sui-card-header>{{employee.first_name}} {{employee.last_name}}</sui-card-header>
        <sui-card-meta>Joined in 2019</sui-card-meta>
        <sui-card-description>{{employee.position}}</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="user" />
        22 Friends</sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'Employee',
  props: ['employee', 'defaultIcon']
}
</script>
