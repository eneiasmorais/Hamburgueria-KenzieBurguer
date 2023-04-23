import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthUserContext } from "../../../providers/userContext";
import { IFormRegisterUser, IInputProviderProps } from "../../../interfaces";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegisterUser>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const { userRegisterRequest } = useContext(AuthUserContext);

  const submit: SubmitHandler<IFormRegisterUser> = (formData) => {
    console.log(formData);
    userRegisterRequest(formData as IFormRegisterUser);
    console.log(errors);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="E-mail"
        type="text"
        register={register("email")}
        name="email"
        id=""
        errors={""}
        // {errors.email ? <p>{errors.email.message}</p> : null}
      />

      <Input
        label="Senha"
        type="password"
        register={register("password")}
        name={"password"}
        id="id"
        errors={""}
        /* {errors.password ? <p>{errors.password.message}</p> : null} */
      />

      <Input
        label="Nome"
        type="name"
        register={register("name")}
        name={"name"}
        id="id"
        errors={""}
        /* {errors.name ? <p>{errors.name.message}</p> : null} */
      />

      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
