export default function auth({next, store}){
    if(!store.getters.auth().login){
        return next ({
            name:'home'
        })
    }

    return next();
}