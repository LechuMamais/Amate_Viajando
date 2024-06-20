import { checkAndOrder } from "./checkAndOrder";

export const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  const res = await response.json();

  if (Array.isArray(res)) {
    res.forEach((item) => {
      checkAndOrder(item);
    });
  } else if (typeof res === 'object' && res !== null) {
    checkAndOrder(res);
  }

  return res
};