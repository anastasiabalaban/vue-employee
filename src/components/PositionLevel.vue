<template>
  <sui-step-group step-number="four" size="tiny">
    <sui-step>
      <sui-icon name="graduation cap" />
      <sui-step-content title="Trainee" />
    </sui-step>

    <sui-step active>
      <sui-icon name="graduation cap" />
      <sui-step-content title="Junior" />
    </sui-step>

    <sui-step disabled>
      <sui-icon name="graduation cap" />
      <sui-step-content disabled title="Middle" />
    </sui-step>

    <sui-step disabled>
      <sui-icon name="graduation cap" />
      <sui-step-content disabled title="Senior" />
    </sui-step>
  </sui-step-group>
</template>

<script>
export default {
  name: 'PositionLevel'
}
</script>
