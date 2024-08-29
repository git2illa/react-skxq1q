# React Redux

1. Context

## git rebase squash


1. commit 1
1. commit 2
1. commit 3

```
git rebase -i HEAD~3
```

```
pick 123423 commit msg1
squash 2832db commit msg2
squash fhej83 commit msg3
# after commit this feature/squash-commit will squash these three commit as one
```

```
# when feature branch squash success then go to main to merge this one 
git checkout main
git merge feature/squash-commit
```
- modify commit message
- git push 

## Squashing Commit During a Merge

- this senario will checkout main then merge other branch with `merge squash`

```
git checkout main
```

```
git merge squash feature/squash-commit
```

```
git commit -m 'feat: squash merge in main'
```


