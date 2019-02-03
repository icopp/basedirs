workflow "Push" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "icopp/actions-yarn@patch-1"
  args = "install"
}

action "Lint" {
  uses = "icopp/actions-yarn@patch-1"
  args = "lint"
  needs = "Install"
}

action "Test" {
  uses = "icopp/actions-yarn@patch-1"
  args = "test"
  needs = "Install"
}

action "Build" {
  uses = "icopp/actions-yarn@patch-1"
  args = "build"
  needs = ["Install", "Lint", "Test"]
}

workflow "On pull request merge, delete the branch" {
  on = "pull_request"
  resolves = ["branch cleanup"]
}

action "Branch cleanup" {
  uses = "jessfraz/branch-cleanup-action@master"
  secrets = ["GITHUB_TOKEN"]
}
