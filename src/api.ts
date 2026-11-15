export interface IConta {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

const conta = {
  id: "7",
  email: "erica@gmail.com",
  password: "123456",
  name: "Erica Esteves",
  balance: 1270.0,
};

export const api = new Promise<IConta>((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
