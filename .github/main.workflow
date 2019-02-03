workflow "Push" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Lint" {
  uses = "borales/actions-yarn@master"
  args = "lint"
  needs = "Install"
}

action "Test" {
  uses = "borales/actions-yarn@master"
  args = "test"
  needs = "Install"
}

action "Build" {
  uses = "borales/actions-yarn@master"
  args = "build"
  needs = ["Install", "Lint", "Test"]
}
