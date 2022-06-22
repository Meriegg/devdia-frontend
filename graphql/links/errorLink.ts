import { showNotification } from "@mantine/notifications";
import { onError } from "@apollo/client/link/error";

export default onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      showNotification({
        title: "Error!",
        message: message,
        color: "red",
        autoClose: false,
      })
    );

  if (networkError) {
    showNotification({
      title: "Network Error!",
      message: "We couldn't connect to our server, please try again!",
      color: "red",
      autoClose: false,
    });
  }
});
