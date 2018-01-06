const Koa = require('koa')
const app = new Koa()

// const router = require('koa-router')()
const router = require('./router')




const middleware = require('./middleware')

middleware(app)

router(app)

// app.use(async (ctx, next) => {
//   let stime = new Date().getTime()
//   await next()
//   let etime = new Date().getTime()
//   ctx.response.type = 'text/html'
//   ctx.response.body = '<h1>Hello World</h1>'
//   console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`)
// });



app.use(async (ctx, next) => {
  console.log('中间件1 doSoming')
  await next();
  console.log('中间件1 end')
})

app.use(async (ctx, next) => {
  console.log('中间件2 doSoming')
  await next();
  console.log('中间件2 end')
})

app.use(async (ctx, next) => {
  console.log('中间件3 doSoming')
  await next();
  console.log('中间件3 end')
})
//传统路由判断
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.body = '<h1>index page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/home') {
//         ctx.response.body = '<h1>home page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/404') {
//         ctx.response.body = '<h1>404 Not Found</h1>';
//     } else {
//         await next();
//     }
// });
//end

 // 添加路由
// router
//     .get('/', async (ctx, next) => {
//         console.log(ctx)
//         ctx.response.body = `<h1>index page</h1>`
//     })
//     .get('/home', async (ctx, next) => {
//         console.log(ctx.request.query)
//         console.log(ctx.request.querystring)
//         ctx.response.body = '<h1>HOME page</h1>'
//     })
//     .get('/404', async (ctx, next) => {
//         ctx.response.body = '<h1>404 Not Found</h1>'
//     })
//     .get('/users/:id', async (ctx, next) => {
//         console.log(ctx.params.id)
//          ctx.response.body = '<h1>'+ctx.params.id+'</h1>'
//     })
//     .post('/users', async (ctx, next) => {
     
//     })
//     .put('/users/:id', async (ctx, next) => {
        
//     })
//     .del('/users/:id', async (ctx, next) => {
        
//     })
//     .all('/users/:id', async (ctx, next) => {
       
//     })
    // .all('/*', async (ctx, next) => {
    //     ctx.response.status = 404;
    //     ctx.response.body = '<h1>404 Not Found</h1>';
    // });



//在开发过程中我们能够很方便的生成路由 URL：
// router.get('user', '/users/:id', function (ctx, next) {
   
// });

// router.url('user', 3);
// // => 生成路由 "/users/3" 
 
// router.url('user', { id: 3 });
// // => 生成路由 "/users/3" 
 
// router.use(function (ctx, next) {
//   // 重定向到路由名称为 “sign-in” 的页面 
//   ctx.redirect(ctx.router.url('sign-in'));
// })



//多中间件
//koa-router 也支持单个路由多中间件的处理。通过这个特性，我们能够为一个路由添加特殊的中间件处理。也可以把一个路由要做的事情拆分成多个步骤去实现，当路由处理函数中有异步操作时，这种写法的可读性和可维护性更高。比如下面的示例代码所示
    
// router.get(
//   '/users/:id',
//   function (ctx, next) {
//       console.log(ctx)
//     return User.findOne(ctx.params.id).then(function(user) {
//       // 首先读取用户的信息，异步操作
//       ctx.user = user;
//       next();
//     });
//   },
//   function (ctx) {
//     console.log(ctx.user);
    
//   }
// );

// 调用路由中间件
// app.use(router.routes())
app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})