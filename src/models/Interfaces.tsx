export interface IMan {
    id: number,
    title: string,
    price: number,
    imgUrl: string,
    quantity: number
};

export interface ICartState {
    cartItems: IMan[],
    quantity: number,
    total: number
};


