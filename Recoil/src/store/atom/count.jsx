import {atom, selector} from "recoil"
export const countAtom=atom({
    key:"countAtom",
    default:10
})
export const evenselector=selector({
    key:"selector",
    get:(props)=>{
        const count=props.get(countAtom);
        return count%2===0;
    }
})