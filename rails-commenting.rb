# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) the code on line 10 establishes the BlogPosts controller, and is implemented automatically when generating a controller or a resource. it holds your controller code and can be referenced in the view.
class BlogPostsController < ApplicationController
  def index
    # ---2) the code on line 13 establishes what the index page is labeled as (@posts) and what it displays(BlogPost.all). with these two components, the index page (or landing page/home page) will display all of the model data on the page. typically used in tandem with a list on the corresponding view page so that each post can be listed out.
    @posts = BlogPost.all
  end

  # ---3) on line 17, the method for 'show' is being established. 'show' displays a specific entry on your database model. for example, if the blog post 'January 1st' was the first entry, it would likely have the ID of 1. that ID is being accessed here, allowing 'show' to have a display page for just one entry.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) this enables the creation of a form(whose inputs are specified on the corresponding view page). this doesn't actually make a new post, but it makes the space where one will be added in the future.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) this allows for the creation made in the 'new' def to actually take affect, calling on the parameters specified on line 58. without this, the form created in the 'new' def has no functionality other than being able to type in some boxes.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) on line 36, you are establishing the form for 'edit'. the form's inputs will be set on the 'edit' view page, but without this code, the form won't actually load. it calls on 'params[:id]', which only lets you edit the post that corresponds with the id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) similar to 'new' and 'create', the code on line 42 is what enables an edit to actually be functional. without this, your edit method will just be a form with no functionality. here, it calls on 'blog_post_params' to ensure only specific information can be edited.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) the code on line 52 is telling your code to return to the index(blog_posts) page after destroying a blog post, rather than having to manually navigate or click a button to return.
      redirect_to blog_posts_path
    end
  end

  # ---9) 'private' does exactly as it says-- it keeps access to your method private. 'blog_post_params' can now only be called within the 'BlogPostController' method, keeping the data even more secure.
  private
  def blog_post_params
    # ---10)this code indicates which values are required for an update or creation to be considered valid. 'permit' here shows which values are permitted-- in this case, :title and :content. not only does this allow these values to be created or altered, it also prevents a user from altering information that should be private and/or unaltered.
    params.require(:blog_post).permit(:title, :content)
  end
end
