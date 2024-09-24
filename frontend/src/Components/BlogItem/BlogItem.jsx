import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.css';

const BlogItem = ({ id, image, title, createdAt }) => {
  const currentTime = new Date();
  const blogTime = new Date(createdAt);
  const timeDifferenceInMilliseconds = currentTime - blogTime;

  const timeDifferenceInDays = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
  const timeDifferenceInWeeks = Math.floor(timeDifferenceInDays / 7);
  const timeDifferenceInMonths = Math.floor(timeDifferenceInDays / 30.44); // Average days in a month
  const timeDifferenceInYears = Math.floor(timeDifferenceInDays / 365.25); // Average days in a year

  let displayTime;
  if (timeDifferenceInDays < 7) {
    displayTime = `${timeDifferenceInDays} Day${timeDifferenceInDays !== 1 ? 's' : ''} Ago`;
  } else if (timeDifferenceInWeeks < 4) {
    displayTime = `${timeDifferenceInWeeks} Week${timeDifferenceInWeeks !== 1 ? 's' : ''} Ago`;
  } else if (timeDifferenceInMonths < 12) {
    displayTime = `${timeDifferenceInMonths} Month${timeDifferenceInMonths !== 1 ? 's' : ''} Ago`;
  } else {
    displayTime = `More than a Year Ago`;
  }


  return (
    <div>
      <a
        href={`/blogDetails/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <div className="blogs_box">
          <div className="blogs_img">
            <img src={image} alt="blogImage" />
            <div className="blogs_after">
              <span>Read More</span>
            </div>
          </div>
          <div className="blogs_content">
            <h4>{title}</h4>
            {displayTime > 0 ? (
              <h5>{displayTime}</h5>
            ) : (
              <h5>Less than a day ago</h5>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogItem;
