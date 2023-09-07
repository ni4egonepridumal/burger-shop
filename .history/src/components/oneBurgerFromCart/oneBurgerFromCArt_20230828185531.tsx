import React from 'react';
import { IBurger } from '../../types';

interface IOneBurgerFromCart {
    burger: IBurger
}

export const OneBurgerFromCart = ({ burger }: IOneBurgerFromCart) => {
    return (
        <div>
            <img src={`./burgerImg/${burger.image}`} />
            <div>
                <p>Количество</p>
                <div><span>+</span>2<span>-</span></div>
            </div>
            <div>
                Цена <span>{burger.price}</span>
            </div>
        </div>
    );
};

