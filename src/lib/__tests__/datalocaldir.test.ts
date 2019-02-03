import os from 'os'
import path from 'path'

import datalocaldir from '../datalocaldir'
import { Platform } from '../constants'

const DUMMY_APP_NAME = 'Dummy App Name: With Subtitle❗'
const DUMMY_APP_NAME_SANITIZED = 'Dummy App Name- With Subtitle-'
const DUMMY_APP_NAME_SNAKE_CASE = 'dummy-app-name--with-subtitle-'
const DUMMY_APP_PATH = path.join('dummy', 'app', 'path')

test('datalocaldir on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_DATA_HOME
  expect(datalocaldir()).toBe(path.join(os.homedir(), '.local', 'share'))
  expect(datalocaldir(DUMMY_APP_NAME)).toBe(
    path.join(os.homedir(), '.local', 'share', DUMMY_APP_NAME_SNAKE_CASE)
  )

  process.env.XDG_DATA_HOME = DUMMY_APP_PATH
  expect(datalocaldir()).toBe(DUMMY_APP_PATH)
  expect(datalocaldir(DUMMY_APP_NAME)).toBe(
    path.join(DUMMY_APP_PATH, DUMMY_APP_NAME_SNAKE_CASE)
  )
})

test('datalocaldir on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(datalocaldir()).toBe(
    path.join(os.homedir(), 'Library', 'Application Support')
  )
  expect(datalocaldir(DUMMY_APP_NAME)).toBe(
    path.join(
      os.homedir(),
      'Library',
      'Application Support',
      DUMMY_APP_NAME_SANITIZED
    )
  )
})

test('datalocaldir on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(datalocaldir()).toBe(
    path.join(...(process.env.LOCALAPPDATA || '').split('\\'))
  )
  expect(datalocaldir(DUMMY_APP_NAME)).toBe(
    path.join(
      ...(process.env.LOCALAPPDATA || '').split('\\'),
      DUMMY_APP_NAME_SANITIZED,
      'Data'
    )
  )
})
