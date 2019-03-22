<template>
  <div>
    <h2 is="sui-header" icon text-align="center" :style="{marginTop: '10px'}">
      <sui-icon name="users" circular />
      <sui-header-content>EMPLOYEES</sui-header-content>
    </h2>

    <sui-grid>
      <sui-grid-row>

        <EmployeesForm @employee-submited="addEmployee"
                       :lastEmployeeId="employees[employees.length - 1].id" />

        <EmployeesList :employees="employees" :defaultIcon="defaultIcon" />

      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import EmployeesForm from './EmployeesForm'
import EmployeesList from './EmployeesList'

export default {
  name: 'AllEmployees',
  components: {
    EmployeesForm,
    EmployeesList
  },
  data() {
    return {
      employees: [
        {
          id: 0,
          first_name: 'Anastasia',
          last_name: 'Rubistka',
          position: 'Ruby Developer',
          avatar: require('@/assets/user_icon_0.png')
        },
        {
          id: 1,
          first_name: 'Alex',
          last_name: 'Black',
          position: 'QC / QA',
          avatar: require('@/assets/user_icon_1.png')
        },
        {
          id: 2,
          first_name: 'Ira',
          last_name: 'Bahira',
          position: 'Recruiter',
          avatar: require('@/assets/user_icon_3.png')
        },
        {
          id: 3,
          first_name: 'Tirion',
          last_name: 'Lanister',
          position: 'Java Developer',
          avatar: require('@/assets/user_icon_4.png')
        },
        {
          id: 4,
          first_name: 'John',
          last_name: 'Curly',
          position: 'PM',
          avatar: require('@/assets/user_icon_13.png')
        }
      ],
      defaultIcon: require('@/assets/default_user_icon.png')
    }
  },
  methods: {
    addEmployee(employeeParams) {
      this.employees.push(employeeParams);
    }
  }
}
</script>
