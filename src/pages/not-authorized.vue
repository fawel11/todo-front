<template>
  <row>
    <section class="content">
      <div class="error-page">
        <h2 class="headline text-warning">401</h2>

        <div class="error-content">
          <h3><i class="fa fa-exclamation-triangle text-warning"></i> Unauthorized Access!</h3>

          <p>
            Sorry, you don't have permission to access this page.
            Please contact your administrator for assistance.
          </p>

          <router-link to="/dashboard" class="btn btn-primary">
            Go to Dashboard
          </router-link>
        </div>
      </div>
    </section>
  </row>
</template>

<script>
export default {
  name: 'Unauthorized',
};
</script>

<style scoped>
/* Add custom styles if needed */
.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
