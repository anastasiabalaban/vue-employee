<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="5">
        <EmployeeCard :employee="employee" :defaultIcon="defaultIcon"/>
      </sui-grid-column>

      <sui-grid-column :width="11">

        <PositionLevel />

        <EmployeeProjects />

        <EmployeeSkills />

        <Technologies />

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import EmployeeCard from './EmployeeCard'
import PositionLevel from './PositionLevel'
import EmployeeSkills from './EmployeeSkills'
import EmployeeProjects from './EmployeeProjects'
import Technologies from './Technologies'

export default {
  name: 'Employee',
  components: {
    EmployeeCard,
    PositionLevel,
    EmployeeSkills,
    EmployeeProjects,
    Technologies
  },
  props: ['employee', 'defaultIcon'],
}
</script>
