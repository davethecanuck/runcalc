import { makeStyles } from '@material-ui/core'
import React from 'react'
import PageHeader from './PageHeader'

// Opens current page content
export default function Content(props) {
  const { pages, currentPage } = props

  // Find the page that is currently set to be open
  let content = null
  let header = null

  pages.forEach((p) => {
    // Using title as an id
    if (p.title === currentPage) {
      content = p.page
      header = (
        <PageHeader
          title={p.longTitle}
          icon={p.icon}
        />
      )
    }
  })
  
  return (
    <div>
      {header}
      {content}
    </div>
  );
}

// Common CSS for page content
export const contentStyles = makeStyles(theme => ({
  pageContentHead: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1), 
    padding: theme.spacing(1),
  },
  pageContent: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(16),  // Stay above footer and FAB
    padding: theme.spacing(1),
  },
  fabButton: {
    left: 'auto',
    right: theme.spacing(1),
    position: 'fixed',

    // Floating button at top
    //top: theme.spacing(9),
    //bottom: 'auto',

    // Floating button at bottom
    bottom: theme.spacing(9),
    top: 'auto',
  },
}))
