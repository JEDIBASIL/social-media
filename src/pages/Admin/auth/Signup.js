import { TextInput, PasswordInput,Button} from '@mantine/core'

const Signup = () => {
    return (
        <form className='authForm'>
        <h2>Sign up</h2>
            <TextInput label='Username' />
            <TextInput label='Email' />
            <PasswordInput label='Password' />
            <PasswordInput label='Confirm password' />
            <Button>Log in</Button>
        </form>
    )
}

export default Signup