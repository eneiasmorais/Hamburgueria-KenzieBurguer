export interface IInputProviderProps {
  label: string;
  name: string;
  errors: string | undefined | number;
  register: any;
  type: string;
  id: string;
}

export interface IFormRegisterUser {
  email: string;
  password: string;
  name: string;
}

export interface IUserRegisterResponse {
  accessToken: string;
  user: IFormRegisterUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface ICartProviderProps {
  children: React.ReactNode;
}
export interface ICartContext {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  handleShow: () => void;
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<never[]>>;
  cartList: IProductCart[];
  setCartList: React.Dispatch<React.SetStateAction<IProductCart[]>>;
  addProduct: (product: IProduct) => void;
  newCart: any[];
  removeProduct: (product: IProduct) => void;
  counter: number;
  filterProducts: IProduct[] | null;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  cartTotal: IProductCart | number;
  removeAllProducts: () => void;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductCart {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

export interface IProductCart extends IProduct {
  quantity: number;
  category: string;
}
