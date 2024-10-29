// src/components/blogPreview.tsx
import React from 'react';
import { Blog } from '@/app/blogData'; // Ensure correct import path for Blog type
import styles from './blogPreview.module.css';
import Image from 'next/image';

export default function BlogPreview(props: Blog) {
    const { title, date, description, image, imageAlt, slug } = props;

    return (
        <div className={styles.blogPost}>
            <h3 className={styles.title}>{title}</h3>
            <small className={styles.date}>{date}</small>
            <div className={styles.imageWrapper}>
                <Image src={image} alt={imageAlt} width={500} height={500} className={styles.image} />
            </div>
            <p className={styles.description}>{description}</p>
            <a href={`/blogs/${slug}`} className={styles.readMore}>Read More</a>
        </div>
    );
}
