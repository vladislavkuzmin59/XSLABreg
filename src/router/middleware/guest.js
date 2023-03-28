export default function guest ({ next, store }){
    if(store.getters.auth.login){
        return next({
           name: 'myCourses'
        })
    }
   
    return next();
   }