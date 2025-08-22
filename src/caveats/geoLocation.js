import { useOptimistic } from "react";

function getLocation(){
    if ("geolocation" in navigator) {
    /* geolocation is available */
        navigator.permissions.query({name:'geolocation'}).then((result)=>{
            if(result.state === 'granted'){
                console.log("授权成功");
                navigator.geolocation.getCurrentPosition((position)=>{
                    console.log(position);
                });
            }else if(result.state === 'prompt'){
                console.log("提示授权");
            }else if(result.state === 'denied'){
                console.log("拒绝授权");
            }
            result.addEventListener('change',()=>{
                console.log(result.state);
            });
        });

    } else {
    /* geolocation IS NOT available */
    }
}
export function useGeoLocation(state) {

    getLocation();
    const [optimisticState,setOptimisticState] = useOptimistic(state,(currentState,newState)=>{
        if (currentState === newState) {
            return currentState;
        }
        return newState;
    })
    return [optimisticState, setOptimisticState];
}