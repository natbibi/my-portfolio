import React, { useState } from 'react';
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5";
import styled from 'styled-components';
import { Header } from '../';

const StyledBurger = styled.div`
    svg {
        color: ${({ open }) => open ? 'hotpink' : 'rgb(131, 36, 255);'};
    }
    z-index: 20;
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    margin: 1rem;
  
    @media (max-width: 800px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
`

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(prev => !prev)} >
                {open ? <IoCloseSharp  /> : <IoMenuOutline />}
            </StyledBurger>
            <Header open={open}/>
        </>
    )
}

export default Burger
