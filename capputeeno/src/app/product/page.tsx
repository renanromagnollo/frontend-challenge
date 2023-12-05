"use client"

import { BackButton } from "@/components/back-button"
import { DefaultPageLayout } from "@/components/default-page-layout"
import { BackIcon } from "@/components/icons/back-icon"
import { ShopBagIcon } from "@/components/icons/shopping-bag-icon"
import { useProduct } from "@/hooks/useProduct"
import { formatReais } from "@/utils/format-price"
import { styled } from "styled-components"

interface ProductProps {

}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        /* align-items: center; */
        justify-content: center;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        img {
            max-width: 640px;
            width: 50%;
        }

        > div {
            display: flex;
            /* align-items: center; */
            /* height: 100%; */
            justify-content: space-between;
            flex-direction: column;

            button {
                background: #115D8C;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-weight: 500;
                font-size: 16px;
                text-transform: uppercase;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

        }
    }

`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark2);
    }

    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: var(--text-dark2);
        margin-top: 12px;
    }

    span:nth-of-type(2) {
        font-weight: 600;
        font-size: 20px;
        color: var(--shapes-dark);
        margin-bottom: 24px;
    }
    
    p {
        font-weight: 400;
        font-size: 12px;
        color: var(--text-dark);
    }
    
    div {
        margin-top: 24px;

        h3 {
            text-transform: uppercase;
            color: var(--shapes-dark);
            font-weight: 500;
            font-size: 16px;    
            
        }
    }
    
    p {
        font-size: 14px;
    }
`


export default function Product({searchParams}: {searchParams: {id: string}}) {

    const {data} = useProduct(searchParams.id)

    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items')
        if(cartItems) {
            let cartItemsArray = JSON.parse(cartItems)

            let existingProductIndex = cartItemsArray.findIndex((item: {id: string;}) => item.id === searchParams.id)

            if(existingProductIndex != -1){
                cartItemsArray[existingProductIndex].quantity += 1
            } else {
                cartItemsArray.push({...data, quantity: 1, id: searchParams.id})
            }

            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
        } else {
            const newCart = [{ ...data, id: searchParams.id, quantity: 1 }]
            localStorage.setItem('cart-items', JSON.stringify(newCart))
        }

    }

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>
                    <img src={data?.image_url} />
                    <div>
                        <ProductInfo>
                            <span>{data?.category}</span>
                            <h2>{data?.name}</h2>
                            <span>{formatReais(data?.price_in_cents ?? 0)}</span>
                            <p>Frete grátis!</p>
                            <div>
                                <h3>Descrição:</h3>
                                <p>{data?.description}</p>
                            </div>
                        </ProductInfo>
                        <button onClick={handleAddToCart}>
                            <ShopBagIcon/>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}