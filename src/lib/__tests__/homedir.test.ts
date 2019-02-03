import os from 'os'

import homedir from '../homedir'
import { Platform } from '../constants'

test('homedir on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  expect(homedir()).toBe(os.homedir())
})

test('homedir on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(homedir()).toBe(os.homedir())
})

test('homedir on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(homedir()).toBe(os.homedir())
})
