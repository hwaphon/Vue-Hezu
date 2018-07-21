
### 安装

    git clone git@github.com:TrainTeam6/Team6-FE.git
    cd Team6-FE
    yarn && yarn dev

### 开发

    // 切分支开发，不要在master上工作
    git checkout -b your_branch
    // rebase master，有冲突要解决冲突
    git pull --rebase origin master

    // 平时开发就提交到自己的分支
    git push origin your_branch

    // 开发完成后提交 pull request


### 工具

    框架： Vue
    路由： Vue-Router
    状态管理： Vuex
    图标： 已引入 font-awesome，如果使用 iconfont 可自行下载放置到 src/assets
    移动端组件库： Vant，已全局引入，直接使用组件即可。
    网络请求： axios, 在组件中直接调用 this.$http 即可使用。
    工具类： underscore, 在组件中直接调用 this.util 即可使用。
    数据： Apizza（Mock 服务）
    CSS预处理器：SCSS
    代码校验：ESLint
    DOM 操作：JQuery

### 提示

    1. CSS 单位用 rem， 已将 html 的 font-size 设置为 10px（即以 10px 为基准）

    2. 当前底部 Tabbar 是全局引入的，如果有的页面不需要展示 Tabbar，将 mixins 目录下的 tabbar_control.js 作为组件的 mixins 属性引入即可（参考 /pages/detail/fang-detail.vue 中的做法）。

    3. 如果需要在页面添加返回按钮，请使用 components/common 下的 back 组件。


