<template>
  <div>
    <h1>{{$route.params.keyWord}}</h1>
    <h1>{{$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
props:['keyWord']
}
</script>

<style>

</style>