import {atom} from "recoil";
export const Networkatom=atom({
    key:"networkatom",
    default:104
})
export const Jobatom=atom({
    key:"jobatom",
    default:0
})
export const Notificationatom=atom({
    key:"notificationatom",
    default:12
})
export const Messainatom=atom({
    key:"messainatom",
    default:0
})
//selector is derived from other atoms or selectors
export const totalcount=selector({
    key:"totalcount",
    get:({get})=>{
        const a=get(Networkatom);
        const b=get(Jobatom);
        const c=get(Messainatom);
        const d=get(Notificationatom);
        return a+b+c+d;
    }
})