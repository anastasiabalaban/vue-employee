<template>
  <div>
    <h2 is="sui-header" icon text-align="center" :style="{marginTop: '10px'}">
      <sui-icon name="laptop" circular />
      <sui-header-content>PROJECTS</sui-header-content>
    </h2>

    <sui-card-group :items-per-row="3">
      <sui-card class="olive" v-for="(project, index) in projects" :key="index">
        <sui-card-content>
          <sui-card-header>{{project.title}}</sui-card-header>
          <sui-card-meta>{{project.country}}</sui-card-meta>
          <sui-card-description>{{project.description}}</sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="users" />{{project.members_count}}
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'AllProjects',
  data() {
    return {
      projects: [
        {
          title: 'Active project',
          description: 'The county courthouse is a historic building that is located in the oldest town in the state.',
          country: 'USA',
          members_count: 10
        },
        {
          title: 'Unactive project',
          description: 'This project has been in the planning stage since at least 1981.',
          country: 'Canada',
          members_count: 5
        }
      ]
    }
  }
}
</script>
