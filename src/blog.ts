type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Project1",
        date: "10/17/2024",
        description: "Project Description",
        image: "project1.jpg",
        imageAlt: "Project 1 Image",
        slug: "project-1-link"
    },
    {
        title: "Project2",
        date: "10/17/2024",
        description: "Project Description",
        image: "project2.jpg",
        imageAlt: "Project 2 Image",
        slug: "project-2-link"
    }
]

const blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    blogs.forEach(blog => {
        const blogDiv = document.createElement('div');
        blogDiv.className = 'blog-post';

        const blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;
        
        const blogDate = document.createElement('small');
        blogDate.textContent = blog.date;

        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;

        const blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;

        const blogLink = document.createElement('a');
        blogLink.href = blog.slug;
        blogLink.textContent = 'Read More';

        blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(blogDate);
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogDescription);
        blogDiv.appendChild(blogLink);

        blogContainer.appendChild(blogDiv);
    });
}

