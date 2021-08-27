<template>
  <div class="button button-3">Shadow</div>
</template>

<style scoped>
.button {
  width: 170px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  display: inline-block;
}
.button-3 {
  border: 2px solid #3c73ff;
  background-color: #3c73ff;
  border-radius: 20px;
  color: #fff;
  transition: 0.3s;
}
.button-3:hover {
  box-shadow: 8px 8px #99bdff;
  transition: 0.3s;
}
</style>
