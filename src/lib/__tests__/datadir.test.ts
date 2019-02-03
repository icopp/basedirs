import os from 'os'
import path from 'path'

import datadir from '../datadir'
import { Platform } from '../constants'

const DUMMY_APP_NAME = 'Dummy App Name: With Subtitle❗'
const DUMMY_APP_NAME_SANITIZED = 'Dummy App Name- With Subtitle-'
const DUMMY_APP_NAME_SNAKE_CASE = 'dummy-app-name--with-subtitle-'
const DUMMY_APP_PATH = path.join('dummy', 'app', 'path')

test('datadir on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_DATA_HOME
  expect(datadir()).toBe(path.join(os.homedir(), '.local', 'share'))
  expect(datadir(DUMMY_APP_NAME)).toBe(
    path.join(os.homedir(), '.local', 'share', DUMMY_APP_NAME_SNAKE_CASE)
  )

  process.env.XDG_DATA_HOME = DUMMY_APP_PATH
  expect(datadir()).toBe(DUMMY_APP_PATH)
  expect(datadir(DUMMY_APP_NAME)).toBe(
    path.join(DUMMY_APP_PATH, DUMMY_APP_NAME_SNAKE_CASE)
  )
})

test('datadir on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(datadir()).toBe(
    path.join(os.homedir(), 'Library', 'Application Support')
  )
  expect(datadir(DUMMY_APP_NAME)).toBe(
    path.join(
      os.homedir(),
      'Library',
      'Application Support',
      DUMMY_APP_NAME_SANITIZED
    )
  )
})

test('datadir on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(datadir()).toBe(path.join(...(process.env.APPDATA || '').split('\\')))
  expect(datadir(DUMMY_APP_NAME)).toBe(
    path.join(
      ...(process.env.APPDATA || '').split('\\'),
      DUMMY_APP_NAME_SANITIZED,
      'Data'
    )
  )
})
