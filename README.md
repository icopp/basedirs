# basedirs

Get base directory paths appropriate to your OS.

## Specs

- https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
- https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#//apple_ref/doc/uid/TP40010672-CH2-SW6

## Precedent

- https://github.com/soc/directories-jvm
- https://doc-snapshots.qt.io/qt5-dev/qstandardpaths.html

## Usage

### `cachedir`

```js
cachedir(): string | null
cachedir(appName: string): string | null
```

Returns the path for user-specific non-essential (cached) data. Examples include
servers with cached response data or applications using ephemeral data retrieved
from the internet.

If `appName` is given, a path specifically for that app is returned.

If called on an unsupported platform, `null` is returned.

```js
import { cachedir } from 'basedirs'

console.log(cachedir()) // `$HOME/.cache`, `$HOME/Library/Caches`, or `%LOCALAPPDATA%`
console.log(cachedir('App Name')) // `$HOME/.cache/app-name`, `$HOME/Library/Caches/App Name`, or `%LOCALAPPDATA%\App Name\Cache`
```

### `configdir`

```js
configdir(): string | null
configdir(appName: string): string | null
```

Returns the path for user-specific configuration files. Examples include
application preferences or settings for CLI apps.

If `appName` is given, a path specifically for that app is returned.

If called on an unsupported platform, `null` is returned.

```js
import { configdir } from 'basedirs'

console.log(configdir()) // `$HOME/.config`, `$HOME/Library/Preferences`, or `%APPDATA%`
console.log(configdir('App Name')) // `$HOME/.config/app-name`, `$HOME/Library/Preferences/App Name`, or `%APPDATA%\App Name\Config`
```

### `configdirs`

```js
configdirs(): string[] | null
```

Returns the paths for non-user-specific configuration files.

If called on an unsupported platform, `null` is returned.

```js
import { configdirs } from 'basedirs'

console.log(configdirs()) // `['/etc/xdg']`, `['/Library/Preferences']`, or `['%ALLUSERSPROFILE%']`
```

### `datadir`

```js
datadir(): string | null
datadir(appName: string): string | null
```

Returns the path for user-specific data files. Examples include saved game
files, mail client databases, or chat client log storage.

If `appName` is given, a path specifically for that app is returned.

If called on an unsupported platform, `null` is returned.

```js
import { datadir } from 'basedirs'

console.log(datadir()) // `$HOME/.local/share`, `$HOME/Library/Application Support`, or `%APPDATA%`
console.log(datadir('App Name')) // `$HOME/.local/share/app-name`, `$HOME/Library/Application Support/App Name`, or `%APPDATA%\App Name\Data`
```

### `datadirs`

```js
datadirs(): string | null
```

Returns the paths for non-user-specific data files.

If called on an unsupported platform, `null` is returned.

```js
import { datadirs } from 'basedirs'

console.log(datadirs()) // `['/usr/local/share', '/usr/share']`, `['/Library/Application Support']`, or `['%ALLUSERSPROFILE%']`
```

### `datalocaldir`

```js
datalocaldir(): string | null
datalocaldir(appName: string): string | null
```

Returns the path for user-specific data files that will preferably not be
transferred to other machines with the same user account.

If `appName` is given, a path specifically for that app is returned.

If called on an unsupported platform, `null` is returned.

```js
import { datalocaldir } from 'basedirs'

console.log(datalocaldir()) // `$HOME/.local/share`, `$HOME/Library/Application Support`, or `%LOCALAPPDATA%`
console.log(datalocaldir('App Name')) // `$HOME/.local/share/app-name`, `$HOME/Library/Application Support/App Name`, or `%LOCALAPPDATA%\App Name\Data`
```

### `executabledir`

```js
executabledir(): string | null
```

Returns the path for user-specific executable files.

If called on an unsupported platform, `null` is returned.

```js
import { executabledir } from 'basedirs'

console.log(executabledir()) // `$HOME/.local/bin`, `$HOME/Applications`, or `%LOCALAPPDATA%\Programs`
```

### `homedir`

```js
homedir(): string | null
```

Returns the path for user files in general.

If called on an unsupported platform, `null` is returned.

```js
import { homedir } from 'basedirs'

console.log(homedir()) // `$HOME` or `%USERPROFILE%`
```

### `runtimedir`

```js
runtimedir(): string | null
```

Returns the path for user-specific runtime files and file objects. This includes
sockets and named pipes, but not other temporary files.

Only supported on Linux. If called on an unsupported platform, `null` is
returned. May sometimes return `null` even on Linux.

```js
import { runtimedir } from 'basedirs'

console.log(runtimedir()) // depends on the specifics of the Linux system
```
