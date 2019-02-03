import os from 'os'
import path from 'path'

import configdir from '../configdir'
import { Platform } from '../constants'

const DUMMY_APP_NAME = 'Dummy App Name: With Subtitle❗'
const DUMMY_APP_NAME_SANITIZED = 'Dummy App Name- With Subtitle-'
const DUMMY_APP_NAME_SNAKE_CASE = 'dummy-app-name--with-subtitle-'
const DUMMY_APP_PATH = path.join('dummy', 'app', 'path')

test('configdir on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_CONFIG_HOME
  expect(configdir()).toBe(path.join(os.homedir(), '.config'))
  expect(configdir(DUMMY_APP_NAME)).toBe(
    path.join(os.homedir(), '.config', DUMMY_APP_NAME_SNAKE_CASE)
  )

  process.env.XDG_CONFIG_HOME = DUMMY_APP_PATH
  expect(configdir()).toBe(DUMMY_APP_PATH)
  expect(configdir(DUMMY_APP_NAME)).toBe(
    path.join(DUMMY_APP_PATH, DUMMY_APP_NAME_SNAKE_CASE)
  )
})

test('configdir on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(configdir()).toBe(path.join(os.homedir(), 'Library', 'Preferences'))
  expect(configdir(DUMMY_APP_NAME)).toBe(
    path.join(os.homedir(), 'Library', 'Preferences', DUMMY_APP_NAME_SANITIZED)
  )
})

test('configdir on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(configdir()).toBe(
    path.join(...(process.env.APPDATA || '').split('\\'))
  )
  expect(configdir(DUMMY_APP_NAME)).toBe(
    path.join(
      ...(process.env.APPDATA || '').split('\\'),
      DUMMY_APP_NAME_SANITIZED,
      'Config'
    )
  )
})
