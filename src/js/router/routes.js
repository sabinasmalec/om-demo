export default [

  { path: '/',
    component: function (resolve) {
      require(['../components/Hello.vue'], resolve)
    }
  },

  { path: '/product',
    component: function(resolve){
      require(['../components/Product.vue'], resolve)
    }
  },
    
  { path: '/category',
    component: function(resolve){
      require(['../components/Category.vue'], resolve)
    }
  },

  { path: '/transaction',
    component: function(resolve){
      require(['../components/Transaction.vue'], resolve)
    }
  }
]
