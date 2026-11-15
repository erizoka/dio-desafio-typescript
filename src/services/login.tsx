import { api, type IConta } from "../api"

export const login = async (email: string, password: string): Promise<IConta | null> => {
    const data: IConta = await api

    if (email !== data.email || password !== data.password) {
        alert('Email/Senha inválido!')
        return null;
    }

    return data
}