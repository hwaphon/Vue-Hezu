<template>
  <div class="login">
    <back></back>
    <div class="login-bg"></div>
    <div class="login-tips css1393e9303b189e7"><em>58</em>合租</div>
    <div class="login-register">
      <transition name="login">        
        <div class="login-container" v-if="showLogin">
          <div class="lr-container">
            <input type="text" class="login-name" placeholder="请输入用户名" v-model="lname">
            <input type="password" class="login-password" placeholder="请输入密码" v-model="lpassword">
            <span class="lr-container-tips" @click="onRegisterClick">还没账号？</span>
          </div>
          <span class="login-btn" @click="login">立即登录</span>
        </div>
      </transition>
      <transition name="register">
        <div class="register-container" v-if="!showLogin">
          <div class="lr-container">
            <input type="text" class="register-name" placeholder="请输入用户名" v-model="rname">
            <input type="password" class="register-password" placeholder="请输入密码" v-model="rpassword">
            <input type="tel" class="register-phone" placeholder="请输入手机号" v-model="rtel">
            <div class="row">
              <van-radio-group v-model="sexResult" class="radio-container">
                <van-radio
                  class="radio"
                  v-for="(item, index) in sexList"
                  :key="item"
                  :name="item">{{ item }}</van-radio>
              </van-radio-group>
              <span class="lr-container-tips" @click="onLoginClick">← 返回登录</span>
            </div>
          </div>
          <span class="login-btn" @click="register">开始注册</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./login.scss";
</style>
<script src="./login.js"></script>