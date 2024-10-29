// src/static/blogData.ts

export type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Project 1",
        date: "10/17/2024",
        description: "Project Description",
        image: "project1.jpg",
        imageAlt: "Project 1 Image",
        slug: "project-1-link"
    },
    {
        title: "Project 2",
        date: "10/17/2024",
        description: "Project Description",
        image: "project2.jpg",
        imageAlt: "Project 2 Image",
        slug: "project-2-link"
    }
];

export default blogs; // Export the blogs array
