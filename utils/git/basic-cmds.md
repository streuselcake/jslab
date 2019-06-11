
# Repository

$ mkdir myproject
$ cd myproject
$ git init
$ ls -a
$ git status
$ touch hellogit.txt
$ git add hellogit.txt
$ git commit -m "initial commit"



# Branches

$ git branch myfeature
$ git checkout myfeature

$ git add .
$ git commit -m "change in myfeature"

$ git checkout master

$ git merge myfeature



# Lokale Kopie von einem Remote Repository

$ git clone git@github.com:streuselcake/jslab.git

Alternativ:
$ git init
$ git branch master
$ git remote add origin git@github.com:user/repository.git
$ ...


# Änderungen von Remote Repository abfragen

$ git fetch

$ git pull

# Lokale Änderung zu Remote Repository übertragen

$ git add .
$ git commit -m "demo change"

$ git push
