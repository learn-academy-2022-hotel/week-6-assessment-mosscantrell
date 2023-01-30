# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Luckily in this scenario, you can utilize migrations to add a new column to your model! Using '$ rails g migration migration_descriptor', you can indicate that you are adding a column in this new migration. For this purpose, your terminal command would likely be '$ rails g migration add_new_column'. Now, in the db/migrate folder of your Rails code, you should see a method named 'change'. Here, you will input the following code: 'add_column: plural_table_name: new_column_name: data_type:'. Of course these names will be changed to suit your needs, so it is likely your code would read 'add_column: students: students_id: integer:'. The foreign key in this case is 'students_id:', an integer that calls back to the correlating id on the Cohort model. This foreign key would be on the Student model, so that it can refer back to the Cohort model.

Researched answer: One thing I would like to rectify from the above example is that, rather than the foreign key being named ':students_id', it should instead be named ':cohort_id'. Not only was the original example plural, it was also the wrong model name. When you are making associations between models, be sure to ue the correct names so that the information is being passed to and from the correct places.

2. Which RESTful routes must always be passed params? Why?

Your answer: While I'm not entirely sure on this one, my guess is that the following routes require params to be passed: show, create, edit, update, and destroy. My reasoning as to why these must be passed params is that show, edit, update and destroy all require the id as a parameter, and create and update require the specified input parameters. Index does not call on any parameters, nor does new.

Researched answer: Though I struggled to find resources that talked about which needed params in particular, from my notes, I believe the following are the accurate list of routes: index, show, create, update, and destroy. These all deal solely with data, and all call on specific parameters. For index, the param is your model data. For show, it is the specific id for an entry. Create and update rely on params specified in your controller, and update and delete both require the specific id to only modify one entry. New and edit both deal with forms, not data, so they do not require params.

3. Name three rails generator commands. What is created by each?

Your answer: One rails generator command is '$ rails g model column_name:data_type'. This command creates a model using your specified input, as well as the data type to look for. I have used this multiple times now, but one specific example was when I was working on a book tracker application. For my purposes, my terminal command was '$ rails g model title:string read:string author:string date_completed:date'. This created a model that, when using my controller and view pages later, I could add to, modify, or delete information from.
Another rails generator command is '$ rails g controller ControllerName'. This creates the controller for your application, where functionality for your routes is placed. The controller name will always be singular here, as it is referenced in the plural in other locations. For the example I gave above, my controller command was '$ rails g controller Book'.
The final rails generator command is '$ rails g resource ControllerName column_name:data_type'. A resource not only creates your model and your controller, but it also sets up your routes for you. It is just up to you to add the functionality on your controller page! Though I did not use a resource for the above example, if I had done so it would have looked like this: '$ rails g resource Book title:string read:string author:string date_completed:date'.


Researched answer: One thing I feel should have been added to my above answer is that the 'g' in the terminal commands is short for 'generate', and that '$rails generate...' would work instead. I feel confident in the bulk of the answer given above, so for the researched answer I will offer another example! '$ rails g migration migration_descriptor' is another rails generator command. This generates a new migration, where edits can be made to your original model such as adding a new column.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
   - controller method: index
   - typically this will show all entries in your model, and can be formatted in list format if you code it to do so.

action: "POST" location: /students
   - controller method: create
   - this will make a new entry in your model, typically with parameters that are specified on your controller. it requires 'new' to work

action: "GET" location: /students/new
   - controller method: new
   - this is the form for which 'create' relies on. here, based on the parameters you indicate to be displayed on the form, is where you will fill in information to make a new model entry.

action: "GET" location: /students/2
   - controller method: show
   - this will show you  page containing the information you specify on a specific model entry. the parameter for this is the id of the model entry.

action: "GET" location: /students/2/edit
   - controller method: edit
   - similar to 'new', this creates the form for which 'update' relies on. however, this also requires the id of an entry as a parameter, as this form applies to already existing information

action: "PATCH" location: /students/2
   - controller method: update
   - comparable to 'create', this is what actually puts the update into effect. without this, 'edit' would be a non-functioning form. this alters the information in the model-- similar to how a mutator permanantly alters the array it is used on.

action: "DELETE" location: /students/2
   - controller method: destroy
   - as it says in the name, this destroys the entry specified with the id parameter. it will be removed from the model permanently, and in order to get it back, you would have to re-make the entry.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user, I can see a list of to-do list tasks on a page.
- As a user, I can click on a button to create a new task.
- As a user, I am returned to the main list page after creating a new task.
- As a user, I can click on a to-do list task and be taken to a page with a description of the task.
- As a user, I can click a button on the description page to return me to the main list page.
- As a user, I can click a button to edit the task's title and description.
- As a user, I am returned to the description page after editing.
- As a user, I can click a button to delete the task on the description page.
- As a user, I am returned to the main list page after deleting.
- As a user, I can see pleasant stylings on each page.
