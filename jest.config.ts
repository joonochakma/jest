import type { Config} from '@jest/types'
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'Node',

    verbose: true,
}
export default config