var blogs = [
    {
        title: "Project1",
        date: "10/17/2024",
        description: "Project Description",
        image: "project1.jpg",
        imageAlt: "Project 1 Image",
        slug: "project-1-link" // Update with the slug of the blog page
    },
    {
        title: "Project2",
        date: "10/17/2024",
        description: "Project Description",
        image: "project2.jpg",
        imageAlt: "Project 2 Image",
        slug: "project-2-link"
    }
];
var blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement('div');
        blogDiv.className = 'blog-post';
        var blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;
        var blogDate = document.createElement('small');
        blogDate.textContent = blog.date;
        var blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        var blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        var blogLink = document.createElement('a');
        blogLink.href = "blogs/".concat(blog.slug, ".html"); // Use the slug to create the URL
        blogLink.textContent = 'Read More';
        blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(blogDate);
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogDescription);
        blogDiv.appendChild(blogLink);
        blogContainer.appendChild(blogDiv);
    });
}
