import React from 'react'
import { withStyles, AppBar, Toolbar, Typography} from '@material-ui/core'

const Nav = (props) => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='title'>
                Countries
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
