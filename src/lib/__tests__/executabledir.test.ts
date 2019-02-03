import os from 'os'
import path from 'path'

import executabledir from '../executabledir'
import { Platform } from '../constants'

const DUMMY_APP_PATH = path.join('dummy', 'app', 'path')

test('executabledir on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_BIN_HOME
  delete process.env.XDG_DATA_HOME
  expect(executabledir()).toBe(path.join(os.homedir(), '.local', 'bin'))

  process.env.XDG_DATA_HOME = DUMMY_APP_PATH
  expect(executabledir()).toBe(path.join(DUMMY_APP_PATH, '..', 'bin'))

  delete process.env.XDG_DATA_HOME
  process.env.XDG_BIN_HOME = DUMMY_APP_PATH
  expect(executabledir()).toBe(DUMMY_APP_PATH)
})

test('executabledir on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(executabledir()).toBe(path.join(os.homedir(), 'Applications'))
})

test('executabledir on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(executabledir()).toBe(
    path.join(...(process.env.LOCALAPPDATA || '').split('\\'), 'Programs')
  )
})
