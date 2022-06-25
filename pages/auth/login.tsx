import React from "react";
import useGlobalContext from "../../hooks/useGlobalContext";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../graphql/mutations";
import { useFormik } from "formik";
import type { NextPage } from "next";
import {
  Anchor,
  Button,
  Input,
  InputWrapper,
  PasswordInput,
  Text,
  createStyles,
} from "@mantine/core";
import { useRouter } from "next/router";
import * as yup from "yup";

const useStyles = createStyles((theme) => ({
  mainContainer: {
    maxWidth: "600px",
    margin: "auto",
    marginTop: 50,
    padding: 10,
  },
  heading: {
    margin: "0",
  },
  form: {
    marginTop: 30,
  },
  bottomContainer: {
    width: "100%",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  link: {
    color: theme.colors.gray[5],
  },
}));

const LoginPage: NextPage = () => {
  const [hasSubmitted, setSubmitted] = React.useState<boolean>(false);
  const router = useRouter();
  const state = useGlobalContext();
  const [login] = useMutation(LOGIN_MUTATION);
  const { classes } = useStyles();

  const initialValues = {
    email: "ya.boybeats1234@gmail.com",
    password: "123456789",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(9),
  });

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: hasSubmitted,
    onSubmit: (values) => {
      login({
        variables: {
          args: { ...values },
        },
        onCompleted: (data) => {
          console.log(data);
          state.setUserData(data?.login?.userData);
          state.setAccessToken(data?.login?.accessToken);
          router.push("/");
        },
        onError(error) {
          console.error(error);
        },
      });
    },
  });

  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.heading}>Log in to continue!</h1>
      <Text>follow the steps and log into your account to continue!</Text>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);

          handleSubmit(e);
        }}
        className={classes.form}
      >
        <InputWrapper error={errors?.email} required label={"Email"}>
          <Input
            placeholder={"ex: johndoe69@johndoe.com"}
            value={values.email}
            onChange={handleChange("email")}
            invalid={!!errors?.email}
          />
        </InputWrapper>

        <PasswordInput
          error={errors?.password}
          label={"Password"}
          placeholder={"some strong sh*t"}
          value={values?.password}
          onChange={handleChange("password")}
          required
        />

        <div className={classes.bottomContainer}>
          <Button type="submit" style={{ width: "fit-content" }}>
            Continue!
          </Button>
          <Anchor href={"/auth/register"} component={Link}>
            <a className={classes.link}>Don't Have an account? Register</a>
          </Anchor>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
