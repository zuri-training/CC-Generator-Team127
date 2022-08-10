### Contributing to CC-Generator-Team127

First time Contributing?
Everyone was once a beginner at one point, so pls relax and read the following instructions, and everything should go smoothly :) but if it doesn't you can always reach out to me (Tosin) or anyone for more help

### The first thing you have to do is:
* #### Fork your own copy of the repo
    TO do that visit the project website [here](https://github.com/zuri-training/CC-Generator-Team127) Then click on the fork button, the fork button is located at the upper right side.  What this mean, is that you get your own copy of this repository. You can then safely make changes to your own copy, and then later, you can submit your changes.
    
* #### clone the repositry to your local machine
  The next thing you want to do is to clone (make a copy) the CC-generator-team27 on your profile, to your local machine. To do that,

  * Copy the link of your own CC-generator-team27 repository (the one you forked).
  * Open the folder you want to work on your machine.
  * Open your favourite editor.
  * Open the terminal.
  * Run git clone `git clone https://github.com/github_username/CC-Generator-Team127.git`
    > e.g `git clone https://github.com/Tosin-webdev/CC-Generator-Team127.git`
      
* Configure the upstream
Now that you have the local copy of CC-Generator-Team127. There are many developers contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :

  * copy this link here `https://github.com/zuri-training/CC-Generator-Team127.git`
  * go to your local machine terminal, in the project folder
  * run `git remote add upstream https://github.com/zuri-training/CC-Generator-Team127.git`

    Now, your local copy can fetch (update) from the original source, and you won't miss out on any update.

* Commiting your changes
  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:
  * First, create a branch with prefixing the name of the feature you are to implement.
    > For example:
    > `git checkout -b navbar-component`
  * Make your changes
  * add the changes by using `git add .`
  * Commit your changes to the branch with a message using `git commit -m "Commit message closes #issue number"`
    > e.g git commit -m "added the navbar component closes #15" <br/>
    > What this mean is that, when your pull request is merged Issue #15 is automatically closed.
  * run `git pull upstream main`
    > To make sure there is no conflict before pushing the code
  * run `git push origin [name of the repo you created]`
    > e.g <br/>
    > run `git push origin navbar-component` <br/>
    > Which pushes your changes to your online copy, after which you then open a pull request.
    
 * Opening pull request <br/>
  Once you push the changes to your repo, the `Compare & pull request` button will appear in the GitHub page of your repo
  Click on the `Compare & pull request` then create a pull requst.
