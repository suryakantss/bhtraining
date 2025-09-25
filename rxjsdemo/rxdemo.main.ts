import { add } from "./rxjsdemo";

add(10, 20).subscribe({
    next: (res) => {
        console.log(res);
    }, error: () => {

    }, complete: () => {
        console.log('END...');

    }
});