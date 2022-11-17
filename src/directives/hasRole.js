import store from "@/store/index"
export default {
    bind(el,binding) {},
    inserted(el,binding){
        const roles = store.state.user.userInfo.roles
        if(!roles.includes(binding.value)){
            el.remove()
        }
    }
}