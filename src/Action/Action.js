export const Increase1=()=>{
    return{
        type:"incOne"
    }
}

export const Decrease1=()=>{
    return{
        type:"decOne"
    }
}
export const Increase2=(value)=>{
    return{
        type:"incTwo",
        payload:value
    }
}
export const Decrease2=(value)=>{
    return{
        type:"decTwo",
        payload:value
    }
}