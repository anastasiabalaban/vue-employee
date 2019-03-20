<template>
  <sui-grid-column :width="6">
    <sui-form @submit.prevent="onSubmit">
      <sui-form-field>
        <label>First Name:</label>
        <input placeholder="First Name" v-model="first_name" required>
      </sui-form-field>
      <sui-form-field>
        <label>Last Name:</label>
        <input placeholder="Last Name" v-model="last_name" required>
      </sui-form-field>
      <sui-form-field>
        <label>Position:</label>
        <input placeholder="Position" v-model="position" required>
      </sui-form-field>
      <sui-button basic color="purple" type="submit">Add Employee</sui-button>
    </sui-form>
  </sui-grid-column>
</template>

<script>
export default {
  name: 'EmployeesForm',
  props: {
    lastEmployeeId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      position: ''
    }
  },
  methods: {
    onSubmit() {
      let employeeParams = {
        id: this.lastEmployeeId + 1,
        first_name: this.first_name,
        last_name: this.last_name,
        position: this.position
      }
      this.$emit('employee-submited', employeeParams)
      this.first_name = ''
      this.last_name = ''
      this.position = ''
    }
  }
}
</script>
