<script>
    import { cart } from "./theCart";
    export let totalCartPrice = 0;
    function updateCartTotal(){
        console.log("iT LIVES")
        $cart.forEach(element => {
            console.log(element.amount)
            totalCartPrice = totalCartPrice + (45 * element.amount)
            console.log(totalCartPrice)
        });
    }

    export const updateTotal = updateCartTotal();
</script>