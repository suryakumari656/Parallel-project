import { FormGroup } from "@angular/forms";
export function customvalidators(group:FormGroup){
    let pass =group.value.pass;
    let confirmpass =group.value.confirmpass;
    if(pass==confirmpass){
        return null;
    } else{
        return {'custom':true}
    }
}