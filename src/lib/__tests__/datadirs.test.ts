import os from 'os'
import path from 'path'

import datadirs from '../datadirs'
import { Platform } from '../constants'

const DUMMY_APP_PATH_1 = path.join('dummy', 'app', 'path1')
const DUMMY_APP_PATH_2 = path.join('dummy', 'app', 'path2')

test('datadirs on Linux', () => {
  if (os.platform() !== Platform.Linux) {
    return
  }

  delete process.env.XDG_DATA_DIRS
  expect(datadirs()).toEqual([
    path.join('usr', 'local', 'share'),
    path.join('usr', 'share'),
  ])

  process.env.XDG_DATA_DIRS = [DUMMY_APP_PATH_1, DUMMY_APP_PATH_2].join(':')
  expect(datadirs()).toEqual([DUMMY_APP_PATH_1, DUMMY_APP_PATH_2])
})

test('datadirs on macOS', () => {
  if (os.platform() !== Platform.macOS) {
    return
  }

  expect(datadirs()).toEqual([path.join('Library', 'Application Support')])
})

test('datadirs on Windows', () => {
  if (os.platform() !== Platform.Windows) {
    return
  }

  expect(datadirs()).toBe([
    path.join(...(process.env.ALLUSERSPROFILE || '').split('\\')),
  ])
})
