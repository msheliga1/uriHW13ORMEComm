# E-commerce Back End Starter Code MJS   
uri bootcamp HW 13 ORM Sequalize E-Commerce Back End MJS 2.26.24   
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.  
Starter Code from: https://github.com/coding-boot-camp/fantastic-umbrella   

## Link to Repo, Screenshot(s) and/or Video(s)  
Link to GitHub Repo: https://github.com/msheliga1/uriHW13ORMEComm     
Link to Video on Google Drive: https://drive.google.com/file/d/15i1SyN7UNKhFnAYD3HnOhx8d3yip52xh/view   
<!---  Link to deployed github.io site. https://msheliga1.github.io/uriHW9NodeReadmeGen --->  
<!-- Link to logo.svg: https://github.com/msheliga1/uriHW10OOPLogoGenerator/blob/main/examples/logo.svg  --->  
<!-- Link to Video on GitHub [Link](./examples/hw10LogoGenSheliga.webm)   Note that this video may be too large to play in GitHub, so you will need to download and play from your computer. WindowsMediaPlayer worked for me.  -->

[Link to Acceptance Criteria ](#acceptance-criteria)   

## Project Goals     
Use node, SQL and sequalize to create a back-end for an e-commerce site.  

========================================================   
## Technical Project Details    
========================================================    
## Github:   
    Create Repo (github, repositories => New)   
        - Dont Make this a shared repo.  
    Clone the entire starter repo  
        -- Create a new, totally blank repo in GitHub  
        -- Clone the starter repo (under the hwXX directory) to your local machine  
        -- Set the remote path: git remote add <ori> <HTTPS path to remove>   
            -- Be 100% sure NOT to use the SSH link. Use the HTTPS lank!  
        -- Push the local repo to gitHub: git push ori main   
    OR ... Copy directories and sample files from prior project (or create from scratch).  
        -- No starter code. No need for copying one file at a time via command line.  
        -- Alternate: Go to Demo (root) folder, download zip, moving to local repo, unzip - likely fastest method.     
        -- Took a long time to figure out how to clone an entire repo!
    OR ... create HTML, Node, Develop, CSS and javascript, etc. from scratch, and copy sample files ... worked well.
        Branches (Optional for single programmer projects)  
        - Could do work in branches. (new branch inside gitHub)    
        - All branch names will begin with the initials of the main person working on the branch.  
        - Must update local repo after adding a branch  
        - Switch to branch: From cmd line git switch <branchname>   
        - Once changes committed, git push origin <branchname>  
            - for pushing to remote test branch: git push origin local_branch:remote_branch  
        - Issue a pull request in gitHub.  
        - Click "Pull Requests" in top menu bar (3rd from left).  
        - Click "review Required" in small font below pull request name.  
        - You may approve your own request.  

    Create a nice long READ.md file!!  (Modify prior projects.)   
    NPM: Do "npm init --y" BEFORE "npm install" to avoide ENOENT err.
         Do "npm install inquirer@8.2.4" (with old version) to avoid require error.
         Do "npm install mySQL2" 
    Commit and push files back to gitHub/branch. (For multi-programming: Issue pull request, approve, merge).  
    Deploy code (Settings...CodeAndAnimation->Pages on left, GitHub Pages->Branch->main, save)  
        - Deployed code name always msheliga1/github.io/RepoName !!  
    Make Sure it Works   
    Insert Screencastify (Chrome) Video and/or Screenshot X2 of deployment into readme file. 
  
## Tools and Technologies Used   
    Github - Branches not needed, but could use.  
        - GitIgnore to keep NPM libraries out of gitHub repo.  
    NPM - Node Package Manager  (package.json)
        fs - fileSystem    
        inquirer - Used for prompts (text, list, checkboxes, editor, etc.)   
        dotenv - for secure db password
        mysql2 - dont forget the 2
        express - ORM
        sequelize - avoid rewriting common SQL queries
    mySQL - install is from the DEVIL!
    SQL - Standard Query Language 
    Insomnia - Used for testing routes
    Agile - Try to assign a little work at a time.   

## Acceptance Criteria   
-----------------------   
SQL DB with categories, products and tags.   

Express.js API - add my db name, username, and password to environment variables
Enter schema and seed commands
    - mysql login, source db\schema.sql
    - npm run seed OR node seeds\index.js (from Develop dir using cmd tool)
Connect to a database using Sequelize  

Invoke the application => server is started and the Sequelize models are synced to the MySQL database
Insomnia Core API GET routes for all categories, products, or tags - data displayed in a formatted JSON
Insomnia Core API GET by ID routes for one category, product, or tag - data displayed in a formatted JSON
Insomnia Core API POST, PUT, and DELETE routes - successfully create, update, and delete db data 
  
Tables  - It took me over a (EF(F$)) ING hour to figure out that YOU intend ME to create these.   
Why can't you get someone who can create clear, complete, concise directions. IT'S LIKE THIS EVERY HW!  
-------------  
Category
    id Integer     NOT null    primary key    auto increment
    category_name    String    NOT null
Product
    id    Integer    NOT null    primary key    auto increment
    product_name    String    NOT null
    price    Decimal    NOT null   Validates that the value is a decimal
    stock    Integer    NOT null    default value 10    Validates value is numeric
    category_id    Integer    References the category model's id
Tag
    id    Integer    Doesn't allow null values    Set as primary key    Uses auto increment
    tag_name    String
ProductTag
    id    Integer    Doesn't allow null values    Set as primary key    Uses auto increment
    product_id    Integer    References the product model's id
    tag_id    Integer    References the tag model's id


