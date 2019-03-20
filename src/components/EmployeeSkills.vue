<template>
  <div>
    <sui-divider horizontal>
      <h5 is="sui-header" color="purple">SKILLS</h5>
    </sui-divider>

    <sui-form @submit.prevent="addSkill">
      <sui-input class="fluid" placeholder="New Skill" v-model="skill" icon="plus" required />
    </sui-form>

    <sui-list v-for="(skill, index) in skills" :key="index">
      <sui-list-item>
        <sui-icon name="trash alternate" @click="removeSkill(index)" />
        <sui-list-content>
          <sui-icon name="paperclip" color="olive" />{{skill.title}}
        </sui-list-content>
      </sui-list-item>
    </sui-list>
  </div>
</template>

<script>
export default {
  name: 'EmployeeSkills',
  data() {
    return {
      skills: [{ title: 'something' }],
      skill: '',
    }
  },
  methods: {
    addSkill() {
      this.skills.push({ title: this.skill })
      this.skill = ''
    },
    removeSkill(index) {
      this.skills.splice(index, 1)
    }
  }
}
</script>
