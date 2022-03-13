import { User } from '../domain/models/User'

test('bora vê se tá tudo certo', () => {
    const user = new User()
    user.name = 'Ronald'
    expect(user.name).toEqual('Ronald')
})