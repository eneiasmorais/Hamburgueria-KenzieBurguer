import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import {
  IFormLogin,
  IFormRegisterUser,
  IUser,
  IUserLoginResponse,
  IUserRegisterResponse,
} from "../interfaces";

interface IUserProviderProps {
  children: React.ReactNode;
}
interface IUserContext {
  userRegisterRequest: (formData: IFormRegisterUser) => Promise<void>;
  loginRequest: (formData: IFormLogin) => Promise<void>;
  userLogout: () => void;
  user: IUser | null;
}

export const AuthUserContext = createContext({} as IUserContext);

export const AuthUserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);

  //REGISTER USER

  const userRegisterRequest = async (
    formData: IFormRegisterUser
  ): Promise<void> => {
    try {
      const { data } = await api.post<IUserRegisterResponse>("users", formData);
      toast.success("Cadastro relizado com sucesso!");
      navigate("/");
      console.log({ data });
    } catch (error) {
      const currentError = error as AxiosError<string>;
      console.log(currentError);
      toast.error("Cadastro não realizado. Tente novamente!");
    }
  };

  //LOGIN USER

  const loginRequest = async (formData: IFormLogin): Promise<void> => {
    try {
      const { data } = await api.post<IUserLoginResponse>("login", formData);
      toast.success("Login realizado com sucesso!");
      const { user: userResponse, accessToken } = data;
      localStorage.setItem("@hamb:token", accessToken);
      localStorage.setItem("@hamb:userid", userResponse.id);
      setUser(userResponse);
      navigate("/shop");
    } catch (error) {
      const currentError = error as AxiosError<string>;
      console.log(currentError);
      toast.error("Login não realizado. Tente novamente!");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@hamb:token");
    localStorage.removeItem("@hamb:userid");
    setUser(null);
    navigate("/");
  };

  //AUTOLOGIN

  useEffect(() => {
    const id = localStorage.getItem("@hamb:userid");
    const token = localStorage.getItem("@hamb:token");
    const autoLogin = async () => {
      try {
        const response = await api.get(`users/${id}`, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        toast.success("Seja bem vindo a Hamburgueria 2.0");
        navigate("/shop");
      } catch (error) {
        const currentError = error as AxiosError<string>;
        console.log(currentError);
        toast.error("Erro ao carregar os dados.");
        navigate("/");
      }
    };
    if (id && token) {
      autoLogin();
    }
  }, []);

  return (
    <AuthUserContext.Provider
      value={{ user, userRegisterRequest, loginRequest, userLogout }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
