import styled from "styled-components";
import { CartIcon } from "./icons/cart-icon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {useRouter} from 'next/navigation'


const CartCount = styled.span`
    width: 17px;
    height: 17px;
    left: 1263px;
    top: 43px;
    font-size: 10px;
    padding: 0 5px;

    margin-left: -10px;


    background: var(--delete-color);
    color: white;
`

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;

`

export function CartControl() {
    const router = useRouter()
    const {value} = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push('/cart')
    }


    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}