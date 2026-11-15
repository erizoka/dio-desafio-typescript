import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert;
    const mockEmail = 'erica@gmail.com'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas caso o login seja válido', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).not.toBeNull
    })

    it('Deve exibir um erro caso a senha seja inválido', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).not.toBeNull
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido.com', '062013')
        expect(mockAlert).toHaveBeenCalled
        expect(response).toBeNull
    })
})