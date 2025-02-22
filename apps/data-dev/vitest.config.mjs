import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    clearMocks: true,
    globals: true,
    setupFiles: './vue-test-utils.extend.js',
    include: ['./tests/**/?(*.)+(spec|test).[jt]s', '**/*/?(*.)+(spec|test).[jt]s', '../../packages/theme/**/*/?(*.)+(spec|test).[jt]s', '../../packages/data/**/*/?(*.)+(spec|test).[jt]s'],
    onConsoleLog: (log) => {
      // Silence logs coming from vue <Suspense> is experimental, and stdout | unknown component before it
      if (log.includes('<Suspense'))
        return false
      return log
    },
  },
})
