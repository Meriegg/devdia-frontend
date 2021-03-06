import React from "react";
import Link from "next/link";
import {
  createStyles,
  Text,
  Input,
  InputWrapper,
  PasswordInput,
  Button,
  Anchor,
} from "@mantine/core";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../graphql/mutations";
import { useFormik } from "formik";
import type { NextPage } from "next";
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

const Register: NextPage = () => {
  const [hasSubmitted, setSubmitted] = React.useState<boolean>(false);
  const router = useRouter();
  const state = useGlobalContext();
  const [register] = useMutation(REGISTER_MUTATION);
  const { classes } = useStyles();

  const initialValues = {
    email: "",
    password: "",
    username: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(9),
  });

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: hasSubmitted,
    onSubmit: (values) => {
      register({
        variables: {
          args: { ...values },
        },
        onCompleted: (data) => {
          console.log(data);
          state.setUserData(data?.register?.userData);
          state.setAccessToken(data?.register?.accessToken);
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
      <h1 className={classes.heading}>Register to continue!</h1>
      <Text>follow the steps and create your account to continue!</Text>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);

          handleSubmit(e);
        }}
        className={classes.form}
      >
        <InputWrapper error={errors?.username} required label={"Username"}>
          <Input
            placeholder={"ex: johnDoes69"}
            value={values.username}
            onChange={handleChange("username")}
            invalid={!!errors?.username}
          />
        </InputWrapper>

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
          <Anchor href={"/auth/login"} component={Link}>
            <a className={classes.link}>Have an account? Log in</a>
          </Anchor>
        </div>
      </form>
    </div>
  );
};

export default Register;
