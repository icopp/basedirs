import os from 'os'
import path from 'path'

import configdirs from '../configdirs'
import { Platform } from '../constants'

const DUMMY_APP_PATH_1 = path.join('dummy', 'app', 'path1')
const DUMMY_APP_PATH_2 = path.join('dummy', 'app', 'path2')

test('configdirs on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_CONFIG_DIRS
  expect(configdirs()).toEqual([path.join('etc', 'xdg')])

  process.env.XDG_CONFIG_DIRS = [DUMMY_APP_PATH_1, DUMMY_APP_PATH_2].join(':')
  expect(configdirs()).toEqual([DUMMY_APP_PATH_1, DUMMY_APP_PATH_2])
})

test('configdirs on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(configdirs()).toEqual([path.join('Library', 'Preferences')])
})

test('configdirs on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(configdirs()).toBe([
    path.join(...(process.env.ALLUSERSPROFILE || '').split('\\')),
  ])
})
