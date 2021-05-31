import React from 'react'

// Opens current page content
export default function Content(props) {
  const { pages, currentPage } = props

  // Find the page that is currently set to be open
  let content = null

  pages.forEach((p) => {
    // Using title as an id
    if (p.title === currentPage) {
      content = p.page
    }
  })
  
  return (
    <div>
      {content}
    </div>
  );
}
