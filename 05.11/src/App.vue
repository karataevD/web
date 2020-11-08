<template>
<div class="container">
  <img class="draftLogo" src="./assets/draftLogo.svg">
  <form v-show="step === 1">
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
      <button type="send" class="btn btn-warning">Вход</button>
    </div>
    <div class="btnRegister">
      <button @click="nextStep" type="button" class="btn btn-warning">Регистрация</button>
    </div>
  </form>
  <form v-show="step === 2">
    <div class="form-group">
      <label for="exampleInputPassword1">Имя</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Фамилия</label>
      <input type="text" class="form-control" id="surname">
    </div>
    <div class="form-group">
      <label for="login">Введите вашу электронную почту</label>
      <input type="email" class="form-control" id="login" placeholder="example@example.org">
      <small id="emailHelp" class="form-text text-muted">Мы никогда никому не передадим вашу электронную почту.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Придумайте пароль</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="btnSignIn">
      <button @click="backStep" type="button" class="btn btn-light">Назад</button>
      <div class="btnInRegistration">
      <button type="send" class="btn btn-warning">Зарегистрироваться</button>
      </div>
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
      },
      backStep() {
        this.step--
      }
    }
  }
</script>

<style>
.container{
  position: absolute;
  top: 10%;
  width: 20%;
  left: 40%;
}
.btnInRegistration {
  margin-left: 2%;
  display: inline;
}
.btnSignIn {
  display:inline;
}
.btnRegister {
  display:inline;
  margin-left: 2%;
}
</style>
