import axios from "./index";

export default async function register(authdata) {
  const { name, email, password } = authdata;

  try {
    const response = await axios.post("/auth/register", {
      name,
      email,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function login(authdata) {
//   console.log(authdata);
  const { email, password } = authdata;

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
}
