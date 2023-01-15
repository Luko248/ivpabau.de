import { Fancybox } from "@fancyapps/ui";

export function fancyBoxInit(){
    const fancyItems = document.querySelectorAll('a[data-fancybox]').length > 0

    if(fancyItems){
        Fancybox.bind("[data-fancybox]", {})
    }
}