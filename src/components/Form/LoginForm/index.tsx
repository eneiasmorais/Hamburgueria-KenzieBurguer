import { useForm } from "react-hook-form";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { LoginFormSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthUserContext } from "../../../providers/userContext";
import { useContext } from "react";
import { IFormLogin } from "../../../interfaces";
import { SubmitHandler } from "react-hook-form/dist/types";
import Input from "../Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: zodResolver(LoginFormSchema),
  });

  const { loginRequest } = useContext(AuthUserContext);

  const submit: SubmitHandler<IFormLogin> = (formData) => {
    loginRequest(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="login"
        label="E-mail"
        type="text"
        register={register("email")}
        name="email"
        errors={errors.root?.message}
      />
      <Input
        id="senha"
        label="Senha"
        type="password"
        register={register("password")}
        name="password"
        errors={errors.root?.message}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
