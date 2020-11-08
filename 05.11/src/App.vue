<template>
<div v-show="step === 1" class="containerstep1">
  <form>
    <div class="form-group">
      <label for="login">Электронная почта</label>
      <input type="email" class="form-control" id="login" placeholder="example@example.org">
      <small id="emailHelp" class="form-text text-muted">Мы никогда никому не передадим вашу электронную почту.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Пароль</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="checkBox1">
      <label class="form-check-label" for="checkBox1">Запомнить меня</label>
    </div>
    <div class="btnSignIn">
    <button type="button" class="btn btn-primary">Вход</button>
    </div>
    <div class="btnRegister">
    <button @click="nextStep" type="button" class="btn btn-primary">Регистрация</button>
    </div>
  </form>
</div>

</template>

<script>
  export default {
    data(){
      return {
        step: 1
      }
    },
    methods: {
      nextStep() {
        this.step++
      }
    }
  }
</script>

<style>
.containerstep1{
  position: absolute;
  top: 30%;
  width: 20%;
  left: 40%;

}

.btn {
  background: blueviolet;
  border: blueviolet;
}
.btnSignIn {
  display:inline;
}
.btnRegister {
  display:inline;
  margin-left: 2%;
}
</style>
