module.exports = {
  apps: [
    {
      name: 'OCDWeb',  //名称可以自定义
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
