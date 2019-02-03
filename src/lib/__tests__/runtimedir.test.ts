import os from 'os'
import path from 'path'

import runtimedir from '../runtimedir'
import { Platform } from '../constants'

const DUMMY_APP_PATH = path.join('dummy', 'app', 'path')

test('runtimedir on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_RUNTIME_DIR
  expect(runtimedir()).toBeNull()

  process.env.XDG_RUNTIME_DIR = DUMMY_APP_PATH
  expect(runtimedir()).toBe(DUMMY_APP_PATH)
})

test('runtimedir on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(runtimedir()).toBeNull()
})

test('runtimedir on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(runtimedir()).toBeNull()
})
