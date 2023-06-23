// config
import { Page } from 'config/next'

// screens
import { RegisterUserScreen } from 'screens/RegisterUserScreen'

export default function UserRegisterScreenRoute() {
  return (
    <Page>
      <RegisterUserScreen />
    </Page>
  )
}
