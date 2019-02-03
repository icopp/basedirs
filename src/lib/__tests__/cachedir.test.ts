import os from 'os'
import path from 'path'

import cachedir from '../cachedir'
import { Platform } from '../constants'

const DUMMY_APP_NAME = 'Dummy App Name: With Subtitle❗'
const DUMMY_APP_NAME_SANITIZED = 'Dummy App Name- With Subtitle-'
const DUMMY_APP_NAME_SNAKE_CASE = 'dummy-app-name--with-subtitle-'
const DUMMY_APP_PATH = path.join('dummy', 'app', 'path')

test('cachedir on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_CACHE_HOME
  expect(cachedir()).toBe(path.join(os.homedir(), '.cache'))
  expect(cachedir(DUMMY_APP_NAME)).toBe(
    path.join(os.homedir(), '.cache', DUMMY_APP_NAME_SNAKE_CASE)
  )

  process.env.XDG_CACHE_HOME = DUMMY_APP_PATH
  expect(cachedir()).toBe(DUMMY_APP_PATH)
  expect(cachedir(DUMMY_APP_NAME)).toBe(
    path.join(DUMMY_APP_PATH, DUMMY_APP_NAME_SNAKE_CASE)
  )
})

test('cachedir on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(cachedir()).toBe(path.join(os.homedir(), 'Library', 'Caches'))
  expect(cachedir(DUMMY_APP_NAME)).toBe(
    path.join(os.homedir(), 'Library', 'Caches', DUMMY_APP_NAME_SANITIZED)
  )
})

test('cachedir on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(cachedir()).toBe(
    path.join(...(process.env.LOCALAPPDATA || '').split('\\'))
  )
  expect(cachedir(DUMMY_APP_NAME)).toBe(
    path.join(
      ...(process.env.LOCALAPPDATA || '').split('\\'),
      DUMMY_APP_NAME_SANITIZED,
      'Cache'
    )
  )
})
