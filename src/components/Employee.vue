<template>
  <sui-grid>
    <sui-grid-row>
      <EmployeeCard :employee="employee" :defaultIcon="defaultIcon"/>

      <sui-grid-column :width="11">

        <PositionLevel />

        <EmployeeSkills />

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import EmployeeCard from './EmployeeCard'
import PositionLevel from './PositionLevel'
import EmployeeSkills from './EmployeeSkills'

export default {
  name: 'Employee',
  components: {
    EmployeeCard,
    PositionLevel,
    EmployeeSkills
  },
  props: ['employee', 'defaultIcon'],
}
</script>
