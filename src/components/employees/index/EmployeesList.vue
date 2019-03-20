<template>
  <sui-grid-column :width="10">
    <sui-segment color="purple">
      <sui-list v-for="employee in employees" :key="employee.id">
        <sui-list-item>
          <sui-image avatar :src="employee.avatar || defaultIcon" />
          <sui-list-content>
            <router-link :to="{ name: 'employees', params: { id: employee.id,
                                                             employee: employee,
                                                             defaultIcon: defaultIcon }}"
                         is="sui-list-header">{{fullName(employee)}}</router-link>
            <sui-list-description>
              {{employee.position}}
            </sui-list-description>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </sui-segment>
  </sui-grid-column>
</template>

<script>
export default {
  name: 'EmployeesList',
  props: {
    employees: {
      type: Array,
      required: true
    },
    defaultIcon: {}
  },
  methods: {
    fullName(user) {
      return `${user.first_name} ${user.last_name}`
    }
  }
}
</script>
