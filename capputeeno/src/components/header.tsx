"use client"

import { styled } from "styled-components"

import { Saira_Stencil_One as SSO } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartIcon } from "./icons/cart-icon"
import { useFilter } from "@/hooks/useFilter"

const sairaStencil = SSO({ 
  weight: ['400'],
  subsets: ['latin'] 
})

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: cernter;
    justify-content: space-between;
    padding: 12px 24px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    text-decoration: none;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 40px;
    }

    @media(min-width: ${props => props.theme.tabletBreakpoint}) {
        font-size: 24px;
    }
`

export function Header(props: HeaderProps) {
    const {setSearch, search} = useFilter()
    return (
        <TagHeader>
            <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon 
                    placeholder="Procurando por algo específico?"
                    value={search}
                    handleChange={setSearch}
                />
                <CartIcon/>
            </div>
        </TagHeader>
    )
}